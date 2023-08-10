import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import SectionItemContainer from './products/SectionItemContainer';
import ItemList from './products/ItemList';
import CartItem from './CartItem';

export default function Cart() {
  const { cart } = useContext(CartContext);
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
  return (
    <SectionItemContainer>
      <h2 className="text-2xl font-semibold">Mi carrito</h2>
      <ItemList>
        {cartItems.length > 0 ? (
          cartItems
        ) : (
          <h3 className="m-auto">No tienes productos en el carrito</h3>
        )}
      </ItemList>
    </SectionItemContainer>
  );
}
