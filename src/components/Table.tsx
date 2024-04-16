import React, { useState } from "react";
import Column from "./TableColumns";
import Teams from "../teams.ts";

const Table = () => {
  return (
    <div className="overflow-x-auto h-screen pr-4 ">
      <table className="table table-pin-rows mx-auto max-w-7xl mt-4">
        {/* head */}
        <thead>
          <tr>
            <th
              className="sticky left-0 z-2 bg-white"
              style={{ backgroundColor: "#ffffff" }}
            >
              Club
            </th>
            <th>JJ</th>
            <th>JG</th>
            <th>JE</th>
            <th>JP</th>
            <th className="font-bold">Points</th>
            <th>GF</th>
            <th>GC</th>
            <th>GD</th>
            {/* <th>Form</th> */}
            {/* <th>Next</th> */}
            {/* <th>More</th> */}
          </tr>
        </thead>
        {/* rows */}
        <tbody>
          {Teams.map((team) => (
            <Column key={team.position} {...team} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

