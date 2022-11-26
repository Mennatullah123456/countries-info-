import React from "react";
import "./img-info.scss";

import {
  GenerateDomains,
  GenerateCurrencies,
  GenerateLanguages,
  GenerateBorders,
} from "../../../Components";

const ImgInfo = ({ data }) => {
  return (
    <section className="country-information row">
      <div className="country-details-flag col-lg-5">
        <img
          src={
            data.name == "Israel"
              ? "https://img.youm7.com/ArticleImgs/2019/10/6/43695-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D9%88%D9%86.jpg"
              : data.flag
          }
          alt="Country Flag"
        />
      </div>
      <div className="country-details-info col-lg-6">
        <h2 className="details-country-name">
          {data.name == "Israel" ? "Zionist occupation" : data.name}
        </h2>
        <div className="details-extra-data row">
          <div className="first-col col-lg-5">
            <div className="data-holder">
              <p className="data-word">Native Name:</p>
              <p className="data">{data.nativeName}</p>
            </div>
            <div className="data-holder">
              <p className="data-word">Population:</p>
              <p className="data"> {data.population.toLocaleString("en-US")}</p>
            </div>
            <div className="data-holder">
              <p className="data-word">Region:</p>
              <p className="data">{data.region}</p>
            </div>
            <div className="data-holder">
              <p className="data-word">sub region:</p>
              <p className="data">{data.subregion}</p>
            </div>
            <div className="data-holder">
              <p className="data-word">capital:</p>
              <p className="data">{data.capital}</p>
            </div>
          </div>
          <div className="sec-col col-lg-6">
            {data.topLevelDomain && (
              <GenerateDomains data={data.topLevelDomain} />
            )}
            {data.currencies && <GenerateCurrencies data={data.currencies} />}
            {data.languages && <GenerateLanguages data={data.languages} />}
          </div>
        </div>
        {data.borders && <GenerateBorders data={data.borders} />}
      </div>
    </section>
  );
};

export default ImgInfo;
