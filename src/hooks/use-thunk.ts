import { useState, useCallback, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk: (arg: any) => any) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg: any) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: SetStateAction<null>) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk],
  );

  return [runThunk, isLoading, error];
}
