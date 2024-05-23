import { it, expect, describe } from "vitest";
import { splitTodosIntoDays } from "./list";

it("hehe", () => {
  describe("splitTodosIntoDays", () => {
    it("should split todos into correct days", () => {
      const todos = [
        { id: 1, text: "Task 1", day: "mo" },
        { id: 2, text: "Task 2", day: "ti" },
        { id: 3, text: "Task 3", day: "on" },
        { id: 4, text: "Task 4", day: "to" },
        { id: 5, text: "Task 6", day: "mo" },
        { id: 6, text: "Task 7", day: "ti" },
      ];
      const [mo, ti, on, to, fr, lo, so] = splitTodosIntoDays(todos);

      expect(mo).toEqual([
        { id: 1, text: "Task 1", day: "mo" },
        { id: 6, text: "Task 6", day: "mo" },
      ]);
      expect(ti).toEqual([
        { id: 2, text: "Task 2", day: "ti" },
        { id: 6, text: "Task 7", day: "ti" },
      ]);
      expect(on).toEqual([{ id: 3, text: "Task 3", day: "on" }]);
      expect(to).toEqual([{ id: 4, text: "Task 4", day: "to" }]);
      expect(fr).toEqual([]);
      expect(lo).toEqual([]);
      expect(so).toEqual([]);
    });

    it("should handle an empty list for the days with out todos", () => {
      const todos = [];
      const [mo, ti, on, to, fr, lo, so] = splitTodosIntoDays(todos);

      expect(mo).toEqual([]);
      expect(ti).toEqual([]);
      expect(on).toEqual([]);
      expect(to).toEqual([]);
      expect(fr).toEqual([]);
      expect(lo).toEqual([]);
      expect(so).toEqual([]);
    });
  });
});
