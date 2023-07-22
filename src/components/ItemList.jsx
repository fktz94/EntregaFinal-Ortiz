import Item from './Item';

function ItemList({ items }) {
  const itemList = items.map(({ id, title, imgUrl, stock }) => {
    return <Item key={id} title={title} imgUrl={imgUrl} quantity={stock} />;
  });

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,_1fr))]">{itemList}</div>
  );
}

export default ItemList;
