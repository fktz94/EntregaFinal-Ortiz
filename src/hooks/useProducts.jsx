import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts, { getCategoryFilters } from '../utilities/getProducts';

// DESARROLLAR ESTE CUSTOMHOOK, TIENE SENTIDO?
// SE USAN EN DROPDOWN,ITEMLISTCONTAINER,ITEMDETAILCONTAINER
export default function useProducts() {
  const [items, setItems] = useState(null);
  // ITEM 'SINGULAR'PARA ITEMDETAILCONTAINTER
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(null);

  // DROPDOWN PARA LOS FILTROS/CATEGORIAS
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

  // ITEMLISTCONTAINER PARA OBTENER PRODUCTS Y TMB LOS FILTROS
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

  // ITEMDETAIL PARA EL PRODUCTO ESPECIFICO, TMB USA PARAMS
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

  return <div>useProducts</div>;
}
