'use client';

import { useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
import TodoForm from './TodoForm';

export default function TodoHead() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <button
          className="flex items-center rounded bg-seco-dark p-3 text-prim-white hover:bg-prim-dark"
          onClick={() => setOpenForm(!openForm)}>
          {!openForm && <PlusIcon className="me-3 h-4 w-4" />}
          <span className="text-sm font-light">
            {!openForm ? 'Add Todo' : 'Hide form'}
          </span>
        </button>
      </div>

      {openForm && <TodoForm />}
    </div>
  );
}
