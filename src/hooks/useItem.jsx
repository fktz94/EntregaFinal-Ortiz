import { useContext, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

export default function useItem() {
  const { items } = useContext(ProductContext);

  const [item, setItem] = useState(null);
  const params = useParams();

  const getItem = useCallback(
    (id) => {
      const data = items?.find((el) => el.id === id);
      return data;
    },
    [items]
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await getItem(params.id);
        setItem(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [params.id, items, getItem]);

  return { item };
}
