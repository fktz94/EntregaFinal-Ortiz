import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

export default function Cart() {
  const value = useContext(CartContext);
  console.log(value);
  return <h2>cart!</h2>;
}
