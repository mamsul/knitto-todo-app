'use client';

import { movePage } from '@/redux/features/todosSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import Pagination from '../Pagination';

export default function TodoPaginate() {
  const dispatch = useAppDispatch();
  const { pageLimit } = useAppSelector((state) => state.todos);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginate = (page: number) => {
    setCurrentPage(page);
    dispatch(movePage(page * 10 - 10));
  };

  return (
    <Pagination
      currentPage={currentPage}
      perPage={pageLimit}
      totalResults={200}
      onChangePaginate={(e) => handlePaginate(e)}
      isLoading={false}
    />
  );
}
