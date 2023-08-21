import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import DropdownItems from './DropdownItems';
import { ProductContext } from '../../context/ProductContext';

export default function Dropdown() {
  const { filters } = useContext(ProductContext);

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

  const dropdownItems = filters?.map((filter) => {
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
            {filters.length > 0 ? (
              <>
                <DropdownItems text="Todos" to="products" />
                {dropdownItems}
              </>
            ) : (
              <li className="text-center py-1">
                <small>Cargando...</small>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
