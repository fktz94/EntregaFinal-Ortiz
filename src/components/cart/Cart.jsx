import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';
import SectionItemContainer from '../products/SectionItemContainer';
import CartItemList from './CartItemList';
import CartItem from './CartItem';
import useCartHook from '../../hooks/useCartHook';
import { ProductContext } from '../../context/ProductContext';
import { useRef } from 'react';

export default function Cart() {
  const { cart, handleClearCart } = useContext(CartContext);
  const { handleAddStock } = useContext(ProductContext);

  const { cartTotalValue } = useCartHook();
  const cartItems = cart?.map(({ id, imgUrl, price, title, selectedPurchase }) => {
    return (
      <CartItem
        key={id}
        id={id}
        title={title}
        imgUrl={imgUrl}
        price={price}
        purchase={selectedPurchase}
      />
    );
  });

  const divRef = useRef();

  const handlePopUp = () => {
    divRef.current?.classList.remove('addedCart');
    setTimeout(() => {
      divRef.current?.classList.add('addedCart');
    }, 100);
  };

  const handleClick = () => {
    handlePopUp();
    handleClearCart();
    cart.map(({ id, selectedPurchase }) => handleAddStock(id, selectedPurchase));
  };

  return (
    <>
      <div
        ref={divRef}
        className="fixed opacity-0 top-5 right-5 p-4 text-xs rounded-full text-white bg-black">
        Carrito vaciado!
      </div>

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
                  onClick={handleClick}>
                  Vaciar carrito
                </button>
                <Link
                  to="/cartform"
                  className="px-2 py-1 shadow border border-black rounded font-semibold hover:bg-white">
                  Comprar!
                </Link>
              </div>
            </>
          ) : (
            <h3 className="m-auto">No tienes productos en el carrito</h3>
          )}
        </CartItemList>
      </SectionItemContainer>
    </>
  );
}
