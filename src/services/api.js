import axios from 'axios';

export const fetchProducts = async () => {
  try{
    const { data } = await axios.get('https://dummyjson.com/products?limit=10');
    return data.products;
  }catch(error){
    console.error('Error fetching products:', error.message);
    return []
  }
  
};

export const fetchCart = async () => {
  try{
    const { data } = await axios.get('https://dummyjson.com/carts/1');
    return data;
  }catch(error){
    console.error('Error fetching Cart Data:', error.message);
    return []
  }
};
