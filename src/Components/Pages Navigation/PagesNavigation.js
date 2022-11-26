import React, { useContext, useEffect, useRef } from "react";
import "./Pages-Navigation.scss";

import { CurrentPageContext, Data, itemsPerPage } from "../../App/App";

const PagesNavigation = () => {
  const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
  const [data] = useContext(Data);

  const Paragraph = useRef();
  const animationDiv = useRef();

  const loadMoreFun = () => {
    if (currentPage >= data.length / itemsPerPage) {
      Paragraph.current.textContent = "No More Countries";
      setTimeout(() => {
        Paragraph.current.textContent = "Done";
      }, 1000);
      return;
    } else {
      Paragraph.current.textContent = "";
      animationDiv.current.classList.add("loading");
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        Paragraph.current.textContent = "Load More";
        animationDiv.current.classList.remove("loading");
      }, 2000);
    }
  };

  useEffect(() => {
    if (currentPage > data.length / itemsPerPage && data.length > 1) {
      Paragraph.current.textContent = "Done";
    } else Paragraph.current.textContent = "Load More";
  }, [currentPage]);

  return (
    <section onClick={loadMoreFun} className="navigation">
      <p ref={Paragraph} className="load-more"></p>
      <div ref={animationDiv} className="animation">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default PagesNavigation;
