
// I wrote the code for this component, but I suggest renaming this one to showcase or something and create another component called Product to Render the stuff between lines 26 and 35.

import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';
import {QUERY_SINGLE_PRODUCT, QUERY_PRODUCTS} from '../utils/queries';

export default function Product(props) {
  return (
    <>
        <div className="prod-info">
          <h2 className="prod-title">Mercedes Hat</h2>
          <h2>$104.99</h2>
          <p>Team Mercedes hat, one size fits all.</p>
          <p>In Stock: 23</p>
        </div>
        <div className="prod-list-image"></div>
    </>
  );
}

