import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todosSlice';
import { todoApi } from './service/todoApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
