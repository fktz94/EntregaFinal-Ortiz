import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionItemContainer from '../products/SectionItemContainer';
import { CartContext } from '../../context/ShoppingCartContext';
import useCartHook from '../../hooks/useCartHook';

function Form() {
  const [{ name, email }, setUserData] = useState({ name: '', email: '' });
  const [isError, setIsError] = useState({ name: false, email: false });
  const { handleBuy } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(isError).find((item) => item)) return;
    handleBuy();
  };

  const handleValue = (e) => {
    const {
      target: { id, value }
    } = e;
    if (id === 'name' && !value.match(/^[a-z ,.'-]+$/i)) {
      setIsError((prev) => {
        return { ...prev, [id]: true };
      });
    } else if (id === 'email' && !value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setIsError((prev) => {
        return { ...prev, [id]: true };
      });
    } else {
      setIsError((prev) => {
        return { ...prev, [id]: false };
      });
    }

    setUserData((prev) => {
      return {
        ...prev,
        [id]: value
      };
    });
  };

  return (
    <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <label htmlFor="name">
          Ingrese su nombre: <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleValue}
            className={`px-2 py-1 mt-2 outline-none border border-transparent focus:border-blue-400 ${
              isError.name ? 'border-red-600 focus:border-red-600' : ''
            }`}
          />
        </label>
        <label htmlFor="email">
          Ingrese su email: <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleValue}
            className={`px-2 py-1 mt-2 outline-none border border-transparent focus:border-blue-400 ${
              isError.email ? 'border-red-600 focus:border-red-600' : ''
            }`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="py-1 m-auto w-[80%] shadow border border-black rounded font-semibold hover:bg-white">
        Continuar
      </button>
    </form>
  );
}

function FinalStep() {
  const { cart, handleClearCart, handleLastStep } = useContext(CartContext);
  const { cartTotalValue } = useCartHook();
  const navigate = useNavigate();

  const items = cart.map((item) => {
    const { id, price, selectedPurchase, title } = item;
    return (
      <li key={id}>
        {selectedPurchase} {title}: ${selectedPurchase * price}
      </li>
    );
  });

  return (
    <div className="flex flex-col gap-8">
      <span className="font-semibold text-2xl">Confirmar compra por:</span>
      <div className="flex flex-col gap-6">
        <span className="text-xl m-auto">
          Valor final: <b>${cartTotalValue(cart)}</b>
        </span>
        <ul className="text-sm">
          <span>Detalle:</span>
          {items}
        </ul>
      </div>
      <button
        onClick={() => {
          handleLastStep();
          handleClearCart();
          navigate('/thanks');
        }}
        type="button"
        className="px-2 py-1 shadow border border-black rounded font-semibold hover:bg-white">
        Finalizar compra
      </button>
    </div>
  );
}

function CartForm() {
  const { isBuying } = useContext(CartContext);
  return <SectionItemContainer>{isBuying ? <FinalStep /> : <Form />}</SectionItemContainer>;
}

export default CartForm;
