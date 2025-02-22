import { Link } from "react-router";
import { MagicalGirl } from "../../interfaces/MagicalGirl";
import MagicGirlCard from "../Molecules/MagicGirlCard";

const MagicalGirlsList = ({ girls }: { girls: MagicalGirl[] }) => {
  return (
    <ul className="flex justify-center items-center flex-wrap gap-6 py-8">
      {girls.map((girl: MagicalGirl) => (
        <li key={girl.id}>
          <Link to={`/magical-girls/${girl.id}`}>
            <MagicGirlCard girl={girl} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MagicalGirlsList;
