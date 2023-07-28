import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { addressesApi } from './apis/addressesApi';
import { usersReducer } from './slices/userSlice';
import { authApi } from './apis/authApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [addressesApi.reducerPath]: addressesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(addressesApi.middleware)
      .concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/addAddress';
export * from './thunks/fetchAddress';
export {
  useFetchAddressesQuery,
  useAddAddressMutation,
  useRemoveAddressMutation,
} from './apis/addressesApi';
export {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useCheckAuthStatusQuery,
} from './apis/authApi';
