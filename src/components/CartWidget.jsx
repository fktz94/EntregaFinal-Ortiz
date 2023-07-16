import { BsCart4 } from 'react-icons/bs';

function CartWidget() {
  return (
    <p className="py-2 px-4 flex gap-2 items-center rounded-full bg-black text-light">
      <BsCart4 style={{ fontSize: '1.3rem' }} /> 5
    </p>

    // uso react-icons o uso un emoji?
    // return <p>🛒(5)</p>;
  );
}
export default CartWidget;
