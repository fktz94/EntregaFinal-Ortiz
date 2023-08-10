import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CartContext } from '../../context/ShoppingCartContext';

function CartWidget() {
  const value = useContext(CartContext);
  const { cart } = value;
  return (
    <p className="py-2 px-4 flex gap-2 items-center rounded-full bg-black text-light">
      <BsCart4 style={{ fontSize: '1.3rem' }} />
      {cart.length}
    </p>
  );
}
export default CartWidget;
