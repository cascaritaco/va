import React from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const TabbedContent = ({ toggleState }) => {
  return (
    <div className="content-tabs w-full mx-auto mb-4 p-4 xl:max-w-7xl">
      <div className={toggleState === 1 ? "" : "hidden"}>
        <h2 className="text-xl mb-4"> Tablas </h2>
        <Table1 />
      </div>
      <div className={toggleState === 2 ? "" : "hidden"}>
        <h2 className="text-xl mb-4"> Tablas </h2>
        <Table2 />
      </div>
      <div className={toggleState === 3 ? "" : "hidden"}>
        <h2 className="text-xl mb-4"> Tablas </h2>
        <Table3 />
      </div>
    </div>
  );
};

export default TabbedContent;
