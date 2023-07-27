import { FunctionComponent as FC, useEffect } from 'react';
import { useThunk } from '../../../hooks/use-thunk';
import { RootState, addUser, fetchUsers } from '../../../store';
import { useSelector } from 'react-redux';

const ManageUser: FC<{}> = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const data = useSelector((state: RootState) => {
    return state.users.data;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <div>Please wait, we are registering you..</div>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <div key={user.id}>Hi {user.name}, Welcome to my app</div>;
    });
  }

  return (
    <div>
      {/* <button
        onClick={handleUserAdd}
        className="border rounded-full border-black w-6/12"
      >
        Add user
      </button> */}
      {creatingUserError && <div>'Error creating user...'</div>}
      <p>{content}</p>
    </div>
  );
};

export default ManageUser;
