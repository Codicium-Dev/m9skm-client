import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";

function page() {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      <div className="flex flex-col px-10 blue">
        <p className="text-4xl font-bold red">ယနေ့ပွဲစဉ်များ</p>
        <div className="bg-white flex flex-col items-center md:flex-row gap-5 md:gap-0 justify-center p  lg:py-0 h-fit md:h-[180px]">
          {/* card */}
          <div className="flex items-center gap-2 h-full red">
            <div className="flex flex-col w-[100px] lg:w-[130px]">
              <div className="flex justify-center ">
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
            <p className="font-semibold bg-black text-white h-full">19:00</p>
            <div className="flex flex-col w-[100px] lg:w-[130px]">
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
          {/* card ends */}
        </div>
      </div>
    </>
  );
}

export default page;
