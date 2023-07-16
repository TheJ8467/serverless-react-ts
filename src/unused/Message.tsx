import React, { FunctionComponent as FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setName } from '../store/slices/mySlice';

const Message: FC<{}> = () => {
  const name = useSelector((state: RootState) => state.me.name)
  const dispatch = useDispatch()
  const [changename, setChangename] = useState('')

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    dispatch(setName(changename))
    event.preventDefault()
    setChangename('')
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChangename(event.target.value)
  }

  return (
    <div className="container mx-auto">
      <h2 className='text-blue-400 m-4'>Current name is {name}</h2>
      <form onSubmit={handleSubmit} className='m-4'>
        <input onChange={handleChange} className='border rounded-full border-black border' value={changename} />
        <button className='border border-black rounded-md p-1 bg-black text-yellow-500 m-4'>Change name</button>
      </form>
    </div>
  );
}

export default Message;
