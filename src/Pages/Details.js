import React, { useEffect, useState } from "react";

import { Header, BackButton, ImgInfo } from "../Components";

import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { name } = useParams("name");

  const [data, setDataa] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      let test = response.data.filter((e) => {
        return e.name.split(" ").join("") == name;
      });
      setDataa(test);
    });
  }, []);

  console.log(data, name);

  return (
    <main className="details-page" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="country-details-section" style={{ padding: "40px 0" }}>
        <div className="container">
          <BackButton />
          {data.length != 0 ? <ImgInfo data={data[0]} /> : ""}
        </div>
      </div>
    </main>
  );
};
export default Details;
