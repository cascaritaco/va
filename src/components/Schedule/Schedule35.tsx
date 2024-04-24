import React from "react";
import ScheduleData from "../../data/scheduleData/scheduleData35";
import ScheduleImage from "../Image";

const Schedule = () => {
  const groupedSchedule = ScheduleData.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, []);

  return (
    <section className="mt-10">
      <h2 className="text-xl mb-4 font-bold">Horario</h2>
          {Object.entries(groupedSchedule).map(([date, events]) => (
            <div key={date}>
              <h3 className="text-lg font-semibold my-4"> {date} </h3>
              {events?.map((event, idx) => (
                <div className="mb-4">

                  <div className="flex justify-center">
                    <div className="flex justify-end items-center w-4/12 lg:w-5/12">
                      <p className="text-sm mr-2 lg:mr-4"> {event.homeTeam.name} </p>
                      <ScheduleImage image={event.homeTeam.logo}/>
                    </div>
                    <div className="flex justify-center mx-2 w-3/12 lg:w-2/12 lg:mx-4">
                      <time className="border border-primaryB rounded-lg px-1 py-1 text-sm"> {event.time} </time>
                    </div>
                    <div className="flex items-center w-4/12 lg:w-5/12">
                      <ScheduleImage image={event.awayTeam.logo}/>
                      <p className="text-sm ml-2 lg:ml-4"> {event.awayTeam.name} </p>
                    </div>
                  </div>

                  <div className="flex justify-center my-4 text-sm">
                    <p> {event.location} </p>
                  </div>
                  <hr className="mb-8"/>
                  {idx == events.length - 1 && <div className="mb-16"></div>}
                </div>
              ))}
            </div>
          ))}
    </section>
  );
};

export default Schedule;
