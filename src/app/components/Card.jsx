import React from 'react';

const Card = ({ product }) => {
  return (
    <div className={'productCard'}>
      <div className='productFrame'>
      <img src={product.image} alt={product.name} className={'productImage'} />
      <div className={'productColors'}>
        {product.colors.map((color, index) => (
          <span key={index} className={'colorCircle'} style={{ backgroundColor: color }}></span>
        ))}
      </div>
      </div>
      <div className={'productName'}>{product.name}</div>
      <div className={'productPrice'}>{product.price}</div>
    </div>
  );
};

export default Card;
