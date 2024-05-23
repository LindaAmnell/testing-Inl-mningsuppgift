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
  //   const [newTodo, setNewTodo] = useState("");
  //   const [showInput, setShowInput] = useState(false);
  //   const addTodo = useStore((state) => state.addTodo);

  //   const handleAddTodo = (e, dayName) => {
  //     e.preventDefault();
  //     if (newTodo.trim() !== "") {
  //       addTodo(dayName, newTodo);
  //       setNewTodo("");
  //       setShowInput(false);
  //     }
  //   };

  return (
    <div className="day">
      <h2 data-cy="the-day" className="the-days">
        {dayName[dIndex]}
      </h2>
      {day.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      {/* {showInput ? (
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Skriv din uppgift här"
          />
          <button onClick={handleAddTodo} type="submit">
            Spara
          </button>
          <button type="button" onClick={() => setShowInput(false)}>
            Avbryt
          </button>
        </div>
      ) : (
        <button className="new-task-btn " onClick={() => setShowInput(true)}>
          Ny uppgift
        </button>
      )} */}
    </div>
  );
};

export default Day;
