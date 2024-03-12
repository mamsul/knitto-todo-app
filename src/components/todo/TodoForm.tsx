'use client';

import { useAddTodoMutation } from '@/redux/service/todoApi';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function TodoForm() {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const [data, setData] = useState({ title: '', completed: false });

  const resetForm = () => {
    setData({ title: '', completed: false });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload: ITodo = {
      title: data.title,
      completed: data.completed,
      userId: 1,
    };

    addTodo(payload)
      .unwrap()
      .then((res) => {
        resetForm();
        toast(`"${res.title}", has successfully added`, {
          icon: '✅',
        });
      })
      .catch((err) => {
        toast.error(JSON.stringify(err));
      });
  };

  return (
    <div className="mt-5 h-max w-full rounded-xl border border-seco-dark/10 p-6 shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <input
            type="text"
            className="h-12 w-full rounded-lg border border-seco-dark/20 px-3 outline-none focus:border-seco-dark md:w-6/12 lg:w-4/12"
            placeholder="title"
            value={data.title}
            required
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={data.completed}
              onChange={(e) =>
                setData({ ...data, completed: e.target.checked })
              }
              className="peer sr-only"
            />
            <div className="peer relative h-6 w-11 rounded-full bg-seco-dark/30 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-prim-dark peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-0"></div>
            <span className="ms-3 text-sm font-medium text-prim-dark">
              Completed
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-max rounded bg-seco-dark px-4 py-2 text-prim-white hover:bg-prim-dark">
          <span className="text-sm font-light">
            {isLoading ? 'Please wait...' : 'Submit'}
          </span>
        </button>
      </form>
    </div>
  );
}
