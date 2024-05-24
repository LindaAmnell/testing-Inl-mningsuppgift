import { it, expect, describe } from "vitest";
import { splitTodosIntoDays } from "./list";

it("testing splitTodosIntoDays ", () => {
  describe("splitTodosIntoDays", () => {
    it("should split todos into correct days", () => {
      const todos = [
        { id: 1, text: "Task 1", day: "må" },
        { id: 2, text: "Task 2", day: "ti" },
        { id: 3, text: "Task 3", day: "on" },
        { id: 4, text: "Task 4", day: "to" },
        { id: 5, text: "Task 6", day: "må" },
        { id: 6, text: "Task 7", day: "ti" },
      ];
      const [må, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);

      expect(må).toEqual([
        { id: 1, text: "Task 1", day: "må" },
        { id: 6, text: "Task 6", day: "må" },
      ]);
      expect(ti).toEqual([
        { id: 2, text: "Task 2", day: "ti" },
        { id: 6, text: "Task 7", day: "ti" },
      ]);
      expect(on).toEqual([{ id: 3, text: "Task 3", day: "on" }]);
      expect(to).toEqual([{ id: 4, text: "Task 4", day: "to" }]);
      expect(fr).toEqual([]);
      expect(lö).toEqual([]);
      expect(sö).toEqual([]);
    });

    it("should handle an empty list for the days with out todos", () => {
      const todos = [];
      const [må, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);

      expect(må).toEqual([]);
      expect(ti).toEqual([]);
      expect(on).toEqual([]);
      expect(to).toEqual([]);
      expect(fr).toEqual([]);
      expect(lö).toEqual([]);
      expect(sö).toEqual([]);
    });
  });
});
