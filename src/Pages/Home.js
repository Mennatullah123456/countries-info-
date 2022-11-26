import React, { useContext, useEffect, useRef } from "react";
import {
  Header,
  Filters,
  GenerateCountries,
  PagesNavigation,
} from "../Components";
import { CurrentPageContext } from "../App/App";

const Home = () => {
  const [currentPage] = useContext(CurrentPageContext);
  const holderDiv = useRef();

  useEffect(() => {
    holderDiv.current.classList.remove("active");
    setTimeout(() => {
      holderDiv.current.classList.add("active");
    }, 640);
  }, [currentPage]);

  return (
    <main
      className="home-page"
      style={{ minHeight: "100vh", paddingBottom: "40px" }}
    >
      <Header />
      <Filters />
      <article className="generate-Countries">
        <div className="container">
          <div ref={holderDiv} className="row">
            <GenerateCountries />
          </div>
        </div>
      </article>
      <PagesNavigation />
    </main>
  );
};

export default Home;
