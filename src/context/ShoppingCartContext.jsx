import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product, selectedPurchase) => {
    const newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.imgUrl,
      selectedPurchase
    };

    setCart((prev) => {
      if (prev?.findIndex((item) => item.id === newProduct.id) === -1) {
        return [...prev, newProduct];
      }
      return prev?.map((item) => {
        if (item.id === newProduct.id) {
          return {
            ...item,
            selectedPurchase: item.selectedPurchase + selectedPurchase
          };
        }
        return { ...item };
      });
    });
  };

  const handleRemoveProduct = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const value = useMemo(() => {
    return { cart, handleAddProduct, handleRemoveProduct };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
