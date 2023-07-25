import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { addressessReducer } from './slices/addressesSlice';
import { addressesApi } from './apis/addressesApi';
import { usersReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    addressess: addressessReducer,
    [addressesApi.reducerPath]: addressesApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(addressesApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/addAddress';
export {
  useFetchAddressesQuery,
  useAddAddressMutation,
  useRemoveAddressMutation,
} from './apis/addressesApi';
