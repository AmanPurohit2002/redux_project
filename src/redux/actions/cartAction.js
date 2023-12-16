import store from "../store/store";

//actionCreater
const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};
const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

const setAddToCart = (product) => store.dispatch(addToCart(product));
const setRemoveFromCart = (productId) =>
  store.dispatch(removeFromCart(productId));
const setClearCart = () => store.dispatch(clearCart());

export { setAddToCart, setRemoveFromCart, setClearCart };
