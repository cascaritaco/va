import React from "react";
// import Table1 from "./Tables/veteran45Table";
// import Table2 from "./Tables/veteran35Table";
import ScoreBoard1 from "./ScoreBoard/ScoreBoard45";
import ScoreBoard2 from "./ScoreBoard/ScoreBoard35";
import Schedule1 from "./Schedule/Schedule45";
import Schedule2 from "./Schedule/Schedule35";
import News1 from "./News/News45";
import News2 from "./News/News35";
import Table from "./Table/Table";

import { HEADERS } from "./Table/tableInfo";
import Vet35Data from "../data/vaTeamData/veteran35Data.ts";
import Vet45Data from "../data/vaTeamData/veteran45Data.ts";

const TabbedContent = ({ toggleState }) => {
  return (
    <div className="content-tabs w-full mx-auto mb-4 p-4 xl:max-w-7xl">
      <div className={toggleState === 1 ? "" : "hidden"}>
        <ScoreBoard1 />
        <Table headers={HEADERS} data={Vet45Data} />
        <Schedule1 />
        <News1 />
      </div>
      <div className={toggleState === 2 ? "" : "hidden"}>
        <ScoreBoard2 />
        <Table headers={HEADERS} data={Vet35Data} />
        <Schedule2 />
        <News2 />
      </div>
    </div>
  );
};

export default TabbedContent;
