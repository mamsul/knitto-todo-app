export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 md:top-5">
      <nav className="mx-auto h-14 max-w-4xl bg-seco-dark backdrop-blur-sm md:rounded-full">
        <ul className="flex h-full items-center justify-between px-10 text-prim-white">
          <li>
            <h2>Todo App.</h2>
          </li>
          <li>
            <a href="https://github.com/mamsul/knitto-todo-app" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
