import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  blogId?: string | string[];
}
const MenuOverlay = ({ blogId }: Props) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col pt-2 pb-4 items-center  ">
      <li>
        <Link
          href={"/"}
          className={`block py-2 pl-3 pr-4 text-black text-sm lg:text-lg rounded md:p-0 hover:text-[#F2ECC7] ${
            pathname === "/" ? "text-white font-semibold" : ""
          }`}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          href={"/blogs"}
          className={`block py-2 pl-3 pr-4 text-black text-sm lg:text-lg rounded md:p-0 hover:text-[#F2ECC7] ${
            pathname === "/blogs" || pathname === `/blogs/${blogId}`
              ? "text-white font-semibold"
              : ""
          }`}
        >
          BLOGS
        </Link>
      </li>
      <li>
        <Link
          href={"/footballscores"}
          className={`block py-2 pl-3 pr-4 text-black text-sm lg:text-lg rounded md:p-0 hover:text-[#F2ECC7] ${
            pathname === "/footballscores" ? "text-white font-semibold" : ""
          }`}
        >
          FOOTBALL SCORES
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
