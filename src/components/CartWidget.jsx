import { BsCart4 } from 'react-icons/bs';

function CartWidget() {
  return (
    <p className="flex gap-2 items-center">
      <BsCart4 style={{ fontSize: '1.3rem' }} /> (5)
    </p>

    // uso react-icons o uso un emoji?
    // return <p>🛒(5)</p>;
  );
}
export default CartWidget;
