// it is for initial state of slice in store

export interface UserSliceState<T> {
  isLoading: boolean;
  data: T[];
  error: string | null | undefined;
}
