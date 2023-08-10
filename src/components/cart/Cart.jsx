import { useContext } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';
import SectionItemContainer from '../products/SectionItemContainer';
import CartItemList from './CartItemList';
import CartItem from './CartItem';

export default function Cart() {
  const { cart, handleClearCart } = useContext(CartContext);
  const cartItems = cart?.map(({ id, imgUrl, price, title, selectedPurchase }) => (
    <CartItem
      key={id}
      id={id}
      title={title}
      imgUrl={imgUrl}
      price={price}
      purchase={selectedPurchase}
    />
  ));

  const cartTotalValue = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i += 1) {
      total += array[i].price * array[i].selectedPurchase;
    }
    return total;
  };

  return (
    <SectionItemContainer>
      <h2 className="text-2xl font-semibold">Mi carrito</h2>
      <CartItemList>
        {cartItems.length > 0 ? (
          <>
            {cartItems}
            <span className="text-center text-xl">
              Total: <b>${cartTotalValue(cart)}</b>
            </span>
            <div className="flex gap-2 justify-center">
              <button
                type="button"
                className="px-2 py-1 shadow border border-black rounded font-semibold bg-first text-white hover:bg-third hover:text-black"
                onClick={handleClearCart}>
                Vaciar carrito
              </button>
              <button
                type="button"
                className="px-2 py-1 shadow border border-black rounded font-semibold hover:bg-white">
                Comprar!
              </button>
            </div>
          </>
        ) : (
          <h3 className="m-auto">No tienes productos en el carrito</h3>
        )}
      </CartItemList>
    </SectionItemContainer>
  );
}
