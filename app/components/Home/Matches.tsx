"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";
import axios from "axios";

const Matches = () => {
  // const fetchMatches = async () => {
  //   const res = await fetch("thesportsdb.com/api/v1/json/3/all_sports.php", {
  //     headers: {
  //       "Content-Type": "application/json ",
  //       "X-Auth-Token": "c9e02764b7ff4b76a24de28ef4b9f376",
  //     },
  //   });

  //   const data = await res.data();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   axios
  //     .get(`https://api-football-v1.p.rapidapi.com/v3/timezone`, {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "48c21dc554mshe4a4dd277284a2bp1a2a1ejsna100d11d2f8f",
  //         "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       const fetchedData = res?.data?.teams;
  //       setMatches(fetchedData.matches); // Assuming the matches are under 'matches' property
  //       console.log(fetchedData.matches);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching matches:", error);
  //     });
  // }, []);

  return (
    // matche cards container
    <div className="bg-white flex flex-col items-center lg:flex-row gap-5 lg:gap-3 justify-center py-10 lg:py-0 h-fit lg:h-[180px]">
      {/* card */}
      <div className="flex items-center gap-1">
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>

      {/* vertical ruler */}
      <div className="border-r-2 border-r-gray-300 h-full"></div>

      {/* card */}
      <div className="flex items-center gap-1">
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>

      {/* vertical ruler */}
      <div className="border-r-2 border-r-gray-300 h-full "></div>

      {/* card */}
      <div className="flex items-center gap-1">
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team1}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Manchester United</p>
        </div>
        <p className="-mt-4 font-semibold">19:00</p>
        <div className="flex flex-col w-[130px]">
          <div className="flex justify-center">
            <div>
              <Image
                width={100}
                height={100}
                src={Team2}
                alt="hero_app"
                className="object-cover w-[60px] h-[60px]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs">Chelsea</p>
        </div>
      </div>
    </div>
  );
};

export default Matches;
