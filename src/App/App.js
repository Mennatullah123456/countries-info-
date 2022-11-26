import React, { useState, useEffect } from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { Home, Details } from "../Pages";
import { BsArrowUp } from "../Components/icons";
import axios from "axios";

export const Data = React.createContext();
export const ThemeContext = React.createContext();
export const CurrentPageContext = React.createContext();
export const itemsPerPage = 20;

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");
  const [showButton, setShowButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const scrollFun = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        setShowButton(true);
      } else setShowButton(false);
    });
  }, []);

  return (
    <Data.Provider value={[data, setData]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
          <div className={`App ${theme == "light" ? "light" : "dark"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<Details />} />
            </Routes>
            <button
              onClick={scrollFun}
              className={`scroll-top ${showButton && "show"}`}
            >
              <BsArrowUp className="arrow-icon" />
            </button>
          </div>
        </CurrentPageContext.Provider>
      </ThemeContext.Provider>
    </Data.Provider>
  );
}

export default App;
