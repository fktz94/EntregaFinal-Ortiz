import { useLocation, useSearchParams } from 'react-router-dom';

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const handleParams = (key, value) => {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  const state = {
    search: searchParams?.toString() ? `?${searchParams?.toString()}` : '',
    category: categoryParam || ''
  };

  return { categoryParam, handleParams, state };
}
