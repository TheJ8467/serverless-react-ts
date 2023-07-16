import React, { FunctionComponent as FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setName } from '../store/slices/mySlice';

const BMSerachbar: FC<{}> = () => {
    
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
        <AiOutlineSearch size={25} className='absolute left-4'/>
    <input placeholder='Search here' className='w-11/12 mb-4 border border-black pl-6' />
    </div>
    </div>
  );
}

export default BMSerachbar;
