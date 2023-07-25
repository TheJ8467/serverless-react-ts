// import { AsyncThunk, SerializedError } from '@reduxjs/toolkit';
// import { useState, useCallback, SetStateAction } from 'react';
// import { useDispatch } from 'react-redux';

// export function useThunk<T, ThunkArg>(
//   thunk: AsyncThunk<T, ThunkArg, {}>,
// ) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null >(null);
//   const dispatch = useDispatch();

//   const runThunk = useCallback(
//     (arg: ThunkArg) => {
//       setIsLoading(true);
//       dispatch(thunk(arg))
//         .unwrap()
//         .catch((err: SerializedError) =>
//           setError(err.message),
//         )
//         .finally(() => setIsLoading(false));
//     },
//     [dispatch, thunk],
//   );

//   return [runThunk, isLoading, error];
// }
