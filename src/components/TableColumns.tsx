import React from "react";
import PropTypes from 'prop-types';
import ColumnType from "./../types/table.ts"

const Column: React.FC<ColumnType> = ({ position, name, played, won, drawn, lost, gf, ga, gd, points }) => {
    return (
        <tr key={position}>
            <th> {position} </th>
            <th> {name} </th>
            <td> {played} </td>
            <td> {won} </td>
            <td> {drawn} </td>
            <td> {lost} </td>
            <td> {gf} </td>
            <td> {ga} </td>
            <td> {gd} </td>
            <td> {points} </td>
        </tr>
    )
}

export default Column;