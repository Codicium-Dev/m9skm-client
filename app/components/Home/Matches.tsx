"use client";
// @ts-nocheck
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";
import axios from "axios";
import { request } from "http";
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
    <div
      className={`bg-white flex flex-col items-center md:flex-row gap-5 md:gap-0 justify-center py-10 lg:py-0 h-fit md:h-[180px] ${
        todayMatches?.length === 0 ? "hidden" : "block"
      }`}
    >
      {todayMatches?.map((match: Match, index: number) => {
        console.log(match);
        return (
          <>
            <div key={match.id} className="flex items-center gap-1 ">
              <div className="flex flex-col w-[100px] lg:w-[130px]">
                <div className="flex justify-center ">
                  <div>
                    <img
                      width={100}
                      height={100}
                      src={match?.home_team_photo}
                      alt="hero_app"
                      className="object-cover w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs">
                  {match?.home_team_name}
                </p>
              </div>
              <p className="-mt-4 font-semibold">{match?.time}</p>
              <div className="flex flex-col w-[100px] lg:w-[130px]">
                <div className="flex justify-center">
                  <div>
                    <img
                      width={100}
                      height={100}
                      src={match?.away_team_photo}
                      alt="hero_app"
                      className="object-cover w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs">
                  {match?.away_team_name}
                </p>
              </div>
            </div>

            {index !== todayMatches.length - 1 && (
              <div className="border border-gray-300 h-full"></div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Matches;
