/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import { SiRefinedgithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function NavbarUser() {
  return (
    <div className="hidden lg:flex md:flex navbar-end pr-3 bg-white">
      <div className="flex gap-x-4 items-center justify-center text-2xl">
        <SiRefinedgithub className="text-first cursor-pointer" />
        <FaLinkedinIn className="text-first cursor-pointer" />
        <MdMarkEmailRead className="text-first cursor-pointer" />
      </div>
    </div>
  );
}
