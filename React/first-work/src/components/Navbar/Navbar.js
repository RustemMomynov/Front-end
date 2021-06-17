import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  let orgasm = () => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = {};
    audio.play();
  };

  return (
    <nav className={c.nav}>
      <div>
        <NavLink
          onClick={orgasm}
          className={c.nav_a}
          to="/profile"
          activeClassName={c.active}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          onClick={orgasm}
          className={c.nav_a}
          to="/dialogs"
          activeClassName={c.active}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink onClick={orgasm} className={c.nav_a} to="">
          News
        </NavLink>
      </div>
      <div>
        <NavLink onClick={orgasm} className={c.nav_a} to="">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink onClick={orgasm} className={c.nav_a + " " + c.navi_a} to="">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
