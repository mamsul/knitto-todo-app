interface TodoItemProps {
  no: number;
  title: string;
  isCompleted: boolean;
}

export default function TodoItem({ no, title, isCompleted }: TodoItemProps) {
  return (
    <div className="flex flex-row justify-between px-2 py-4 hover:bg-seco-dark/5">
      <div className="flex w-9/12">
        <p className="text-sm md:text-base">
          <span className="me-2 text-seco-dark/70">{no}.</span> {title}
        </p>
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
