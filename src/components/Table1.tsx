import React from "react";
import Header from "./TableHeader.tsx";
import Column from "./TableColumns.tsx";
import Teams from "../data/teams1.ts";

const Table1 = () => {
  return (
    <section className="overflow-x-auto">
      <table className="table table-pin-rows mx-auto mt-4 xl:max-w-7xl">
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

export default Table1;
