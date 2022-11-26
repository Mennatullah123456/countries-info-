import React, { useContext } from "react";
import "./Header.scss";

import { MdOutlineDarkMode, MdOutlineLightMode } from "../icons";

import { ThemeContext } from "../../App/App";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const themeCond =
    theme == "light" ? (
      <MdOutlineDarkMode
        id="dark"
        onClick={(e) => setTheme(e.target.id)}
        className="theme-icon"
      />
    ) : (
      <MdOutlineLightMode
        id="light"
        onClick={(e) => setTheme(e.target.id)}
        className="theme-icon"
      />
    );

  return (
    <header>
      <div className="container">
        <div className="row">
          <h1 className="main-word col-7 col-sm-6">Where in the world?</h1>
          <div className="theme-changer col-5 col-sm-6">
            {themeCond}
            <span className="theme-type">
              {theme == "light" ? "Dark" : "Light"} Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
