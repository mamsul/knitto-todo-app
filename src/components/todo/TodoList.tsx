'use client';

import { useAppSelector } from '@/redux/hooks';
import { useGetTodosQuery } from '@/redux/service/todoApi';
import TodoItem from './TodoItem';

const INTERVAL = 600000;

export const revalidate = 600;

interface TodoListProps {
  todos: ITodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const { pageStart } = useAppSelector((state) => state.todos);

  const { data, error } = useGetTodosQuery(pageStart, {
    skip: false,
    pollingInterval: INTERVAL,
  });

  const todosData = data ?? todos;

  return (
    <div className="flex flex-col divide-y divide-seco-dark/10">
      {error ? (
        <p>Something wrong!</p>
      ) : (
        todosData?.map((todo) => (
          <TodoItem
            key={todo.id}
            no={todo.id as number}
            title={todo.title}
            isCompleted={todo.completed}
          />
        ))
      )}
    </div>
  );
}
