import { useState } from 'react';
import ItemCount from './ItemCount';

function Item({ title, quantity, imgUrl }) {
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
      <div className="p-4 flex flex-col items-center gap-6 ">
        <img src={imgUrl} alt={title} className="rounded" />
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <button
          type="button"
          className="w-full py-1 border rounded border-black bg-fourth hover:bg-third">
          Ver detalles
        </button>
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

export default Item;
