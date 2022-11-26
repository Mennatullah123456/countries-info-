import React from "react";
import "./Generators.scss";

const GenerateLanguages = ({ data }) => {
  return (
    <div className="data-holder languages">
      <p className="data-word">Languages:</p>
      {data.map((e) => {
        return (
          <span key={e.name} className="data">
            {e.name},
          </span>
        );
      })}
    </div>
  );
};

export default GenerateLanguages;
