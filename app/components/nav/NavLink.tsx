import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-[#F2ECC7]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
