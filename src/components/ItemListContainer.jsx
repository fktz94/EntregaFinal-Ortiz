import { useEffect, useState } from 'react';
import products from '../mock/products.json';
import ItemList from './ItemList';

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error('empty array'));
      }
      setTimeout(() => {
        resolve(products);
      }, 300);
    });
  };

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts();
        setItems(fetchedProducts);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingData();
  }, []);

  return (
    <div className="m-8 p-8 flex flex-col gap-5 items-center justify-center rounded shadow-xl bg-fourth">
      <h2 className="text-2xl font-semibold tracking-wider">{greeting}</h2>
      {isLoading && <span>Cargando...</span>}
      {items && <ItemList items={items} />}
    </div>
  );
}
