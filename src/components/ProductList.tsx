import React from "react";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../store/cartStore";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addToCart } = useCartStore();

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>

          <p>{product.description}</p>

          <p>£{product.price.toFixed(2)}</p>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
