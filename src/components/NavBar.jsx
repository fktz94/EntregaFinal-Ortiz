import { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import CartWidget from './CartWidget';

function DropdownItems({ text }) {
  const className = 'w-full p-3 block tracking-wide font-semibold hover:bg-first hover:text-fourth';
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
  const className = `p-2 flex items-center gap-2 border border-transparent font-semibold text-lg transition-colors ${
    isOpen ? 'text-fourth' : ''
  }`;

  const handleSetIsOpen = ({ type }) => {
    if (type === 'mouseenter') return setIsOpen(true);
    return setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={className}
        type="button"
        onMouseEnter={(event) => handleSetIsOpen(event)}
        onMouseLeave={(event) => handleSetIsOpen(event)}>
        {/* Productos {isOpen ? '↑' : '↓'} */}
        Productos
        {isOpen ? (
          <BiSolidUpArrow style={{ fontSize: '.5rem' }} />
        ) : (
          <BiSolidDownArrow style={{ fontSize: '.5rem' }} />
        )}
      </button>
      {isOpen && (
        <div className="absolute w-full bg-third">
          <ul
            className="border border-black"
            onMouseEnter={(event) => handleSetIsOpen(event)}
            onMouseLeave={(event) => handleSetIsOpen(event)}>
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
  const className =
    'p-2 border border-transparent font-semibold text-lg transition-colors hover:text-fourth hover:border-b-fourth';
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
    <header className="p-5 sticky top-0 shadow-md bg-first">
      <div className="flex justify-between items-center max-w-4xl m-auto">
        <span className="font-bold cursor-default text-3xl tracking-wide transition-colors hover:text-fourth">
          MORO
        </span>
        <nav>
          <ul className="flex justify-between gap-2">
            <NavLink text="Nosotros" />
            <Dropdown />
            <NavLink text="Contacto" />
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
}
