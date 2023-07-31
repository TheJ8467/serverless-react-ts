import { useState, useCallback, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

// this hook is for the process of loading on -> get data -> loading off

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
