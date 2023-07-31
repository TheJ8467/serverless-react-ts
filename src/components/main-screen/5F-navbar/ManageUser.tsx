import {
  FunctionComponent as FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from 'react';
import { useThunk } from '../../../hooks/use-thunk';
import { RootState, fetchUsers, useCheckAuthStatusQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';

const ManageUser: FC<ModalCompProps> = ({ showModal, setShowModal }) => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const userData = useSelector((state: RootState) => {
    return state.users.data;
  });
  const { isLoading, data, error } = useCheckAuthStatusQuery({});

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleClose = () => {
    setShowModal(!showModal);
  };

  // let content;
  // if (isLoadingUsers) {
  //   content = <div>Please wait, we are registering you..</div>;
  // } else if (loadingUsersError) {
  //   content = <div>Error fetching data...</div>;
  // } else {
  //   content = userData.map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p className="p-4 mb-4 border rounded-lg bg-sky-400 text-white ">
  //           Hi {user.name}, Welcome to my app
  //         </p>
  //         <button
  //           className="flex ml-auto border rounded-xl p-2 bg-yellow-400"
  //           onClick={handleClose}
  //         >
  //           Sign in
  //         </button>
  //       </div>
  //     );
  //   });
  // }

  let loginStatus;
  if (typeof data !== 'undefined') {
    loginStatus = <p>{data.isLogin ? 'Logged in' : 'Logged out'}</p>;
  }

  return (
    <div>
      {/* <p>{content}</p> */}
      <p className="p-4">{loginStatus}</p>
      <button
        className="flex ml-auto border rounded-xl p-2 bg-yellow-400"
        onClick={handleClose}
      >
        Sign in
      </button>
    </div>
  );
};

export default ManageUser;
