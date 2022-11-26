import React, { useContext, useEffect, useState } from "react";
import "./Filter.scss";

import { IoIosSearch, MdKeyboardArrowDown } from "../icons";

import { Data, CurrentPageContext } from "../../App/App";

import axios from "axios";

const Filter = () => {
  const [region, setRegion] = useState("Filter By Region");
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [, setData] = useContext(Data);
  const [, setCurrentPage] = useContext(CurrentPageContext);

  const showListFun = () => {
    setShowList(!showList);
  };

  const ragionSetter = (e) => {
    setRegion(e.currentTarget.id);
  };

  useEffect(() => {
    setCurrentPage(1);
    axios.get("https://restcountries.com/v2/all").then((response) =>
      setData(
        response.data.filter((e) => {
          return e.region.toLowerCase().includes(region.toLowerCase());
        })
      )
    );
  }, [region]);

  useEffect(() => {
    if (inputValue != "") {
      setCurrentPage(1);
      axios.get("https://restcountries.com/v2/all").then((response) =>
        setData(
          response.data.filter((e) => {
            return e.name.toLowerCase().includes(inputValue.toLowerCase());
          })
        )
      );
    } else
      axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setData(response.data));
  }, [inputValue]);

  return (
    <section className="filters">
      <div className="container">
        <div className="row">
          <article className="search-input col-6 col-md-5 col-xl-4">
            <div className="search-holder">
              <IoIosSearch className="search-icon" />
              <input
                onChange={(e) => setInputValue(e.target.value)}
                className="search-field"
                value={inputValue}
                type="text"
                placeholder="Search for a country..."
              />
            </div>
          </article>
          <article
            className={`drop-list ${
              showList && "active"
            } col-6 col-sm-4 col-xl-2`}
          >
            <div onClick={showListFun} className="list-head">
              <span className="Selected-region">{region}</span>
              <MdKeyboardArrowDown className="arrow-down" />
              <ul className="dropDown-list">
                <li
                  id="Africa"
                  className="drop-item"
                  onClick={(e) => ragionSetter(e)}
                >
                  Africa
                </li>
                <li
                  id="America"
                  className="drop-item"
                  onClick={(e) => ragionSetter(e)}
                >
                  America
                </li>
                <li
                  id="Asia"
                  className="drop-item"
                  onClick={(e) => ragionSetter(e)}
                >
                  Asia
                </li>
                <li
                  id="Europe"
                  className="drop-item"
                  onClick={(e) => ragionSetter(e)}
                >
                  Europe
                </li>
                <li
                  id="Oceania"
                  className="drop-item"
                  onClick={(e) => ragionSetter(e)}
                >
                  Oceania
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Filter;
