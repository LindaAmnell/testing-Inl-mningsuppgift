import { useStore } from "../data/store.js";
import Day from "./day/Day";
import PrioList from "./prio-list/PrioList.jsx";
import { splitTodosIntoDays } from "../utils/list.js";

const Main = () => {
  const todos = useStore((state) => state.todos);
  const items = todos.filter((t) => !t.done);
  const days = splitTodosIntoDays(todos);
  const doneTodos = todos.length - items.length;
  const totalTodo = useStore((state) => state.todos.length);

  return (
    <main className="main-view">
      <div className="day-view">
        {days.map((d, index) => (
          <Day day={d} dIndex={index} key={index} />
        ))}
      </div>
      <hr />
      <p data-cy="total-todos">
        {doneTodos} / {totalTodo} Klarade todos
      </p>
      <PrioList />
      <div></div>
    </main>
  );
};

export default Main;
