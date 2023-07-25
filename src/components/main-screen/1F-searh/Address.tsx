import { FunctionComponent as FC } from 'react';
import { useAddAddressMutation } from '../../../store';
import { UserProps } from '../../../interfaces/UserProps';
// typed address or get current loc with api
const Address: FC<UserProps> = ({ user }) => {
  return <h2>{user}</h2>;
};

export default Address;
