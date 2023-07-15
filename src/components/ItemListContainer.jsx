export default function ItemListContainer({ greeting }) {
  return (
    <div className="mx-8 p-20 rounded-full flex items-center justify-center bg-fourth">
      <span className="text-2xl font-semibold tracking-wider">{greeting}</span>
    </div>
  );
}
