import { useState } from "react";
import { PRODUCTS } from "./products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type CartItem = Product & {
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="App">
      <h3>Welcome to the Store</h3>

      <ProductList products={PRODUCTS} cart={cart} setCart={setCart} />

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
