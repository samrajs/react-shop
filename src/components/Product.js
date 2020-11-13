import React from 'react';

const Product = (props) => {
  return (
    <div className="product">
      Product name {props.productName}
      <br />
      <br />
      Click here to buy the product 
      <br />
      <br />
      <button>Add to cart</button>
      <button>Buy Now</button>
    </div>
  );
}

export default Product;