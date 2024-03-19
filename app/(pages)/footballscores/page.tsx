import Navbar from "@/app/components/nav/Navbar";
import Image from "next/image";
import Team1 from "../../../public/assets/home-page/team-logo1.png";
import Team2 from "../../../public/assets/home-page/team-logo2.png";
import Footer from "@/app/components/Footer";

function page() {
  const Data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />

      <div className="flex flex-col px-[190px]">
        <p className="text-3xl font-bold pb-10">ယနေ့ပွဲစဉ်များ</p>

        <div className="flex flex-col gap-10 pb-[96px]">
          {/* card */}
          <div className="bg-white flex items-center gap-5 md:gap-5 justify-center lg:py-0 h-fit md:h-[180px]">
            <div className="flex items-center gap-2 w-full px-16 h-full ">
              <div className="flex w-full ">
                <div className="flex justify-center w-[40%]">
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={Team1}
                      alt="hero_app"
                      className="object-cover w-[120px] h-[120px] p-1"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                  Manchester United
                </div>
              </div>
              <p className="font-semibold bg-black leading-[180px] px-20 text-white text-xl h-full">
                19:00
              </p>
              <div className="flex justify-end w-full ">
                <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                  Chelsea
                </div>
                <div className="flex justify-center w-[40%]">
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={Team2}
                      alt="hero_app"
                      className="object-cover w-[120px] h-[120px] p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card ends */}

          {/* card */}
          <div className="bg-white flex items-center gap-5 md:gap-5 justify-center lg:py-0 h-fit md:h-[180px]">
            <div className="flex items-center gap-2 w-full px-16 h-full ">
              <div className="flex w-full ">
                <div className="flex justify-center w-[40%]">
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={Team1}
                      alt="hero_app"
                      className="object-cover w-[120px] h-[120px] p-1"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                  Manchester United
                </div>
              </div>
              <p className="font-semibold bg-black leading-[180px] px-20 text-white text-xl h-full">
                19:00
              </p>
              <div className="flex justify-end w-full ">
                <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                  Chelsea
                </div>
                <div className="flex justify-center w-[40%]">
                  <div>
                    <Image
                      width={200}
                      height={200}
                      src={Team2}
                      alt="hero_app"
                      className="object-cover w-[120px] h-[120px] p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card ends */}
        </div>
      </div>

      <div className="flex flex-col px-[190px] bg-white py-20">
        <p className="text-3xl font-bold pb-10">ပြီးခဲ့သော ပွဲစဉ်များ</p>

        <div className="flex flex-col gap-10">
          {Data.map((item: any) => (
            <div key={item} className="bg-[#fea61f] flex items-center gap-5 md:gap-5 justify-center lg:py-0 h-fit md:h-[180px]">
              <div className="flex items-center gap-2 w-full px-16 h-full ">
                <div className="flex w-full ">
                  <div className="flex justify-center w-[40%]">
                    <div>
                      <Image
                        width={200}
                        height={200}
                        src={Team1}
                        alt="hero_app"
                        className="object-cover w-[120px] h-[120px] p-1"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                    Manchester United
                  </div>
                </div>
                <p className="font-semibold bg-black leading-[180px] px-20 text-white text-xl h-full">
                  19:00
                </p>
                <div className="flex justify-end w-full ">
                  <div className="flex items-center justify-center font-semibold text-center text-xl align-middle w-[60%]">
                    Chelsea
                  </div>
                  <div className="flex justify-center w-[40%]">
                    <div>
                      <Image
                        width={200}
                        height={200}
                        src={Team2}
                        alt="hero_app"
                        className="object-cover w-[120px] h-[120px] p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
