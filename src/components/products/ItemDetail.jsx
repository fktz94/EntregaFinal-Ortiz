import { useContext, useEffect, useRef, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/ShoppingCartContext';
import { ProductContext } from '../../context/ProductContext';

export default function ItemDetail({ product }) {
  const { stock: quantity, imgUrl, title, price, details, id } = product;

  const { handleAddProduct } = useContext(CartContext);
  const { handleRemoveStock } = useContext(ProductContext);

  const buttonRef = useRef();
  const divRef = useRef();

  const handlePopUp = () => {
    divRef.current?.classList.remove('addedCart');
    setTimeout(() => {
      divRef.current?.classList.add('addedCart');
    }, 100);
  };

  const [stock, setStock] = useState(quantity);
  const disponible = stock > 0;
  const onAdd = (selectedPurchase) => {
    if (disponible && selectedPurchase > 0 && selectedPurchase <= stock) {
      handlePopUp();
      handleAddProduct(product, selectedPurchase);
      handleRemoveStock(id, selectedPurchase);
      return setStock((prev) => prev - selectedPurchase);
    }
    return false;
  };

  return (
    <>
      <div
        ref={divRef}
        className="fixed opacity-0 top-5 right-5 p-4 text-xs rounded-full text-white bg-black">
        Producto agregado al carrito!
      </div>

      <div className="flex flex-col gap-2 rounded border bg-light border-black">
        <div className="p-4 flex flex-col items-center gap-6 max-w-md">
          <img src={imgUrl} alt={title} className="rounded h-96 w-[400px] object-cover" />
          <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
          <span>{details}</span>
          <span>${price}</span>
          <ItemCount buttonRef={buttonRef} onAdd={onAdd} stock={stock} />
        </div>
        <div className="w-full py-1 text-center rounded-b border border-t-gray-400 bg-slate-300">
          {disponible ? (
            <span>
              Stock: <b>{stock}</b>
            </span>
          ) : (
            <b className="text-red-500">No disponible</b>
          )}
        </div>
      </div>
    </>
  );
}
