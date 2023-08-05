import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import CartWidget from './CartWidget';
import { getCategoryFilters } from '../utilities/getProducts';

function AccountButtons({ text }) {
  return (
    <button
      type="button"
      className="px-5 py-1 border transition-colors font-semibold text-sm border-black hover:bg-black hover:text-fourth">
      {text}
    </button>
  );
}
function DropdownItems({ text, to }) {
  const className = 'w-full p-3 block tracking-wide font-semibold hover:bg-first hover:text-fourth';
  return (
    <li className="relative">
      <Link to={to} className={className}>
        {text}
      </Link>
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

  const activeStyle = {
    color: 'rgb(241,222,201)',
    borderBottomColor: 'rgb(241,222,201)'
  };

  const dropdownItems = getCategoryFilters().map((filter) => {
    const text = filter.charAt(0).toUpperCase() + filter.slice(1);
    return <DropdownItems key={filter} text={text} to={`products?category=${filter}`} />;
  });

  return (
    <div className="relative">
      <NavLink
        to="products"
        className={className}
        onMouseEnter={(event) => handleSetIsOpen(event)}
        onMouseLeave={(event) => handleSetIsOpen(event)}
        style={({ isActive }) => (isActive ? activeStyle : null)}>
        Productos
        {isOpen ? (
          <BiSolidUpArrow style={{ fontSize: '.5rem' }} />
        ) : (
          <BiSolidDownArrow style={{ fontSize: '.5rem' }} />
        )}
      </NavLink>
      {isOpen && (
        <div className="absolute w-full bg-third">
          <ul
            className="border border-black"
            onMouseEnter={(event) => handleSetIsOpen(event)}
            onMouseLeave={(event) => handleSetIsOpen(event)}>
            {dropdownItems}
          </ul>
        </div>
      )}
    </div>
  );
}
function NavigationLink({ text, to }) {
  const className =
    'p-2 border border-transparent font-semibold text-lg transition-colors hover:text-fourth hover:border-b-fourth';

  const activeStyle = {
    color: 'rgb(241,222,201)',
    borderBottomColor: 'rgb(241,222,201)'
  };

  return (
    <li>
      <NavLink
        to={to}
        className={`block h-full ${className}`}
        style={({ isActive }) => (isActive ? activeStyle : null)}>
        {text}
      </NavLink>
    </li>
  );
}

export default function NavBar() {
  return (
    <header className="p-5 shadow-md border-b border-black bg-first">
      <div className="flex justify-between items-center max-w-6xl m-auto">
        <Link
          to="/"
          className="font-bold text-3xl tracking-wide transition-colors hover:text-fourth">
          MORO
        </Link>
        <nav>
          <ul className="flex justify-between gap-2">
            <NavigationLink text="Nosotros" to="/about" />
            <Dropdown />
            <NavigationLink text="Contacto" to="/contact" />
          </ul>
        </nav>
        <div className="flex gap-2">
          <AccountButtons text="Registrarse" />
          <AccountButtons text="Ingresar" />
        </div>
        <Link to="./cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
}
