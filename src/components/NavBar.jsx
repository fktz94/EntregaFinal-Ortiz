import { useState } from 'react';
import CartWidget from './CartWidget';

function DropdownItems({ text }) {
  const className = 'w-full p-1 block hover:bg-first';
  return (
    <li className="relative">
      <a href="/" className={className}>
        {text}
      </a>
    </li>
  );
}
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const className = 'p-2';
  return (
    <div className="relative">
      <button
        className={className}
        type="button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        Productos <small>{isOpen ? '↑' : '↓'}</small>
      </button>
      {isOpen && (
        <div className="absolute w-full bg-third">
          <ul
            className="border"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <DropdownItems text="Remeras" />
            <DropdownItems text="Buzos" />
            <DropdownItems text="Pantalones" />
            <DropdownItems text="Gorros" />
          </ul>
        </div>
      )}
    </div>
  );
}
function NavLink({ text }) {
  const className = 'p-2 border border-transparent hover:border-b-black';
  return (
    <li>
      <a href="/" className={`block h-full ${className}`}>
        {text}
      </a>
    </li>
  );
}

export default function NavBar() {
  return (
    <header className="flex justify-between px-8 py-5 items-center bg-first">
      <span className="font-bold cursor-default text-lg tracking-wider">MORO</span>
      <nav>
        <ul className="flex justify-between gap-2">
          <NavLink text="Contacto" />
          <Dropdown />
          <NavLink text="Nosotros" />
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}
