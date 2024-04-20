import React from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const TabbedContent = ({ toggleState, toggleTab }) => {
  return (
    <div className="content-tabs">
      <div className={toggleState === 1 ? "mt-4" : "hidden"}>
        <h2 className="text-xl mb-4 px-4"> Tablas </h2>
        <Table1 />
      </div>
      <div className={toggleState === 2 ? "mt-4" : "hidden"}>
        <h2 className="text-xl mb-4 px-4"> Tablas </h2>
        <Table2 />
      </div>
      <div className={toggleState === 3 ? "mt-4" : "hidden"}>
        <h2 className="text-xl mb-4 px-4"> Tablas </h2>
        <Table3 />
      </div>
    </div>
  );
};

export default TabbedContent;