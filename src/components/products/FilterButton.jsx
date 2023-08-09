export default function FilterButton({ text, onClick, activeStyle }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2 py-1 border rounded shadow font-medium border-first hover:bg-light active:bg-first active:text-light ${
        activeStyle ? 'bg-light' : ''
      }`}>
      {text}
    </button>
  );
}
