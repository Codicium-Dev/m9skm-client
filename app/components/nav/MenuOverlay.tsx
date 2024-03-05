import React from "react";
import NavLink from "./NavLink";

interface Props {
  links: { path: string; title: string }[];
}

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(
        (
          link: { path: string; title: string },
          index: React.Key | null | undefined
        ) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        )
      )}
    </ul>
  );
};

export default MenuOverlay;
