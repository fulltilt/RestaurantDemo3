"use client";

import { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    path: "home",
    name: "home",
    icon: <RiHomeFill />,
    offset: 0,
  },
  {
    path: "menu",
    name: "our menu",
    icon: <BiSolidFoodMenu />,
    offset: 0,
  },
  {
    path: "dessert",
    name: "dessert",
    icon: <BiSolidFoodMenu />,
    offset: 0,
  },
  {
    path: "about",
    name: "about us",
    icon: <FaUsers />,
    offset: -50,
  },
  {
    path: "contact",
    name: "contact",
    icon: <RiHomeFill />,
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${containerStyles} flex mt-5`}>
      <div
        className="cursor-pointer outline-none z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenu2Line className="text-3xl text-white transition-all duration-200 z-10" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-green flex items-center justify-center">
            <IoCloseOutline onClick={() => setIsOpen(false)} />
          </div>
          <Link href="/">
            <Image src="/logo.png" width={90} height={46} alt="logo" />
          </Link>
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          <Link
            href="/"
            className="bg-gray-800 px-[2rem] py-[8px] rounded-xl scroll-smoth"
          >
            {/* <p className="font-semibold tracking-wider"></p> */}
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export default NavMobile;
