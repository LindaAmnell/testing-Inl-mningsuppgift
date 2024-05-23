import { create } from "zustand";
import { todos } from "./data.js";
import { getToday } from "../utils/date.js";

const useStore = create((set) => ({
  todos: todos, // TODO: "todos" är data som du kan använda under utvecklingen - byt ut den mot din egen testdata

  // TODO: lägg till en funktion "setTodos" så att du kan ändra innehållet i store från dina testfiler

  todayName: getToday(),
  //   setTodayName: (newDay) => set({ todayName: newDay }),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),

  resetTodos: () =>
    set((state) => ({
      todos: state.todos.map((todo) => ({ ...todo, done: false })),
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),

  //   addTodo: (dayName, text) =>
  //     set((state) => ({
  //       todos: [
  //         ...state.todos,
  //         {
  //           id:
  //             state.todos.length > 0
  //               ? state.todos[state.todos.length - 1].id + 1
  //               : 1,
  //           day: dayName,
  //           done: false,
  //           late: false,
  //           text: text,
  //         },
  //       ],
  //     })),
}));

export { useStore };
