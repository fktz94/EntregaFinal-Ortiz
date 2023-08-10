import { ThreeDots as Loader } from 'svg-loaders-react';
import ItemList from './ItemList';
import FilterButton from './FilterButton';
import useProducts from '../../hooks/useProducts';
import useQueryParams from '../../hooks/useQueryParams';
import SectionItemContainer from './SectionItemContainer';
import ItemCard from './ItemCard';

export default function ItemListContainer() {
  const { items, isLoading, filters } = useProducts();
  const { handleParams, categoryParam } = useQueryParams();

  const filteredItems = categoryParam
    ? items?.filter((item) => item.category === categoryParam)
    : items;

  const filterButtons = () => {
    return filters?.map((item) => {
      const text = item.charAt(0).toUpperCase() + item.slice(1);
      return (
        <FilterButton
          key={item}
          onClick={() => handleParams('category', item)}
          text={text}
          activeStyle={categoryParam === item}
        />
      );
    });
  };

  return (
    <SectionItemContainer>
      <h2 className="text-2xl font-semibold tracking-wider">Nuestros productos:</h2>
      {filteredItems && (
        <div className="flex justify-between items-center w-full px-14">
          <div className="flex gap-2">{filters && filterButtons()}</div>
          {categoryParam && (
            <button
              type="button"
              onClick={() => handleParams('category', null)}
              className="font-medium hover:underline active:text-first">
              Quitar filtro
            </button>
          )}
        </div>
      )}
      {isLoading && (
        <div className="m-auto">
          <Loader fill="#8D7B68" height="70px" />
        </div>
      )}
      {filteredItems && (
        <ItemList>
          {filteredItems?.map(({ id, title, imgUrl, stock }) => {
            return <ItemCard key={id} id={id} title={title} imgUrl={imgUrl} quantity={stock} />;
          })}
        </ItemList>
      )}
    </SectionItemContainer>
  );
}
