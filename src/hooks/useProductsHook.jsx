import { useEffect, useState } from 'react';
import useFilters from './useFilters';
import useItems from './useItems';

export default function useProductsHook() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(null);
  const [filters, setFilters] = useState(null);

  const { getAllProducts } = useItems();
  const { getFilters } = useFilters();

  const handleRemoveStock = (id, qty = 1) => {
    setItems((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            stock: el.stock - qty
          };
        }
        return { ...el };
      })
    );
  };

  const handleAddStock = (id, qty = 1) => {
    setItems((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            stock: el.stock + qty
          };
        }
        return { ...el };
      })
    );
  };

  // setItems
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getAllProducts();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => setItems(null);
  }, [getAllProducts]);

  // setFilters
  useEffect(() => {
    const data = getFilters(items);
    setFilters(data);
  }, [getFilters, items]);

  return { items, isLoading, filters, handleRemoveStock, handleAddStock };
}
