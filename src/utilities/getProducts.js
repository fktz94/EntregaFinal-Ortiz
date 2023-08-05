import products from '../mock/products.json';

export default function getProducts() {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject(new Error('empty array'));
    }
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export const getCategoryFilters = () => {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject(new Error('empty array'));
    }

    const filters = [];
    products?.map((item) => {
      if (filters.findIndex((filter) => filter === item.category) === -1)
        return filters.push(item.category);
      return false;
    });

    setTimeout(() => {
      resolve(filters);
    }, 1000);
  });
};
