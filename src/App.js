import React from "react";
import "./styles.css";
import { books } from "./books";
import Book from "./Book";

export default function App() {
  return (
    <div>
      <h1 style={{ padding: "10px" }}>Book Library</h1>
      <div className="App">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
}
