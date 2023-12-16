import React from "react";

const ProductList = ({ getProduct, addToCart }) => {
  return (
    <div className="product-list-container">
      <h1>Products</h1>
      <table className="product-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {getProduct.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
