import { useEffect } from "react";

export const Card = ({ card, onClick }) => {
  useEffect(() => {
    const injectCursorPosition = ({ x, y }) => {
      document.documentElement.style.setProperty("--x", Math.round(x));
      document.documentElement.style.setProperty("--y", Math.round(y));
    };
    document.body.addEventListener("pointermove", injectCursorPosition);
    return () => {
      document.body.removeEventListener("pointermove", injectCursorPosition);
    };
  }, []);

  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => onClick(card)}
    >
      <div className="card-front">
        <span className="card-front-symbol">?</span>
      </div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};
