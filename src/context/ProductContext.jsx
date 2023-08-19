import { createContext, useMemo } from 'react';

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const value = useMemo(() => {
    return {};
  }, []);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}
