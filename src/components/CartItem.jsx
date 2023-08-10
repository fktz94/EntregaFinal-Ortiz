import { useContext } from 'react';
import { BsFillCartXFill } from 'react-icons/bs';
import { CartContext } from '../context/ShoppingCartContext';

export default function CartItem({ id, title, imgUrl, purchase, price }) {
  const { handleRemoveProduct } = useContext(CartContext);
  return (
    <div className="flex border border-black rounded">
      <img src={imgUrl} alt="" className="h-44 rounded-l" />
      <div className="mx-2 flex flex-col justify-around grow items-center">
        <span className="font-semibold">{title}</span>
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
        <button
          type="button"
          className="border p-1 rounded shadow border-black bg-white hover:bg-third active:border-red-600"
          onClick={() => handleRemoveProduct(id)}>
          <BsFillCartXFill />
        </button>
      </div>
    </div>
  );
}
