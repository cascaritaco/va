import React from "react";
import Table1 from "./Tables/veteran45Table";
import Table2 from "./Tables/veteran35Table";
import ScoreBoard1 from "./ScoreBoard/ScoreBoard45";
import ScoreBoard2 from "./ScoreBoard/ScoreBoard35";
import Schedule1 from "./Schedule/Schedule45";
import Schedule2 from "./Schedule/Schedule35";
import News1 from "./News/News45";
import News2 from "./News/News35";

const TabbedContent = ({ toggleState }) => {
  return (
    <div className="content-tabs w-full mx-auto mb-4 p-4 xl:max-w-7xl">
      <div className={toggleState === 1 ? "" : "hidden"}>
        <ScoreBoard1/>
        <Table1 />
        <Schedule1/>
        <News1/>
      </div>
      <div className={toggleState === 2 ? "" : "hidden"}>
        <ScoreBoard2/>
        <Table2 />
        <Schedule2/>
        <News2/>
      </div>
    </div>
  );
};

export default TabbedContent;
