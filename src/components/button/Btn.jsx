import "./Btn.css";

function Btn({ type, title, onClick }) {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "check" && "check")
      }`}
      onClick={onClick}>
      {title}
    </button>
  );
}

export default Btn;
