import React from "react";
import Header from "./TableHeader.tsx";
import Column from "./TableColumns.tsx";
import Teams from "../../data/teams3.ts";

const Table3 = () => {
  return (
    <div className="overflow-x-auto h-screen">
      <table className="table table-pin-rows mx-auto mt-4 xl:max-w-7xl">
        <Header />
        <tbody>
          {Teams.map((team) => (
            <Column key={team.position} {...team} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table3;
