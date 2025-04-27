/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo/logo.png";
import { navbarDataMenu } from "./Data";
import { FaLinkedinIn } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 py-6 justify-evenly items-center">
      <div className="flex items-center justify-center gap-x-2 cursor-pointer">
        <img src={logo} className="h-10 w-16" />
        <h1 className="text-2xl">Sanzina Hossain</h1>
      </div>
      <div className="flex items-center gap-x-10 justify-center">
        {navbarDataMenu.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              `hover:text-first  hover:font-bold text-lg ${
                isActive ? "text-first font-bold underline" : ""
              }`
            }
            key={index}
            to={item.path}
          >
            {item?.title}
          </NavLink>
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-center  text-2xl">
        <SiRefinedgithub className="text-first cursor-pointer" />
        <FaLinkedinIn className="text-first cursor-pointer" />
        <MdMarkEmailRead className="text-first cursor-pointer" />
      </div>
    </div>
  );
}
