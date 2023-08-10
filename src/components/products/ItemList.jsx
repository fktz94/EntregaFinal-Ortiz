export default function ItemList({ children }) {
  return (
    <div className="mx-14 grid gap-4 grid-cols-[repeat(auto-fill,minmax(220px,_1fr))]">
      {children}
    </div>
  );
}
