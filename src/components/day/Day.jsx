import Item from "./Item";
import { useState } from "react";
import { useStore } from "../../data/store";

const Day = ({ day, dIndex }) => {
  const dayName = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag",
  ];
  const addTodo = useStore((state) => state.addTodo);
  const [newTodoText, setNewTodoText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        day: dayName[dIndex].substring(0, 2).toLowerCase(),
        done: false,
        late: false,
        text: newTodoText,
      };
      addTodo(newTodo);
      setNewTodoText("");
      setIsAdding(false);
    }
  };
  return (
    <div className="day">
      <h2 data-cy="the-day" className="the-days">
        {dayName[dIndex]}
      </h2>
      {day.map((item) => (
        <Item key={item.id} item={item} />
      ))}

      {isAdding && (
        <div>
          <input
            data-cy="input-new-todo"
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Ny uppgift"
          />
          <button
            data-cy="spara-todo"
            onClick={handleAddTodo}
            className="new-task-btn">
            Lägg till
          </button>
          <button onClick={() => setIsAdding(false)} className="cancel-btn">
            Avbryt
          </button>
        </div>
      )}

      {!isAdding && (
        <button
          data-cy="new-todo"
          onClick={() => setIsAdding(true)}
          className="new-task-btn">
          Ny uppgift
        </button>
      )}
    </div>
  );
};

export default Day;
