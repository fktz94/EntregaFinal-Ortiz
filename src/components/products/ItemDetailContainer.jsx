import { Link, useLocation } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import { ThreeDots as Loader } from 'svg-loaders-react';
import ItemDetail from './ItemDetail';
import SectionItemContainer from './SectionItemContainer';
import useItem from '../../hooks/useItem';

export default function ItemDetailContainer() {
  const { item } = useItem();
  const location = useLocation();
  const backToSearch = location.state?.search ? `./..${location.state?.search}` : './..';
  const backToText = location.state?.category || 'productos';

  return (
    <SectionItemContainer>
      <Link
        to={backToSearch}
        className="flex items-center px-2 py-1 gap-2 rounded border shadow font-semibold border-first hover:bg-light active:shadow-inner active:border-transparent">
        <HiArrowSmLeft className="inline" />
        {`Volver a ${backToText}`}
      </Link>
      {!item ? (
        <div className="m-auto">
          <Loader fill="#8D7B68" height="70px" />
        </div>
      ) : (
        <ItemDetail product={item} />
      )}
    </SectionItemContainer>
  );
}
