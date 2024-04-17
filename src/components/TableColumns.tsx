import React from "react";
import ColumnType from "./../types/table.ts";
// import styles from "./TableColumns.module.css";

const Column: React.FC<ColumnType> = ({
  position,
  name,
  played,
  won,
  drawn,
  lost,
  gf,
  ga,
  gd,
  points,
}) => {
  return (
    <tr key={position} className="relative">
      <div className="sticky left-0 z-10 bg-pureWhite">
        <th className="flex gap-3 ">
          <div>{position}</div>
          <div>{name}</div>
        </th>
      </div>
      <td> {played} </td>
      <td> {won} </td>
      <td> {drawn} </td>
      <td> {lost} </td>
      <td className="font-bold"> {points} </td>
      <td className="hidden"> {gf} </td>
      <td className="hidden"> {ga} </td>
      <td className="hidden"> {gd} </td>
    </tr>
  );
};

export default Column;
