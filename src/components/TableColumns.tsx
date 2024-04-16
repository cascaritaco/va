import React from "react";
import PropTypes from "prop-types";
import ColumnType from "./../types/table.ts";

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
    <tr key={position}>
      <th
        className="flex gap-3 sticky left-0 z-2 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div>{position}</div>
        <div>{name}</div>
      </th>
      <td> {played} </td>
      <td> {won} </td>
      <td> {drawn} </td>
      <td> {lost} </td>
      <td className="font-bold"> {points} </td>
      <td> {gf} </td>
      <td> {ga} </td>
      <td> {gd} </td>
    </tr>
  );
};

export default Column;

