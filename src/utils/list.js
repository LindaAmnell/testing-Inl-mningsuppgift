function splitTodosIntoDays(todos) {
  const må = todos.filter((t) => t.day === "må");
  const ti = todos.filter((t) => t.day === "ti");
  const on = todos.filter((t) => t.day === "on");
  const to = todos.filter((t) => t.day === "to");
  const fr = todos.filter((t) => t.day === "fr");
  const lö = todos.filter((t) => t.day === "lö");
  const sö = todos.filter((t) => t.day === "sö");

  return [må, ti, on, to, fr, lö, sö];
}
export { splitTodosIntoDays };
