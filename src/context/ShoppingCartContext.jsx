import { createContext, useMemo } from 'react';
import useCartHook from '../hooks/useCartHook';

export const CartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
  const {
    cart,
    handleAddProduct,
    handleBuy,
    handleClearCart,
    handleLastStep,
    handleRemoveProduct,
    isBuying,
    lastPurchase
  } = useCartHook();

  const value = useMemo(() => {
    return {
      cart,
      handleAddProduct,
      handleBuy,
      handleClearCart,
      handleLastStep,
      handleRemoveProduct,
      isBuying,
      lastPurchase
    };
  }, [cart, isBuying]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
