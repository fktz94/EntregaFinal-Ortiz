import { Link } from 'react-router-dom';

export default function DropdownItems({ text, to }) {
  const className = 'w-full p-3 block tracking-wide font-semibold hover:bg-first hover:text-fourth';
  return (
    <li className="relative">
      <Link to={to} className={className}>
        {text}
      </Link>
    </li>
  );
}
