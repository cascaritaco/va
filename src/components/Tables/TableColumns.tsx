import React from "react";
import ColumnType from "../../types/table.ts";
import defaultTeamLogo from "/teamLogos/defaultLogo.svg";

const Column: React.FC<ColumnType> = ({
  position,
  image,
  nameLong,
  jj,
  jg,
  je,
  jp,
  gf,
  gc,
  dif,
  points,
}) => {
  return (
    <tr key={position} className="relative">
      <div className="sticky left-0 z-10 bg-pureWhite">
        <th>
          <div className="flex items-center gap-3">
            <div>{position}</div>
            {image ? (
              <img src={image} className="h-5" />
            ) : (
              <img src={defaultTeamLogo} className="h-5" />
            )}
            <div>{nameLong}</div>
          </div>
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
