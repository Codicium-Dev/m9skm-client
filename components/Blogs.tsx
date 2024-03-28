import Image from "next/image";
import BlogButton from "./ui/BlogButton";

export default function Blogs({
  id,
  title,
  subtitle,
  description,
  photo,
}: any) {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center px-3 md:px-10 md:py-5 lg:px-[200px] py-10 lg:py-3  ">
        <div className=" w-full h-[600px] md:w-[400px] md:h-[590px] bg-black relative rounded-md overflow-hidden">
          <div className="w-full h-[300px] ">
            <Image
              src={photo}
              width={200}
              height={200}
              alt="DemoPic"
              priority
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="text-white px-5 ">
            <span className="block mt-7 mb-3 blogTitle">{title}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: description
                  ? description.substr(0, 175) +
                    (description.length > 175 ? "..." : "")
                  : "",
              }}
            ></p>
            <BlogButton id={id} />
          </div>
        </div>
      </div>
    </>
  );
}
