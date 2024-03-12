import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  refetchOnFocus: false,
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], number>({
      query: (pageStart) => `todos?_start=${pageStart}&_limit=10`,
    }),
    addTodo: builder.mutation<ITodo, ITodo>({
      query: (payload) => ({
        url: 'todos',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = todoApi;
