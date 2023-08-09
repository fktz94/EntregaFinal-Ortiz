import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots as Loader } from 'svg-loaders-react';
import ItemList from './ItemList';
import getProducts, { getCategoryFilters } from '../../utilities/getProducts';
import FilterButton from './FilterButton';

export default function ItemListContainer() {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts();
        setItems(fetchedProducts);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => setItems(null);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCategoryFilters();
        setFilters(data);
      } catch (e) {
        console.log(e);
      }
    })();
    return () => setFilters(null);
  }, []);

  const filteredItems = categoryParam
    ? items?.filter((item) => item.category === categoryParam)
    : items;

  const handleParams = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

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
    <div className="m-8 p-8 flex flex-col gap-5 items-center rounded shadow-xl bg-fourth">
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
        <ItemList
          items={filteredItems}
          searchState={{
            search: searchParams?.toString() ? `?${searchParams?.toString()}` : '',
            category: categoryParam || ''
          }}
        />
      )}
    </div>
  );
}
