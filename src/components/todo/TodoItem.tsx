interface TodoItemProps {
  title: string;
  isCompleted: boolean;
}

export default function TodoItem({ title, isCompleted }: TodoItemProps) {
  return (
    <div className="hover:bg-seco-dark/5 flex flex-row px-2 py-4">
      <div className="w-10/12">
        <span>{title}</span>
      </div>
      <div className="flex h-max w-2/12 justify-end">
        <span
          className={`rounded-full p-2 text-xs font-light ${isCompleted ? 'bg-seco-dark text-prim-white' : 'border-seco-dark text-prim-dark border'}`}>
          {isCompleted ? 'Completed' : 'Uncompleted'}
        </span>
      </div>
    </div>
  );
}
