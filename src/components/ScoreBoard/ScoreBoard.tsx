import React from "react";
import ScoreBoardInfo from "../../data/scoreboardData/scoreboard";

const ScoreBoard = () => {
  return (
    <div className="flex flex-col mt-10 px-4">
      <div>
        <h2 className="text-xl mb-4">Resultados</h2>
      </div>
      <div>
        <div className="bg-gray-200 py-2 px-4 rounded-lg">
          <p className="text-xs uppercase">Martes, 9 Abril</p>
        </div>

        {/* Table */}
        <div>
          {ScoreBoardInfo.map((scoreboard, idx) => {
            return (
              // Game results row
              <div key={idx} className="flex">
                {/* Teams Row */}
                <div className="flex flex-col items-center py-2 w-full">
                  {/* Game results team */}
                  <div className="flex items-center w-full py-2">
                    <div className="flex items-center justify-center w-8 h-8">
                      <img src={scoreboard.home.logo} className="h-8 w-8" />
                    </div>

                    <div className="text-left pl-2 grow">
                      <p className="text-sm text-black uppercase">
                        {scoreboard.home.name}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-lg text-center font-bold">
                        {scoreboard.home.score}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center w-full py-2">
                    <div className="flex items-center justify-center w-8 h-8">
                      <img src={scoreboard.away.logo} className="h-8 w-8" />
                    </div>

                    <div className="text-left pl-2 grow">
                      <p className="text-sm text-black uppercase">
                        {scoreboard.away.name}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-lg text-center font-bold">
                        {scoreboard.away.score}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
