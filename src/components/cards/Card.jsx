import "./Card.css";

function Card({ product }) {
  return (
    <div className="card">
      <img
        className="card_image"
        src={product.image}
        alt={product.title}
        width={"100%"}
        height={"200px"}
      />
      <div className="card_content">
        <span className="card_title">{product.title}</span>
        <span className="card_price">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <div className="card_button">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default Card;
