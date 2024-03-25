"use client";
import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";
import Footer from "@/app/components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import MatchesFetch from "@/app/components/utilities/MatchesFetch";

function page() {
  const { todayMatches, previousMatches } = MatchesFetch();

  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      <div
        className={`flex flex-col px-3 md:px-5 lg:px-20 xl:px-[190px] pb-7 md:pb-0 ${
          todayMatches?.length === 0 ? "hidden" : "block"
        }`}
      >
        <p className="md:text-xl lg:text-3xl font-bold pb-3 md:pb-5 lg:pb-10">
          ယနေ့ပွဲစဉ်များ
        </p>

        <div className="flex flex-col gap-5 md:pb-10 lg:pb-[96px]">
          {/* card */}
          {todayMatches?.map((item: any) => (
            <div
              key={item.id}
              className="bg-white flex items-center gap-5 md:gap-5 justify-center lg:py-0 h-[100px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
            >
              <div className="flex items-center gap-4 w-full lg:px-5 xl:px-16 h-full ">
                <div className="flex w-full ">
                  <div className="flex justify-center w-full lg:w-[35%]">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-5 md:p-1">
                      <Image
                        width={200}
                        height={200}
                        src={item.home_team_photo}
                        alt="hero_app"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:flex hidden items-center justify-center font-semibold text-center text-md xl:text-lg align-middle w-[60%] lg:w-[65%] ">
                    {item.home_team_name}
                  </div>
                </div>
                <div className="flex items-center justify-center w-[250px] xl:w-[400px] h-full font-semibold text-[#fea61f] bg-black">
                  <p className="w-full text-center">{item.time.substr(0, 5)}</p>
                </div>
                <div className="flex justify-end w-full ">
                  <div className="md:flex hidden  items-center justify-center font-semibold text-center text-md xl:text-lg align-middle w-[60%] lg:w-[65%]">
                    {item.away_team_name}
                  </div>
                  <div className="flex justify-center w-full lg:w-[35%]">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-5 md:p-1">
                      <Image
                        width={200}
                        height={200}
                        src={item.away_team_photo}
                        alt="hero_app"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* card ends */}
        </div>
      </div>

      <div className="flex flex-col px-3 md:px-5 lg:px-20 xl:px-[190px] bg-white py-10 lg:py-20">
        <p className="md:text-xl lg:text-3xl font-bold pt-0 md:pt-5 pb-3 md:pb-5 lg:pb-10">
          ပြီးခဲ့သော ပွဲစဉ်များ
        </p>

        <div className="flex flex-col gap-5 md:gap-5 lg:gap-10 ">
          {previousMatches?.map((item: any) => (
            <div
              key={item.id}
              className="bg-[#fea61f] flex items-center gap-5 md:gap-5 justify-center lg:py-0 h-[100px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
            >
              <div className="flex items-center gap-2 w-full lg:px-5 xl:px-16 h-full ">
                <div className="flex w-full ">
                  <div className="flex justify-center w-full lg:w-[35%]">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-5 md:p-1">
                      <Image
                        width={200}
                        height={200}
                        src={item.home_team_photo}
                        alt="hero_app"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:flex hidden  items-center justify-center font-semibold text-center text-md xl:text-lg align-middle w-[60%] lg:w-[65%]">
                    {item.home_team_name}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-3 md:pb-8 items-center justify-center w-[250px] xl:w-[400px] h-full font-semibold text-[#fea61f] bg-black ">
                  <p className="w-full text-center text-sm md:text-base">
                    {item.time.substr(0, 5)}
                  </p>
                  <p className="w-full text-center text-lg md:text-2xl">
                    {item.home_team_score} - {item.away_team_score}
                  </p>
                </div>
                <div className="flex justify-end w-full ">
                  <div className="md:flex hidden items-center justify-center font-semibold text-center text-md xl:text-lg align-middle w-[60%] lg:w-[65%]">
                    {item.away_team_name}
                  </div>
                  <div className="flex justify-center w-full lg:w-[35%]">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-5 md:p-1">
                      <Image
                        width={200}
                        height={200}
                        src={item.away_team_photo}
                        alt="hero_app"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer footerColor="" />
    </>
  );
}

export default page;
