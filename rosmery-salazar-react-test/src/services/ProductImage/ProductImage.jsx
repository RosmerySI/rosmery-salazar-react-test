import React from 'react';
import './productImage.scss';
import { modalCharging } from '../../utilities/modals';

function ProductImage(props) {

  
  return (
    <div className="image">

      <div
        className="item__image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
}


export default ProductImage;