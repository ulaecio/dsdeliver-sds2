import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeaders from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
  const [products, setProducts] = useState< Product[]>([]);
  const [OrderLocation, setOrderLocation] = useState< OrderLocationData>();

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

      
  return (
      <div className="orders-container">
        <StepsHeaders />
        <ProductsList products ={products} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />

      </div>
    )
};

export default Orders;