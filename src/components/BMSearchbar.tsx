import React, { FunctionComponent as FC} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const BMSearchbar: FC<{}> = () => {
    
  return (
    <div className="container mx-auto pl-4 pr-4 bg-green-300 rounded-b-xl">
    <div className='flex justify-between'>
    <div className='m-4'>address</div>
    <div className='flex justify-between'>
    <div className='m-4'>menu</div> 
    <div className='m-4'>alert</div>
    </div>
    </div>
    <div className='flex justify-center relative'>
        <AiOutlineSearch size={25} className='absolute left-7 top-3.5'/>
    <input placeholder='Search here' className='w-11/12 mb-4 py-3 px-11 border border-black' />
    </div>
    </div>
  );
}

export default BMSearchbar;
