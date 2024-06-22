import { useState } from "react";

function useItems() {
  const [cartItems, setCartItems] = useState([]);

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
  return { cartItems, onAddItems, onRemoveItems };
}

export { useItems };
