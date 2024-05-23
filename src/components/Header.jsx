import React from "react";
import { useStore } from "../data/store";

const Header = () => {
  const resetTodos = useStore((state) => state.resetTodos);

  return (
    <header>
      <h1> Min vecka </h1>
      <button
        data-cy="restart-btn"
        className="restart-week"
        onClick={resetTodos}>
        {" "}
        Starta om vecka{" "}
      </button>
      <p></p>
    </header>
  );
};

export default Header;
