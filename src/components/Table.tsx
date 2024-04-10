import React, { useState } from "react"
import Column from "./TableColumns";
import Teams from "../teams.ts"

const Table = () => {
    return (
        <div className="overflow-x-auto h-screen px-4 ">
            <table className="table table-pin-rows mx-auto max-w-7xl mt-4">
                {/* head */}
                <thead>
                    <tr>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                    {/* <th>Form</th> */}
                    {/* <th>Next</th> */}
                    {/* <th>More</th> */}
                    </tr>
                </thead>
                {/* rows */}
                <tbody>
                    {Teams.map(team => (
                        <Column key={team.position}  {...team}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;