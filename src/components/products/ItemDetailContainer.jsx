import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import { ThreeDots as Loader } from 'svg-loaders-react';
import ItemDetail from './ItemDetail';
import getProducts from '../../utilities/getProducts';

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const location = useLocation();

  const backToSearch = location.state?.search ? `./..${location.state?.search}` : './..';
  const backToText = location.state?.category || 'productos';

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const allProducts = await getProducts();
        const selectedProduct = allProducts.find((product) => product.id === +params.id);
        setItem(selectedProduct);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => setItem(null);
  }, [params.id]);

  return (
    <div className="m-8 p-8 flex flex-col gap-5 items-center rounded shadow-xl bg-fourth">
      <Link
        to={backToSearch}
        className="flex items-center px-2 py-1 gap-2 rounded border shadow font-semibold border-first hover:bg-light active:shadow-inner active:border-transparent">
        <HiArrowSmLeft className="inline" />
        {`Volver a ${backToText}`}
      </Link>
      {isLoading && (
        <div className="m-auto">
          <Loader fill="#8D7B68" height="70px" />
        </div>
      )}
      {item && <ItemDetail product={item} />}
    </div>
  );
}
