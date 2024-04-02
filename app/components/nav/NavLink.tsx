import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: Props) => {
  const pathname = usePathname();
  console.log(1, pathname);
  console.log(2, href);
  return (
    
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-black text-sm lg:text-lg rounded md:p-0 hover:text-[#F2ECC7] ${
        pathname === href ? "text-[#F2ECC7]" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
