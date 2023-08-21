import { useCallback } from 'react';

export default function useFilters() {
  const getFilters = useCallback((items) => {
    const filtersArray = [];
    items?.map((el) => {
      if (filtersArray?.findIndex((filter) => filter === el.category) === -1)
        return filtersArray.push(el.category);
      return false;
    });
    return filtersArray;
  }, []);

  return { getFilters };
}
