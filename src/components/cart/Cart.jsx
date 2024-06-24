import "./Cart.css";
import Btn from "../button/Btn";
import { totalPrice } from "../utils/totalPrece";

function Cart({ cartItems, onCheck }) {
  return (
    <div className="cart_container">
      <h3>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("ru-RU", {
          style: "currency",
          currency: "RUB",
        })}
      </h3>
      <Btn
        title={`${cartItems.length === 0 ? "Buyutma berish" : "To'lov qilish"}`}
        type={"check"}
        onClick={onCheck}
      />
    </div>
  );
}

export default Cart;
