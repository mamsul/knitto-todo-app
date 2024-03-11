export default function Header() {
  return (
    <header className="fixed inset-x-0 top-5">
      <nav className="bg-seco-dark mx-auto h-14 max-w-4xl rounded-full backdrop-blur-sm">
        <ul className="text-prim-white flex h-full items-center justify-between px-10">
          <li>
            <h2>Todo App.</h2>
          </li>
          <li>Github</li>
        </ul>
      </nav>
    </header>
  );
}
