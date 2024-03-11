import PlusIcon from '../icons/PlusIcon';

export default function TodoHead() {
  return (
    <div className="flex items-center justify-between">
      <button className="bg-seco-dark text-prim-white hover:bg-prim-dark flex items-center rounded p-3">
        <PlusIcon className="h-4 w-4" />
        <span className="ms-3 text-sm font-light">Add Todo</span>
      </button>
    </div>
  );
}
