import React from "react";
import { useCartStore } from "../store/cartStore";

type CartProps = {};

const Cart: React.FC<CartProps> = ({}) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const cartTotal = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h3>Cart</h3>

      <ul>
        {cart.map((product) => {
          const price = (product.price * product.quantity).toFixed(2);

          return (
            <li key={product.id}>
              <h4>{product.name}</h4>

              <p>{product.description}</p>

              <p>£{price}</p>

              {/* Lower or raise quantity: */}
              <button
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
              >
                -
              </button>

              <p>Quantity: {product.quantity}</p>

              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
              >
                +
              </button>

              <br />

              <button onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            </li>
          );
        })}
      </ul>

      <h4>Cart Total</h4>
      <p>£{cartTotal}</p>

      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default Cart;
