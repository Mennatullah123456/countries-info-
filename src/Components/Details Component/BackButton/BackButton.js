import React, { useContext } from "react";
import "./back-button.scss";

import { HiOutlineArrowNarrowLeft } from "../../icons";

import { Data } from "../../../App/App";

import { NavLink } from "react-router-dom";
import axios from "axios";

const BackButton = () => {
  const [, setData] = useContext(Data);

  const clickHandler = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setData(response.data));
  };

  return (
    <NavLink to="/" onClick={clickHandler}>
      <div className="back-button">
        <HiOutlineArrowNarrowLeft className="back-icon" />
        <span className="Back">Back</span>
      </div>
    </NavLink>
  );
};

export default BackButton;
