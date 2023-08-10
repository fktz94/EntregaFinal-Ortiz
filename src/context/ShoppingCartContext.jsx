import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext(null);

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 2,
      imgUrl: '../../assets/buzo-oversize-lila.jpg',
      price: 100,
      selectedPurchase: 2,
      title: 'Buzo oversize lila'
    },
    {
      id: 5,
      imgUrl: '../../assets/medias.heic',
      price: 100,
      selectedPurchase: 1,
      title: 'Medias'
    }
  ]);

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

  const handleClearCart = () => {
    setCart([]);
  };

  const value = useMemo(() => {
    return { cart, handleAddProduct, handleRemoveProduct, handleClearCart };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
