/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { SiRefinedgithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function NavbarUser() {
  return (
    <div className="hidden lg:flex md:flex navbar-end pr-3 bg-white">
      <div className="flex gap-x-4 items-center justify-center text-2xl">
        <a
          href="https://github.com/SanzinaHossain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiRefinedgithub className="text-first cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sanzinahossain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-first cursor-pointer" />
        </a>
        <a
          href="mailto:sanzina67hossain@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMarkEmailRead className="text-first cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
