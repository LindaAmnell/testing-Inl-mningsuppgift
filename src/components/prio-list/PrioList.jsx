import PrioItem from "./PrioItem";
import { useStore } from "../../data/store.js";
import { useState } from "react";

const PrioList = () => {
  const todos = useStore((state) => state.todos);
  const items = todos.filter((t) => !t.done);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTodos = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="prio-list">
      <h2> Vad ska jag göra nu? </h2>
      <div className="list-container">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          data-cy="filter-input"
          type="search"
          placeholder="Filtrera uppgifter"
          value={searchTerm}
        />

        <div className="prio-items">
          {filteredTodos.map((item, index) => (
            <PrioItem key={item.id} item={item} num={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PrioList;
