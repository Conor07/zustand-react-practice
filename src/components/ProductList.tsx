import React from "react";
import type { CartItem, Product } from "../App";

type ProductListProps = {
  products: Product[];
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  cart,
  setCart,
}) => {
  const handleAddToCart = (product: Product) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>

          <p>{product.description}</p>

          <p>${product.price.toFixed(2)}</p>

          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
