import { useEffect, useState } from 'react';
import AddButton from './AddButton';

export default function ItemCount({ onAdd, stock }) {
  const [purchase, setPurchase] = useState(stock > 0 ? 1 : 0);

  const onPurchase = (value) => {
    if (stock > 0) {
      if (value === '-') return setPurchase((prev) => prev - 1);
      if (value === '+') return setPurchase((prev) => prev + 1);
    }
    return false;
  };

  // Según la documentación de REACT, debería encontrar una manera de no usar useEffect para lo que sigue.
  // https://react.dev/learn/you-might-not-need-an-effect
  useEffect(() => {
    setPurchase(stock > 0 ? 1 : 0);
  }, [stock]);

  const handleAddToCart = () => {
    if (purchase > 0 && purchase <= stock) return onAdd(purchase);
    return false;
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <div className="flex">
        <AddButton
          value="-"
          side="l"
          onPurchase={purchase > 0 ? onPurchase : () => {}}
          disabled={purchase <= 0}
        />
        <input
          type="text"
          className="w-8 font-semibold text-center outline-none bg-light"
          readOnly
          value={purchase}
        />
        <AddButton
          value="+"
          side="r"
          onPurchase={purchase < stock ? onPurchase : () => {}}
          disabled={purchase >= stock}
        />
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className={`py-1 px-2 border rounded transition-colors outline-none ${
          purchase <= 0
            ? 'cursor-default bg-gray-500 text-gray-300 border-gray-500'
            : 'bg-third border-black  hover:bg-transparent active:bg-gray-300 active:border-teal-600'
        }`}>
        Agregar al carrito
      </button>
    </div>
  );
}
