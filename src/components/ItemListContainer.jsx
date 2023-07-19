import { useState } from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {
  const [stock, setStock] = useState(6);
  const [purchase, setPurchase] = useState(stock > 0 ? 1 : 0);

  const onAdd = (value) => {
    if (stock > 0) {
      if (value === '-') return setPurchase((prev) => prev - 1);
      if (value === '+') return setPurchase((prev) => prev + 1);
    }
    return false;
  };

  return (
    <div className="mx-8 p-20 flex flex-col gap-5 items-center justify-center rounded-full shadow-xl bg-fourth">
      <span className="text-2xl font-semibold tracking-wider">{greeting}</span>
      <ItemCount onAdd={onAdd} purchase={purchase} stock={stock} />
    </div>
  );
}
