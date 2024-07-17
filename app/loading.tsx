import Ball from "@/public/assets/home-page/loading-ball.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="">
        <Image
          src={Ball}
          alt="loading"
          width={100}
          height={100}
          className="animate-spin h-14 w-14"
        ></Image>
      </div>
    </div>
  );
};

export default Loading;
