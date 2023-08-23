import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThreeDots as Loader } from 'svg-loaders-react';
import ItemList from '../products/ItemList';
import SectionItemContainer from '../products/SectionItemContainer';
import { ProductContext } from '../../context/ProductContext';
import ItemCard from '../products/ItemCard';

function randomItems(array) {
  // función para elegir 3 elementos al azar cáda vez que se carga la aplicación
  if (!array) return false;
  const copy = [...array];
  const random = [];
  for (let i = 0; i < 3; i += 1) {
    const element = copy.splice(Math.floor(Math.random() * copy.length), 1)[0];
    random.push(element);
  }
  return random;
}

export default function Home() {
  const { items, isLoading } = useContext(ProductContext);

  return (
    <SectionItemContainer>
      <h1 className="text-4xl">
        Bienvenidos a <b>MORO Clothing!</b>
      </h1>
      {isLoading && (
        <div className="m-auto">
          <Loader fill="#8D7B68" height="70px" />
        </div>
      )}
      {randomItems(items) && (
        <>
          <h2 className="font-semibold tracking-wider">Estos son algunos de nuestros productos:</h2>
          <ItemList>
            {randomItems(items)?.map(({ id, title, imgUrl, stock }) => (
              <ItemCard key={id} id={id} title={title} imgUrl={imgUrl} quantity={stock} />
            ))}
          </ItemList>
          <Link
            to="products"
            className="px-5 py-1 border transition-colors font-semibold border-black hover:bg-black hover:text-fourth">
            Ver todos!
          </Link>
        </>
      )}
    </SectionItemContainer>
  );
}
