import React from "react";
import type { CartItem, Product } from "../App";

type CartProps = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
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

              <p>${price}</p>

              <button
                onClick={() =>
                  setCart((prev) =>
                    prev.filter((item) => item.id !== product.id),
                  )
                }
              >
                Remove from Cart
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => setCart([])}>Clear Cart</button>
    </div>
  );
};

export default Cart;
