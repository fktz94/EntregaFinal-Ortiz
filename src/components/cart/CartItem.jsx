import { useContext, useRef } from 'react';
import { BsFillCartXFill } from 'react-icons/bs';
import { CartContext } from '../../context/ShoppingCartContext';
import { ProductContext } from '../../context/ProductContext';

export default function CartItem({ id, title, imgUrl, purchase, price }) {
  const { handleRemoveProduct } = useContext(CartContext);
  const { handleAddStock } = useContext(ProductContext);

  const divRef = useRef();

  const handlePopUp = () => {
    divRef.current?.classList.remove('addedCart');
    setTimeout(() => {
      divRef.current?.classList.add('addedCart');
    }, 100);
  };

  const handleClick = () => {
    handlePopUp();
    handleRemoveProduct(id);
    handleAddStock(id);
  };

  return (
    <>
      <div
        ref={divRef}
        className="fixed opacity-0 top-5 right-5 p-4 text-xs rounded-full text-white bg-black">
        Producto eliminado del carrito!
      </div>

      <div className="flex border border-black rounded">
        <img
          src={imgUrl}
          alt={`imagen del producto ${title}`}
          className="h-52 rounded-l border-r border-black"
        />
        <div className="mx-8 my-2 flex flex-col justify-around grow items-center">
          <span className="font-semibold text-lg">{title}</span>
          <hr className="w-full border-black" />
          <span>
            <small>Cantidad: </small>
            <b>{purchase}</b>
          </span>
          <span>
            <small>
              Precio x unidad:
              <b> ${price}</b>
            </small>
          </span>
          <span>
            <small>
              Precio total:
              <b> ${price * purchase}</b>
            </small>
          </span>
          <hr className="w-full border-black" />
          <button
            type="button"
            className="border p-1 rounded shadow border-black bg-white hover:bg-third active:border-red-600"
            onClick={handleClick}>
            <BsFillCartXFill />
          </button>
        </div>
      </div>
    </>
  );
}
