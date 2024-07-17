// loading.tsx

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/nav/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <div className="flex flex-wrap gap-5 justify-center px-5 lg:max-w-[1200px] lg:mx-auto pt-5 pb-2 h-fit">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="pb-[100px] w-full h-[600px] md:w-[400px] bg-black relative rounded-md overflow-hidden "
          >
            <div className="w-full h-[300px] ">
              <Skeleton className="w-full h-full rounded-b-none" />
            </div>
            <div className="flex flex-col justify-between text-white px-5">
              <div>
                <Skeleton className="mt-7 mb-3 w-full h-40" />
                <Skeleton className="w-full h-8" />
              </div>
              <Skeleton className="bg-[#fea61f] px-3 py-2 mt-3 w-36 h-10" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="bg-black w-[400px] h-[46px] mt-14 mb-20 mx-auto" />
      <Footer footerColor="black" />
    </>
  );
};

export default Loading;
