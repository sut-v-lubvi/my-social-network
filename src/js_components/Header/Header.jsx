import React from "react";
import s from "./Header.module.css";

const Header = ({ isLogin, logOut }) => {
  console.log(isLogin);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <img src="https://svgsilh.com/svg_v2/3419889.svg" alt=""></img>
        </div>
        <button onClick={logOut}>{isLogin ? "go out" : "Login"}</button>
      </div>
    </header>
  );
};

export default Header;
