import React from "react";
import {
  ScheduleData,
  ScheduleDates,
} from "../../data/scheduleData/scheduleData";

const Schedule = () => {
  return (
    <section className="flex flex-col mt-10 px-4">
      <h2 className="text-xl mb-4">Horario</h2>

      {ScheduleData.map((schedule, idx) => {
        return (
          <>
            <div className="flex justify-start mb-3">
              <h4 className="text-lg font-bold">{schedule.date}</h4>
            </div>

            <div key={idx} className="flex flex-col mb-3">
              <div className="flex justify-around items-center gap-4 mb-2">
                <div className="flex items-center gap-3 ">
                  <p className="text-sm">{schedule.homeTeam.name}</p>

                  <div className="flex items-center w-full py-2">
                    <img src={schedule.homeTeam.logo} className="h-8 w-8" />
                  </div>
                </div>

                <div className="p-1 bg-gray-200 rounded-lg">
                  <time dateTime={schedule.time}>{schedule.time}</time>
                </div>

                <div className="flex flex-row-reverse items-center gap-3">
                  <p className="text-sm">{schedule.awayTeam.name}</p>

                  <div className="flex items-center w-full py-2">
                    <img src={schedule.awayTeam.logo} className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <p className="text-lg">{schedule.location}</p>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Schedule;