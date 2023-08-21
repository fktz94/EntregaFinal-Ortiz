import { createContext, useMemo } from 'react';
import useProductsHook from '../hooks/useProductsHook';

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const { isLoading, items, filters, handleRemoveStock, handleAddStock } = useProductsHook();

  const value = useMemo(() => {
    return { isLoading, items, filters, handleRemoveStock, handleAddStock };
  }, [isLoading, items, filters, handleRemoveStock, handleAddStock]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}
