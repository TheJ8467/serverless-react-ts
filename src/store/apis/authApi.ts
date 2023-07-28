import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  tagTypes: ['Auth', 'UsersAuth'],
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (credentials) => ({
          url: '/auth/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/auth/logout',
          method: 'POST',
        }),
      }),
      register: builder.mutation({
        query: (newUserInfo) => ({
          url: '/auth/register',
          method: 'POST',
          body: newUserInfo,
        }),
      }),
      getUserInfo: builder.query({
        query: () => ({
          url: '/auth/user',
          method: 'GET',
        }),
      }),
      updateProfile: builder.mutation({
        query: (updatedInfo) => ({
          url: '/auth/user',
          method: 'PUT',
          body: updatedInfo,
        }),
      }),
      resetPassword: builder.mutation({
        query: (email) => ({
          url: '/auth/reset-password',
          method: 'POST',
          body: { email },
        }),
      }),
      refreshToken: builder.mutation({
        query: () => ({
          url: '/auth/refresh-token',
          method: 'POST',
        }),
      }),
      checkAuthStatus: builder.query({
        query: () => ({
          url: '/auth/status',
          method: 'GET',
        }),
      }),
    };
  },
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useCheckAuthStatusQuery,
} = authApi;
export { authApi };
