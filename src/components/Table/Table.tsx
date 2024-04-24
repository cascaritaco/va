import React from "react";
import styles from "./Table.module.css";
import defaultTeamLogo from "/teamLogos/defaultLogo.svg";

export default function Table({
  headers,
  data,
}: {
  headers: string[];
  data: TeamData[];
}) {
  return (
    <section>
      <h2 className={styles.tableHeading}>Tablas</h2>
      <div className={styles.tableContainer}>
        <table className={styles.Table}>
          <thead className={styles.tableHeader}>
            <tr>
              {headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {data.map((teamData, idx) => {
              return (
                <tr key={idx}>
                  <td className={styles.bodyHeader}>
                    <div className={styles.teamHeader}>
                      <div>{teamData.position}</div>
                      {teamData.image ? (
                        <img
                          src={teamData.image}
                          style={{ height: "1.25rem", width: "auto" }}
                        />
                      ) : (
                        <img
                          src={defaultTeamLogo}
                          style={{ height: "1.25rem" }}
                        />
                      )}
                      <div style={{ overflow: "hidden" }}>
                        <p className={styles.teamName}>{teamData.nameLong}</p>
                      </div>
                    </div>
                  </td>
                  <td> {teamData.jj} </td>
                  <td> {teamData.jg} </td>
                  <td> {teamData.je} </td>
                  <td> {teamData.jp} </td>
                  <td> {teamData.gf} </td>
                  <td> {teamData.gc} </td>
                  <td> {teamData.dif} </td>
                  <td className="font-bold"> {teamData.points} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
