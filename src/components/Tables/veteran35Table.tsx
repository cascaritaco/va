import React from "react";
import Header from "./TableHeader.tsx";
import Column from "./TableColumns.tsx";
import Teams from "../../data/vaTeamData/veteran35Data.ts";

const Table2 = () => {
  return (
    <section className="overflow-x-auto mt-10 px-4">
      <h2 className="text-xl mb-4"> Tablas </h2>
      <table className="table table-pin-rows">
        <Header />
        <tbody>
          {Teams.map((team) => (
            <Column key={team.position} {...team} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table2;
