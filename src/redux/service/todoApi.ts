import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  refetchOnFocus: false,
  refetchOnReconnect: true,
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], ITodosState>({
      query: ({ pageStart, pageLimit }) =>
        `todos?_start=${pageStart}&_limit=${pageLimit}`,
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
