import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MyState {
    name: string
}

const initialState: MyState = {
    name: 'DJ'
}

const mySlice = createSlice({
    name: 'myName',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const myReducer = mySlice.reducer
export const { setName } = mySlice.actions