import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Dropdown from './Dropdown';
import NavigationLink from './NavigationLink';
import AccountButtons from './AccountButtons';

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
