"use client";
import Image from "next/image";
import heroApp from "@/public/assets/home-page/hero_app.png";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

import Viber from "../../../public/assets/footer/footer-viber.png";
import Telegram from "../../../public/assets/footer/footer-telegram.png";
import Phone from "../../../public/assets/footer/footer-phone.png";

function Hero() {
  const [viberLink, setViberLink] = useState(
    "https://invite.viber.com/?g2=AQAT5AzzN9mJu1KWiT7C2b13nFsiS%2BXoheXLWNkGofLJQxcxCvsS6LWydWhtNBE9"
  );
  const [telegramLink, setTelegramLink] = useState(
    "https://t.me/+XsUcIYJ9U4NjYzhl"
  );
  const phoneNumber = "09776155260";

  return (
    <div className="relative flex flex-col md:flex-row gap-0 md:gap-10 mx-[20px] md:mx-[80px] lg:mx-[200px] h-[520px] md:h-[450px]">
      <div className="flex-col">
        <div>
          <h1 className="text-xl lg:text-4xl font-bold lg:mt-[50px] w-full xl:w-[540px] ">
            Lorem ipsum dolor
          </h1>
          <p className="mt-5 text-sm lg:text-lg w-full xl:w-[540px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            neque at, tenetur minima exercitationem molestias et quis ipsam quas
            sapiente eum fuga illum libero ab doloremque delectus nulla vitae
            veniam.
          </p>
        </div>

        <Button
          variant="outline"
          className="bg-transparent border-black hover:bg-black hover:text-white mt-4 block"
        >
          Download Now
        </Button>

        {/* new */}
        <div className="flex flex-col h-fit mt-7">
          <p className="subTitleMM pb-2 font-bold">ဆက်သွယ်ရန်</p>

          <div className="flex gap-5 ">
            <Link href={viberLink}>
              <div className="flex gap-4 md:gap-5 items-center bg-[#573187] rounded-lg">
                <Image
                  src={Viber}
                  width={50}
                  height={50}
                  alt="viber-logo"
                  className="w-10 h-10 md:w-12 md:h-12"
                ></Image>
                {/* <p className="text-sm md:text-md">Viber ဖြင့်ဆက်သွယ်ရန် နှိပ်ပါ</p> */}
              </div>
            </Link>

            <Link href={telegramLink}>
              <div className="flex gap-4 md:gap-5 items-center bg-[#0082be] rounded-lg">
                <Image
                  src={Telegram}
                  width={50}
                  height={50}
                  alt="viber-logo"
                  className="w-10 h-10 md:w-12 md:h-12"
                ></Image>
                {/* <p className="text-sm md:text-md">Telegram ဖြင့်ဆက်သွယ်ရန် နှိပ်ပါ </p> */}
              </div>
            </Link>
            <Link href={`tel:${phoneNumber}`}>
              <div className="flex gap-4 md:gap-5 items-center bg-[#58b961] rounded-lg">
                <Image
                  src={Phone}
                  width={50}
                  height={50}
                  alt="viber-logo"
                  className="w-10 h-10 md:w-12 md:h-12"
                ></Image>
                {/* <p className="text-sm md:text-md">ဖုန်းဖြင့်ဆက်သွယ်မည်</p> */}
              </div>
            </Link>
          </div>
        </div>
        {/* new end */}
      </div>

      <div className="absolute bottom-0 left-1/2 md:left-auto right-0 transform -translate-x-1/2 md:transform-none w-[150px] min-w-[150px] md:w-[150px] md:min-w-[200px] xl:w-[250px] xl:min-w-[250px]">
        <Image
          width={500}
          height={580}
          src={heroApp}
          alt="hero_app"
          className="w-full object-cover"
        />
      </div>

      <Link href="#servicesSection" scroll={true}>
        <div className="absolute -bottom-14 md:bottom-0 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center">
            <p className="md:text-white font-semibold text-sm md:text-base">
              Explore More
            </p>
            <div>
              <IoIosArrowDown size={30} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
