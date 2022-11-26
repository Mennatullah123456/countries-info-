import React from "react";
import "./Generators.scss";

const GenerateCurrencies = ({ data }) => {
  return (
    <div className="data-holder currencies">
      <p className="data-word">Currencies:</p>
      {data.map((e) => {
        return (
          <span key={e.symbol} className="data">
            {e.code}
          </span>
        );
      })}
    </div>
  );
};

export default GenerateCurrencies;
