'use client';

import { useAppSelector } from '@/redux/hooks';
import { useGetTodosQuery } from '@/redux/service/todoApi';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

// refetch after 10minutes
const INTERVAL = 600000;

interface TodoListProps {
  todos: ITodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [skipQuery, setSkipQuery] = useState<boolean>(true);
  const { pageStart, pageLimit } = useAppSelector((state) => state.todos);
  const { data, error } = useGetTodosQuery(
    {
      pageStart,
      pageLimit,
    },
    { skip: skipQuery, pollingInterval: INTERVAL },
  );

  useEffect(() => {
    setSkipQuery(false);
  }, [pageStart]);

  const todosData = data ?? todos;

  return (
    <div className="flex flex-col divide-y divide-seco-dark/10">
      {error ? (
        <p>Something wrong!</p>
      ) : (
        todosData?.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            isCompleted={todo.completed}
          />
        ))
      )}
    </div>
  );
}
