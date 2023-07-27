import { FunctionComponent as FC } from 'react';
import { SquareProps } from '../../../interfaces/SquareProps';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
import { FaRegRectangleList } from 'react-icons/fa6';
import { BiWinkSmile } from 'react-icons/bi';
import { RiHomeSmileFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar: FC<SquareProps> = ({}) => {
  return (
    <nav className="w-full border rounded-t-3xl border-b-0 bg-white sticky bottom-0 z-50 relative">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col items-center ">
          <AiOutlineSearch size={25} />
          <p className="text-sm">Search</p>
        </div>
        <div className="flex flex-col items-center ">
          <BsSuitHeart size={25} />
          <p className="text-sm">Like</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 mb-5">
          <Link to="/">
            <RiHomeSmileFill size={75} />
          </Link>
        </div>
        <div className="invisible">
          <FaRegRectangleList size={25} />
        </div>
        <div className="flex flex-col items-center ">
          <FaRegRectangleList size={25} />
          <p className="text-sm">List</p>
        </div>
        <div>
          <Link to="/my-info-page" className="flex flex-col items-center ">
            <BiWinkSmile size={25} />
            <p className="text-sm">My info</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
