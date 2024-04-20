import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="sticky z-3 left-0 bg-pureWhite"> Club </th>
        <th>JJ</th>
        <th>JG</th>
        <th>JE</th>
        <th>JP</th>
        <th>GF</th>
        <th>GC</th>
        <th>DIF</th>
        <th className="font-bold">Points</th>
        <th className="hidden">GD</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

