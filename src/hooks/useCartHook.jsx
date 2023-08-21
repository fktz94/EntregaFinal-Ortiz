import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function useCartHook() {
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
      const productIndex = prev.findIndex((item) => item.id === id);
      if (prev[productIndex].selectedPurchase > 1) {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              selectedPurchase: item.selectedPurchase - 1
            };
          }
          return { ...item };
        });
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = () => {
    setIsBuying(true);
  };

  const cartTotalValue = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
      total += array[i].price * array[i].selectedPurchase;
    }
    return total;
  };

  const handleLastStep = () => {
    setIsBuying(false);
  };

  return {
    cart,
    cartTotalValue,
    handleAddProduct,
    handleBuy,
    handleClearCart,
    handleLastStep,
    handleRemoveProduct,
    isBuying
  };
}
