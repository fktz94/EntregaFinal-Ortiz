import { useState } from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  const { stock: quantity, imgUrl, title, price, details } = product;
  const [stock, setStock] = useState(quantity);

  const disponible = stock > 0;

  const onAdd = (selectedPurchase) => {
    if (disponible && selectedPurchase > 0 && selectedPurchase <= stock) {
      return setStock((prev) => prev - selectedPurchase);
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-2 rounded border bg-light border-black">
      <div className="p-4 flex flex-col items-center gap-6 max-w-md">
        <img src={imgUrl} alt={title} className="rounded h-96 w-[400px] object-cover" />
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <span>{details}</span>
        <span>{price}</span>
        <ItemCount onAdd={onAdd} stock={stock} />
      </div>
      <div className="w-full py-1 text-center rounded-b border border-t-gray-400 bg-slate-300">
        {disponible ? (
          <span>
            Stock: <b>{stock}</b>
          </span>
        ) : (
          <b className="text-red-500">No disponible</b>
        )}
      </div>
    </div>
  );
}
