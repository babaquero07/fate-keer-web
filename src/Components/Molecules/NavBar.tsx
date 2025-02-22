import { NavLink } from "react-router";
import Button from "../Atoms/Button";

const NavBar = () => {
  return (
    <nav className="mx-auto max-w-7xl">
      <ul className="flex justify-between items-center py-2">
        <li>
          <NavLink to="/">
            <img
              className="cursor-pointer"
              src="/assets/images/fatekeeper-logo.png"
              alt="fate keeper logo"
              width={60}
              height={100}
            />
          </NavLink>
        </li>
        <li>
          <Button text="Create Magical Girl" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
