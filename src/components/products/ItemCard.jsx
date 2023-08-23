import { Link } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryParams';

export default function ItemCard({ title, imgUrl, id }) {
  const { state } = useQueryParams();
  return (
    <div className="p-4 flex h-fit flex-col justify-between items-center gap-6 rounded border bg-light border-black">
      <img
        src={imgUrl}
        alt={title}
        className="rounded object-cover object-top w-full max-w-[216px] h-[216px]"
      />
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <Link
        state={state}
        to={`/products/${id}`}
        className="w-full py-1 text-center border rounded shadow border-black bg-fourth hover:bg-third hover:font-semibold active:border-transparent active:shadow-inner active:bg-fourth">
        Ver detalles
      </Link>
    </div>
  );
}
