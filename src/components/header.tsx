import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="top-0 w-full flex justify-between px-5 py-2 items-center">
      <h1>Honeyberry</h1>
      <nav>
        <ModeToggle />
      </nav>
    </header>
  );
}
