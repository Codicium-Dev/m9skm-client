import Ball from "@/public/assets/home-page/loading-ball.png";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Navbar from "@/app/components/nav/Navbar";

const Loading = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <div className="flex h-screen justify-center items-center">
        <div className="">
          <Image
            src={Ball}
            alt="loading"
            width={150}
            height={150}
            className="animate-spin h-14 w-14"
          ></Image>
        </div>
      </div>
      <Footer footerColor="" />
    </>
  );
};

export default Loading;
