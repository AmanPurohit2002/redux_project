import React, { useEffect } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart, setClearCart, setRemoveFromCart } from "../redux/actions/cartAction";
import loadingStatus from "../redux/actions/productAction";

import '../CSS/parentCss.css';

const ParentComponent = () => {
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch=useDispatch();
//   console.log("cartItems is ",cartItems);
//   console.log("products is ",products);

  useEffect(() => {
    dispatch(loadingStatus());
  }, [dispatch]);

  return (
    <div className="parent-container">
      <div className="heading">
        <h1>Shopping App</h1>
      </div>
      <div className="product-list-container">
        <ProductList getProduct={products} addToCart={setAddToCart}/>
      </div>
      <div className="shopping-cart-container">
        <ShoppingCart cartItems={cartItems} removeFromCart={setRemoveFromCart} clearCart={setClearCart}/>
      </div>
    </div>
  );
};

export default ParentComponent;
