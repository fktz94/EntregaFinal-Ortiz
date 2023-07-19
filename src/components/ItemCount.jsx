import { useEffect, useState } from 'react';

function AddButton({ value, side, onPurchase, disabled }) {
  return (
    <button
      type="button"
      onClick={() => onPurchase(value)}
      className={`px-4 p-3 rounded-${side}-full text-xl font-bold  bg-black text-white border border-black outline-none ${
        disabled
          ? 'bg-gray-500 text-gray-300 border-gray-500 cursor-default'
          : 'hover:text-fourth active:border-fourth'
      }`}>
      {value}
    </button>
  );
}

export default function ItemCount({ onAdd, stock }) {
  const [purchase, setPurchase] = useState(stock > 0 ? 1 : 0);

  const onPurchase = (value) => {
    if (stock > 0) {
      if (value === '-') return setPurchase((prev) => prev - 1);
      if (value === '+') return setPurchase((prev) => prev + 1);
    }
    return false;
  };

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
          className="w-28 font-semibold text-xl text-center outline-none bg-white"
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
        className={`py-2 border tracking-wide w-44 transition-colors outline-none ${
          purchase <= 0
            ? 'cursor-default bg-gray-500 text-gray-300 border-gray-500'
            : 'bg-third  border-black  hover:bg-transparent active:font-semibold active:bg-gray-100 '
        }`}>
        Agregar al carrito
      </button>
    </div>
  );
}
