import ItemCard from './ItemCard';

export default function ItemList({ items, searchState }) {
  const itemList = items?.map(({ id, title, imgUrl, stock }) => {
    return (
      <ItemCard
        key={id}
        searchState={searchState}
        id={id}
        title={title}
        imgUrl={imgUrl}
        quantity={stock}
      />
    );
  });

  return (
    <div className="mx-14 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
      {itemList}
    </div>
  );
}
