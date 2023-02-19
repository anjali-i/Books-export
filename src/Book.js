import React from "react";

export default function Book({ img, title, author }) {
  const clickHandler = (title) => {
    alert(title + " was added to cart");
  };
  return (
    <article className="book">
      <div className="insideBox">
        <img src={img} alt="book cover" />
        <h3>{title}</h3>
        <p>{author.toUpperCase()}</p>
        <button onClick={() => clickHandler(title)}>ADD TO CART</button>
      </div>
    </article>
  );
}
