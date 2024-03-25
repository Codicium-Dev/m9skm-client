import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/nav/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <div className="flex flex-col p-5 md:p-[60px] pt-[50px] md:pt-[110px] space-y-3 items-center">
        <div className="w-full md:w-[80%] lg:w-1/2">
          <Skeleton className="h-8 mb-3 w-[200px] md:w-[250px] rounded-md" />
          <div className="space-y-2">
            <Skeleton className="w-full h-[180px] md:h-[400px] rounded-md" />
            <Skeleton className="w-full h-7 rounded-md" />
            <Skeleton className="w-[70%] h-7 rounded-md" />
            <Skeleton className="w-[60%] md:w-[80%] lg:w-full h-7 rounded-md " />
            <Skeleton className="w-[80%] h-7 rounded-md hidden md:hidden lg:block" />
          </div>
        </div>
      </div>
      <Footer footerColor="" />
    </>
  );
};

export default Loading;
