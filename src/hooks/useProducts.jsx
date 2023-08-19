import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { getCategoryFilters, getProducts } from '../services/getProducts';

export default function useProducts() {
  const [items, setItems] = useState(null);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await getCategoryFilters();

  //       setFilters(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();

  //   return () => setFilters(null);
  // }, []);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const fetchedProducts = await getProducts();
    //     setItems(fetchedProducts);
    //   } catch (e) {
    //     console.error(e);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();

    // useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'PRODUCTOS');
    (async () => {
      try {
        setIsLoading(true);
        const dbData = await getDocs(itemsCollection);
        const snapshot = dbData.docs.map((data) => {
          return { ...data.data(), id: data.id };
        });

        setItems(snapshot);

        const filtersArray = [];
        snapshot?.map((el) => {
          if (filtersArray?.findIndex((filter) => filter === el.category) === -1)
            return filtersArray.push(el.category);
          return false;
        });
        setFilters(filtersArray);
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
    // (async () => {
    //   try {
    //     setIsLoading(true);
    //     const allProducts = await getProducts();
    //     const selectedProduct = allProducts.find((product) => product.id === +params.id);
    //     setItem(selectedProduct);
    //   } catch (e) {
    //     console.error(e);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();

    const db = getFirestore();
    const oneItem = doc(db, 'PRODUCTOS', `${params.id}`);
    (async () => {
      try {
        setIsLoading(true);
        const dbData = await getDoc(oneItem);
        const snapshot = { ...dbData.data(), id: dbData.id };
        setItem(snapshot);
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
