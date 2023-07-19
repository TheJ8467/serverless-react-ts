import { FunctionComponent as FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar: FC<{}> = () => {
  return (
    <div className="pt-6 bg-green-300 rounded-b-xl">
      <div className="flex justify-between">
        <div className="m-4">address</div>
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
