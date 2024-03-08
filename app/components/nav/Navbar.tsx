"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import m9Logo from "@/public/assets/m9logo.png";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Football Scores",
    path: "/footballscores",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

interface Props {
  visibleDefault: boolean;
  fixed?: boolean;
}

const Navbar = ({ visibleDefault, fixed = true }: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(visibleDefault || false);

  useEffect(() => {
    if (fixed === true) {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos < prevScrollPos && currentScrollPos > 10);

        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [fixed, prevScrollPos, visible]);

  return (
    <header>
      <nav
        className={`
        sticky mx-auto text-black top-0 left-0 right-0 z-10 bg-transparent transition-all duration-300`}
      >
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-16 py-8">
          <Link href="/">
            <Image width={80} src={m9Logo} alt="logo" />
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:opacity-70 transition-all"
              >
                {/* <Bars3Icon className="h-5 w-5" /> */}
                --- --- ---
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:opacity-70 transition-all"
              >
                {/* <XMarkIcon className="h-5 w-5" /> */}X
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
