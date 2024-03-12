import TodoHead from '@/components/todo/TodoHead';
import TodoList from '@/components/todo/TodoList';
import TodoPaginate from '@/components/todo/TodoPaginate';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

async function getTodos() {
  try {
    const res = await fetch(`${BASE_URL}/todos?_start=0&_limit=10`);
    return res.json();
  } catch (error) {
    throw error;
  }
}

export default async function Home() {
  const todos: ITodo[] = await getTodos();

  return (
    <main className="mx-auto min-h-screen max-w-4xl pb-10 pt-20 md:pt-36">
      <section className="border-b border-seco-dark/20 px-5 pb-5 md:px-16">
        <TodoHead />
      </section>

      <section className="px-5 py-10 md:px-16">
        <TodoList todos={todos} />
      </section>

      <section className="border-t border-seco-dark/20 px-5 pt-5 md:px-16">
        <TodoPaginate />
      </section>
    </main>
  );
}
