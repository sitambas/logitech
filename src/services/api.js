import axios from 'axios';

export const fetchProducts = async () => {
  const { data } = await axios.get('https://dummyjson.com/products?limit=6');
  return data.products;
};

export const fetchCart = async () => {
  const { data } = await axios.get('https://dummyjson.com/carts/1');
  return data;
};
