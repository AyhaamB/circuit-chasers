
// I wrote the code for this component, but I suggest renaming this one to showcase or something and create another component called Product to Render the stuff between lines 26 and 35.

import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';
import {QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS} from '../utils/queries';

export default function Product(props) {

  const { name: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_SINGLE_PRODUCT : QUERY_PRODUCTS, {
    variables: { name: userParam },
  });

  
  const product = data?.product
  
  const products = data?.products
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if(product) { 
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
      </div>
    );
  }

  if (products) {
    return (
      products.forEach(product => {
        <div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>         
      </div>
    })
    );
  }

  }