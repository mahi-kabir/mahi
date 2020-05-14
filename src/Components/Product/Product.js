import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  //console.log(props);
  const { name, img, seller, price, stock } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>By:{seller}</small>
        </p>
        <p>Price: ${price}</p>
        <br />
        <p>
          <small>only {stock} left in the stock. Order Soon</small>
        </p>

        <button id = "main-button"
        //onClick = {props.handleAddProduct(props.product)}
        onClick = {() => props.handleAddProduct(props.product)}
        >
          
          <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
      </div>
    </div>
  );
};

export default Product;
