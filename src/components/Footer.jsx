// TODO: hämta dagens datum från store
import { useStore } from "../data/store";

const Footer = () => {
  const today = useStore((state) => state.todayName);

  return (
    <footer>
      <p data-cy="today"> Idag är det: {today} </p>
      <p> Studieguide | 2024 </p>
    </footer>
  );
};

export default Footer;
