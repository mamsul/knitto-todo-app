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
    nextPage: (state) => {
      state.pageStart += 10;
    },
    prevPage: (state) => {
      state.pageStart -= 10;
    },
    movePage: (state, action: PayloadAction<number>) => {
      state.pageStart = action.payload;
    },
  },
});

export const { reset, nextPage, prevPage, movePage } = todosSlice.actions;

export default todosSlice.reducer;
