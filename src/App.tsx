import { PRODUCTS } from "./products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <h3>Welcome to the Store</h3>

      <ProductList products={PRODUCTS} />

      <Cart />
    </div>
  );
}

export default App;
