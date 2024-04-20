import React from "react";
import ColumnType from "../../types/table.ts";
// import styles from "./TableColumns.module.css";

const Column: React.FC<ColumnType> = ({
  position,
  name,
  jj,
  jg,
  je,
  jp,
  gf,
  gc,
  dif,
  points
}) => {
  return (
    <tr key={position} className="relative">
      <div className="sticky left-0 z-10 bg-pureWhite">
        <th className="flex gap-3 ">
          <div>{position}</div>
          <div>{name}</div>
        </th>
      </div>
      <td> {jj} </td>
      <td> {jg} </td>
      <td> {je} </td>
      <td> {jp} </td>
      <td> {gf} </td>
      <td> {gc} </td>
      <td> {dif} </td>
      <td className="font-bold"> {points} </td>
    </tr>
  );
};

export default Column;
