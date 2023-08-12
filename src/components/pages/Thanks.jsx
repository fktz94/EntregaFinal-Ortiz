import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import SectionItemContainer from '../products/SectionItemContainer';

export default function Thanks() {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <SectionItemContainer>
        <span className="font-semibold text-2xl">Gracias por su compra!</span>
        <Link
          to="/"
          className="m-auto px-5 py-2 text-xl font-semibold rounded shadow border border-transparent bg-first hover:bg-second hover:border-black active:text-light">
          Volver al home
        </Link>
      </SectionItemContainer>
    </>
  );
}
