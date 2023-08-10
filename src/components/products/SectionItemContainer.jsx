export default function SectionItemContainer({ children }) {
  return (
    <div className="m-8 p-8 flex flex-col gap-5 items-center rounded shadow-xl bg-fourth">
      {children}
    </div>
  );
}
