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
        <SiRefinedgithub className="text-first cursor-pointer" />
        <FaLinkedinIn className="text-first cursor-pointer" />
        <MdMarkEmailRead className="text-first cursor-pointer" />
      </div>
    </div>
  );
}
