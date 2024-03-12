interface TodoItemProps {
  title: string;
  isCompleted: boolean;
}

export default function TodoItem({ title, isCompleted }: TodoItemProps) {
  return (
    <div className="flex flex-row justify-between gap-5 px-2 py-4 hover:bg-seco-dark/5 md:gap-0">
      <div className="flex w-9/12">
        <span>{title}</span>
      </div>
      <div className="flex h-max w-2/12 justify-end">
        <span
          className={`rounded-full p-2 text-xs font-light ${isCompleted ? 'bg-seco-dark text-prim-white' : 'border border-seco-dark text-prim-dark'}`}>
          {isCompleted ? 'Completed' : 'Uncompleted'}
        </span>
      </div>
    </div>
  );
}
