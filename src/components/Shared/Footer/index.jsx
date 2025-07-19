/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { SiRefinedgithub } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center p-5 font-bold">
      <h1 className="text-first text-lg text-center">
        © {currentYear} Sanzina Hossain. All rights reserved.
      </h1>
      <div className="flex gap-x-4 items-center justify-center mt-2 text-xl">
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
