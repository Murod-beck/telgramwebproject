import { getData } from "./components/db/db";
import Card from "./components/cards/Card";
import "./App.css";

function App() {
  const products = getData();

  return (
    <>
      <h1>Main Products</h1>
      <div className="card_container">
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default App;
