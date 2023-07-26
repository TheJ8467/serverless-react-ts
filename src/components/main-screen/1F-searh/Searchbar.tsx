import { FunctionComponent as FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Address from './Address';

const Searchbar: FC<{}> = () => {
  const [user, setUser] = useState('');
  return (
    <div className="pt-6 bg-green-300 rounded-b-xl">
      <div className="flex justify-between">
        <div className="m-4">
          <Address user={user} />
        </div>
        <div className="flex justify-between">
          <div className="m-4">menu</div>
          <div className="m-4">alert</div>
        </div>
      </div>
      <div className="flex justify-center relative w-full">
        <AiOutlineSearch size={25} className="absolute left-7 top-3.5" />
        <input
          placeholder="Search here"
          className="py-3 px-11 mx-4 mb-4 border border-black w-full"
        />
      </div>
    </div>
  );
};

export default Searchbar;
