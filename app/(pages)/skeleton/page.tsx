import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col pt-[146px] md:pt-[200px] space-y-3 items-center px-5 md:px-[60px] ">
      <div className="w-full md:w-[80%] lg:w-1/2">
        <Skeleton className="h-8 mb-3 w-[150px] md:w-[250px] rounded-md" />
        <div className="space-y-2">
          <Skeleton className="w-full h-[330px] md:h-[450px] rounded-md" />
          <Skeleton className="w-full h-7 rounded-md" />
          <Skeleton className="w-[70%] h-7 rounded-md" />
          <Skeleton className="hidden md:block w-[80%] h-7 rounded-md" />
          <Skeleton className="hidden lg:block w-[80%] h-7 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
