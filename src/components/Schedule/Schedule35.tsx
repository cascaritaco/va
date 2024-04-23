import React from "react";
import styles from "./Schedule.module.css";
import ScheduleData from "../../data/scheduleData/scheduleData35";
import defaultTeamLogo from "/teamLogos/defaultLogo.svg";

const Schedule = () => {
  //Group Games by Date
  const groupedSchedule = ScheduleData.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, []);

  return (
    <section className={styles.scheduleContainer}>
      <h2 className={styles.sectionTitle}>Horario</h2>

      <div className={styles.fixturesContainer}>
        <div className={styles.fixturesContainer}>
          {Object.entries(groupedSchedule).map(([date, events]) => (
            <div key={date} className={styles.fixtureDate}>
              <p>{date}</p>
              {events?.map((event, idx) => (
                <div key={idx} className={styles.matchList}>
                  <div className={styles.matchContainer}>
                    <div className={styles.matchFixture}>
                      <div className={`${styles.teamContainer}`}>
                        <p>{event.homeTeam.name}</p>

                        <div>
                          {event.homeTeam.logo ? (
                            <img
                              className={styles.teamLogo}
                              src={event.homeTeam.logo}
                              alt={`${event.homeTeam.name} Logo`}
                            />
                          ) : (
                            <img
                              className={styles.teamLogo}
                              src={defaultTeamLogo.toString()}
                              alt="Placeholder Logo"
                            />
                          )}
                        </div>
                      </div>

                      <div className={styles.timeContainer}>
                        <time className={styles.time}>{event.time}</time>
                      </div>

                      <div
                        className={`${styles.awayTeamContainer} ${styles.teamContainer}`}
                      >
                        <p>{event.awayTeam.name}</p>

                        <div>
                          {event.awayTeam.logo ? (
                            <img
                              className={styles.teamLogo}
                              src={event.awayTeam.logo}
                              alt={`${event.awayTeam.name} Logo`}
                            />
                          ) : (
                            <img
                              className={styles.teamLogo}
                              src={defaultTeamLogo.toString()}
                              alt={`Default Logo`}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.locationContainer}>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
