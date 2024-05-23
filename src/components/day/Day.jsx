import Item from "./Item";

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

  return (
    <div className="day">
      <h2 data-cy="the-day" className="the-days">
        {dayName[dIndex]}
      </h2>
      {day.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <div className="controls">
        <button> Ny uppgift </button>
      </div>
    </div>
  );
};

export default Day;
