import React from "react";
import "./Generators.scss";

const GenerateDomains = ({ data }) => {
  return (
    <div className="data-holder">
      <p className="data-word">Top Level Domain:</p>
      {data.map((e) => {
        return (
          <span key={e} className="data">
            {e}
          </span>
        );
      })}
    </div>
  );
};

export default GenerateDomains;
