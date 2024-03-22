import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/nav/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <Navbar visibleDefault={true} fixed={false} />
      <div className="flex flex-col pt-[210px] space-y-3 items-center">
        <div className="w-1/2">
          <Skeleton className="h-8 mb-3 w-[250px] rounded-md" />
          <div className="space-y-2">
            <Skeleton className="w-full h-[450px] rounded-md" />
            <Skeleton className="w-full h-7 rounded-md" />
            <Skeleton className="w-[70%] h-7 rounded-md" />
            <Skeleton className="w-full h-7 rounded-md" />
            <Skeleton className="w-[80%] h-7 rounded-md" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loading;
