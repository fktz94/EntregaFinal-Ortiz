import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext(null);

export default function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState({});

  const value = useMemo(() => {
    return { cart, setCart };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
