export default function ItemList({ children }) {
  return (
    <div className="mx-14 grid gap-4 max-w-4xl grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
      {children}
    </div>
  );
}
