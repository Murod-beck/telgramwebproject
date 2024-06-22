import { useState } from "react";
import Btn from "../button/Btn";
import "./Card.css";

function Card({ product, onAddItems, onRemoveItems }) {
  const [count, setCuont] = useState(0);

  const handleIncrement = () => {
    setCuont((prev) => prev + 1);
    onAddItems(product);
  };

  const handlDecrement = () => {
    setCuont((prev) => prev - 1);
    onRemoveItems(product);
  };

  return (
    <div className="card">
      <div className={`${count !== 0 ? "card_badga" : "card_badga_hidden"}`}>
        {count}
      </div>
      <img
        className="card_image"
        src={product.image}
        alt={product.title}
        width={"100%"}
        height={"200px"}
      />
      <div className="card_content">
        <span className="card_title">{product.title.toUpperCase()}</span>
        <span className="card_price">
          {product.price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </span>
      </div>
      <hr />
      <div className="card_btn">
        <Btn title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 && (
          <Btn title={"-"} type={"remove"} onClick={handlDecrement} />
        )}
      </div>
    </div>
  );
}

export default Card;
