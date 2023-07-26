import { useState, useCallback, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(
  thunk: () => any,
): [() => Promise<void>, boolean, string | null] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(async () => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch((err: SetStateAction<null>) => setError(err))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
}

// export function useThunk(thunk: () => any) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const dispatch = useDispatch();

//   const runThunk = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       await dispatch(thunk()).unwrap();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : String(err));
//     } finally {
//       setIsLoading(false);
//     }
//   }, [dispatch, thunk]);

//   return [runThunk, isLoading, error];
// }
