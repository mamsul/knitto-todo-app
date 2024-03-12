import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageLimit: 10,
  pageStart: 0,
} as ITodosState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    reset: () => initialState,
    movePage: (state, action: PayloadAction<number>) => {
      state.pageStart = action.payload;
    },
  },
});

export const { reset, movePage } = todosSlice.actions;

export default todosSlice.reducer;
