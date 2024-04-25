import React from "react";
import ScheduleData from "../../data/scheduleData/scheduleData45";
import ScheduleImage from "./../Image";

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
                <div className="mb-4 md:flex justify-center items-center">

                  <div className="flex justify-center md:w-7/12 md:mr-16">
                    <div className="flex justify-end items-center w-4/12 sm:w-5/12">
                      <p className="text-sm mr-2 sm:mr-4"> {event.homeTeam.name} </p>
                      <ScheduleImage image={event.homeTeam.logo}/>
                    </div>
                    <div className="flex justify-center mx-2 w-3/12 sm:w-2/12 sm:mx-4 md:mx-8">
                      <time className="border border-primaryB rounded-lg px-1 py-1 text-sm sm:px-2 sm:py-2"> {event.time} </time>
                    </div>
                    <div className="flex items-center w-5/12 sm:w-5/12">
                      <ScheduleImage image={event.awayTeam.logo}/>
                      <p className="text-sm ml-2 sm:ml-4"> {event.awayTeam.name} </p>
                    </div>
                  </div>

                  <div className="flex justify-center my-4 text-sm md:4/12">
                    <p> {event.location} </p>
                  </div>
                  <hr className="mb-8 border-gray-400"/>
                  {idx == events.length - 1 && <div className="mb-16"></div>}
                </div>
              ))}
            </div>
          ))}
    </section>
  );
};

export default Schedule;
