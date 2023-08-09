import { Link } from 'react-router-dom';

export default function ItemCard({ title, imgUrl, id, searchState }) {
  return (
    <div className="p-4 flex flex-col justify-between items-center gap-6 rounded border bg-light border-black">
      <img src={imgUrl} alt={title} className="rounded object-cover" />
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <Link
        state={searchState}
        to={`${id}`}
        className="w-full py-1 text-center border rounded shadow border-black bg-fourth hover:bg-third hover:font-semibold active:border-transparent active:shadow-inner active:bg-fourth">
        Ver detalles
      </Link>
    </div>
  );
}
