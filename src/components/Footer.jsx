// TODO: hämta dagens datum från store
import { getToday } from "../utils/date";

const Footer = () => {
  const today = getToday();

  return (
    <footer>
      <p> Idag är det: {today} </p>
      <p> Studieguide | 2024 </p>
    </footer>
  );
};

export default Footer;
