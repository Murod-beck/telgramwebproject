import { getData } from "./components/db/db";
import Cart from "./components/cart/Cart";
import Card from "./components/card/Card";
import { useCallback, useEffect, useState } from "react";
import "./App.css";

const products = getData();

const telegram = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready();
  });

  const onAddItems = (item) => {
    const exestItem = cartItems.find((c) => c.id == item.id);
    if (exestItem) {
      const newData = cartItems.map((c) =>
        c.id == item.id ? { ...exestItem, quantity: exestItem.quantity + 1 } : c
      );
      setCartItems(newData);
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(newData);
    }
  };

  const onRemoveItems = (item) => {
    const exestItem = cartItems.find((c) => c.id == item.id);
    if (exestItem.quantity === 1) {
      const newData = cartItems.filter((c) => c.id !== exestItem.id);
      setCartItems(newData);
    } else {
      const newData = cartItems.map((c) =>
        c.id === exestItem.id
          ? { ...exestItem, quantity: exestItem.quantity - 1 }
          : c
      );
      setCartItems(newData);
    }
  };

  const onCheck = () => {
    telegram.MainButton.text = "Sotib olish";
    telegram.MainButton.show();
  };

  const onSendData = useCallback(() => {
    const queryID = telegram.initDataUnsave?.query_id;
    if (queryID) {
      fetch("http://localhost:8000/web-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });
    } else {
      telegram.sendData(
        JSON.stringify({ products: cartItems, queryID: queryID })
      );
    }
  }, [cartItems]);

  useEffect(() => {
    telegram.onEvent("mainButtonClicked", onSendData);

    return () => telegram.offEvent("mainButtonClicked", onSendData);
  }, [onSendData]);

  return (
    <>
      <h1>Main Products</h1>
      <Cart cartItems={cartItems} onCheck={onCheck} />
      <div className="card_container">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              onAddItems={onAddItems}
              onRemoveItems={onRemoveItems}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
