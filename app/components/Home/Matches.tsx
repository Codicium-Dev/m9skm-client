"use client";
// @ts-nocheck
import React from "react";
import MatchesFetch from "../utilities/MatchesFetch";

interface Match {
  id: number;
  home_team_name: string;
  home_team_photo: string;
  time: string;
  away_team_name: string;
  away_team_photo: string;
  // Add other properties as needed
}

const Matches = () => {
  const { todayMatches } = MatchesFetch();

  return (
    <div className="flex justify-center bg-white">
      <div
        className={` flex flex-col items-center md:flex-row flex-wrap w-full max-w-[1024px] overflow-x-auto gap-5 md:gap-0 justify-center lg:py-0 h-full ${
          todayMatches?.length === 0 ? "hidden" : "block"
        }`}
      >
        {todayMatches?.map((match: Match, index: number) => {
          return (
            <div
              key={match.id}
              className="w-[240px] md:w-[33%] lg:w-[24%] h-[170px] py-4 "
            >
              <div
                className={`flex justify-center items-center h-full gap-1 ${
                  index !== todayMatches.length - 1
                    ? "md:border-r md:border-r-gray-300 "
                    : ""
                } ${
                  (index + 1) % 3 === 0
                    ? "md:border-r-white lg:border-r-gray-300 "
                    : " "
                }
                ${
                  (index + 1) % 4 === 0
                    ? "lg:border-r-white 4xl:border-r-gray-300 "
                    : " "
                }
                `}
              >
                <div className="flex flex-col w-[100px] lg:w-[130px] py-8">
                  <div className="flex justify-center ">
                    <div>
                      <img
                        width={150}
                        height={150}
                        src={match?.home_team_photo}
                        alt="hero_app"
                        className="object-contain w-[60px] h-[60px]"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs">
                    {match?.home_team_name}
                  </p>
                </div>
                <p className="-mt-4 font-semibold">{match?.time}</p>
                <div className="flex flex-col w-[100px] lg:w-[130px] py-8">
                  <div className="flex justify-center">
                    <div>
                      <img
                        width={150}
                        height={150}
                        src={match?.away_team_photo}
                        alt="hero_app"
                        className="object-contain w-[60px] h-[60px]"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs">
                    {match?.away_team_name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Matches;
