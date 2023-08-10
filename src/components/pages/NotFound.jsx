import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>page not found!</h1>
      <Link
        to="."
        className="px-5 py-2 text-xl font-semibold rounded shadow border border-transparent bg-first hover:bg-second hover:border-black active:text-light">
        Volver al home
      </Link>
    </div>
  );
}
