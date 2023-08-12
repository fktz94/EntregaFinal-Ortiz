import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryFilters, getProducts } from '../services/getProducts';

export default function useProducts() {
  const [items, setItems] = useState(null);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

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

  //
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const allProducts = await getProducts();
        const selectedProduct = allProducts.find((product) => product.id === +params.id);
        setItem(selectedProduct);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => setItem(null);
  }, [params.id]);

  return { filters, isLoading, item, items };
}
