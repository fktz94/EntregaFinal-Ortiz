export default function ItemListContainer({ greeting }) {
  return (
    <div className="mx-8 p-20 rounded-full flex items-center justify-center shadow-xl bg-fourth">
      <span className="text-2xl font-semibold tracking-wider">{greeting}</span>
    </div>
  );
}
