import React, { useContext } from "react";
import "./Generators.scss";

import { Data, CurrentPageContext, itemsPerPage } from "../../App/App";
import { NavLink } from "react-router-dom";

const GenerateCountries = () => {
  const [data] = useContext(Data);
  const [currentPage] = useContext(CurrentPageContext);
  let indexOfLastElement = currentPage * itemsPerPage;

  return data.slice(0, indexOfLastElement).map((Country) => {
    return (
      <div key={Country.name} className="country col-sm-6 col-md-4 col-lg-3">
        <NavLink to={`/${Country.name.split(" ").join("")}`}>
          <div className="main-data-holder">
            <div className="flag">
              <img
                src={
                  Country.name == "Israel"
                    ? "https://img.youm7.com/ArticleImgs/2019/10/6/43695-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D9%88%D9%86.jpg"
                    : Country.flag
                }
                alt="Country Flag"
              />
            </div>
            <div className="country-data">
              <h2 className="country-name">
                {Country.name == "Israel" ? "Zionist occupation" : Country.name}
              </h2>
              <div className="extra-data">
                <div className="data-type">
                  <p className="word">Population:</p>
                  <p className="content">
                    {Country.population.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="data-type">
                  <p className="word">Region:</p>
                  <p className="content">{Country.region}</p>
                </div>
                <div className="data-type">
                  <p className="word">Capital:</p>
                  <p className="content">{Country.capital}</p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  });
};

export default GenerateCountries;
