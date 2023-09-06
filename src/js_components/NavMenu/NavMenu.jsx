import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.css";
import FrendsBlock from "./FrendsBlock/FrendsBlock";

const NavMenu = (props) => {
  return (
    <nav className={s.Nav_meny}>
      <div className={s.nav_block}>
        <div className={s.link}>
          <NavLink
            to={`/profile/${props.userId}`}
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Messages
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Users
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink
            to="/nevs"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Nevs
          </NavLink>
        </div>

        <div className={s.link}>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Music
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Settings
          </NavLink>
        </div>
      </div>
      <FrendsBlock />
    </nav>
  );
};
export default NavMenu;
