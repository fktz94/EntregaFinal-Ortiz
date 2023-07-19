import { useState } from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {
  const [stock, setStock] = useState(4);

  const onAdd = (selectedPurchase) => {
    if (stock > 0 && selectedPurchase > 0 && selectedPurchase <= stock) {
      return setStock((prev) => prev - selectedPurchase);
    }
    return false;
  };

  return (
    <div className="mx-8 p-20 flex flex-col gap-5 items-center justify-center rounded-full shadow-xl bg-fourth">
      <span className="text-2xl font-semibold tracking-wider">{greeting}</span>
      <ItemCount stock={stock} onAdd={onAdd} />
    </div>
  );
}
