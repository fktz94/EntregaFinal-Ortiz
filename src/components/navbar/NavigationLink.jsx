import { NavLink } from 'react-router-dom';

export default function NavigationLink({ text, to }) {
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
