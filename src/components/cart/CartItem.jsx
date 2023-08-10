import { useContext } from 'react';
import { BsFillCartXFill } from 'react-icons/bs';
import { CartContext } from '../../context/ShoppingCartContext';

export default function CartItem({ id, title, imgUrl, purchase, price }) {
  const { handleRemoveProduct } = useContext(CartContext);
  return (
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
          onClick={() => handleRemoveProduct(id)}>
          <BsFillCartXFill />
        </button>
      </div>
    </div>
  );
}
