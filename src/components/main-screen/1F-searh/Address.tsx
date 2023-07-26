import { FunctionComponent as FC } from 'react';
import { UserProps } from '../../../interfaces/UserProps';
import { useThunk } from '../../../hooks/use-thunk';
import { RootState, addAddress, useFetchAddressesQuery } from '../../../store';
import { fetchAddress } from '../../../store/thunks/fetchAddress';
import { useSelector } from 'react-redux';
// typed address or get current loc with api
const Address: FC<UserProps> = ({ user }) => {
  const [doCreateAddress, isCreatingAddress, creatingAddressError] =
    useThunk(addAddress);
  const [doFetchAddresses, isLoadingAddresses, loadingAddressesError] =
    useThunk(fetchAddress);
  const { data: addresses, isLoading, error } = useFetchAddressesQuery(user);

  return <h2></h2>;
};

export default Address;
