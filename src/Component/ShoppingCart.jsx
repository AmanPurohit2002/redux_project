import React from "react";


//Composition example
const Temp=(props)=>{
  return <>
    <p>{props?.children}</p>
    <h1>{props?.data}</h1>
    <props.data2></props.data2>
    <h3>{props.data2}</h3>
    <h4>{props.data2()}</h4>

  </>
}

const ShoppingCart = ({ cartItems, removeFromCart, clearCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      <table className="shopping-cart-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
      <div className="shopping-cart-remove">
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
      {/* <Temp data={<p>Hello</p>} data2={()=> <h2>Hello I am Aman</h2>}>Hi i am children</Temp> */}
    </div>
  );
};

export default ShoppingCart;
