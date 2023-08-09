export default function AddButton({ value, side, onPurchase, disabled }) {
  const roundedSide = side === 'l' ? 'rounded-l-full' : 'rounded-r-full';

  return (
    <button
      type="button"
      onClick={() => onPurchase(value)}
      className={`py-1 px-2 ${roundedSide} font-medium border bg-black text-light
       border-black outline-none ${
         disabled
           ? 'bg-gray-500 text-gray-300 border-gray-500 cursor-default'
           : 'hover:text-fourth active:border-fourth'
       }`}>
      {value}
    </button>
  );
}
