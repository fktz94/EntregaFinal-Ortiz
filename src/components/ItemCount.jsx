function Button({ value, side, onAdd, disabled }) {
  return (
    <button
      type="button"
      onClick={() => onAdd(value)}
      className={`px-4 p-3 rounded-${side}-full text-xl font-bold  bg-black text-white border border-black ${
        disabled
          ? 'bg-gray-500 text-gray-300 border-gray-500 cursor-default'
          : 'hover:text-fourth active:border-fourth'
      }`}>
      {value}
    </button>
  );
}

export default function ItemCount({ purchase, stock, onAdd }) {
  return (
    <div className="flex">
      <Button value="-" side="l" onAdd={purchase > 0 ? onAdd : () => {}} disabled={purchase <= 0} />
      <input
        type="text"
        className="w-28 font-semibold text-xl text-center bg-white"
        readOnly
        value={purchase}
      />
      <Button
        value="+"
        side="r"
        onAdd={purchase < stock ? onAdd : () => {}}
        disabled={purchase >= stock}
      />
    </div>
  );
}
