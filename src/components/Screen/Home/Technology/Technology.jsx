/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import {
  BiLogoPostgresql,
  BiSolidFileCss,
  BiSolidPurchaseTag,
} from "react-icons/bi";
import { DiHeroku } from "react-icons/di";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GiBassetHoundHead } from "react-icons/gi";
import { GrGraphQl, GrReactjs, GrTransaction } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import {
  MdOutlineInventory,
  MdOutlineProductionQuantityLimits,
  MdSwitchAccount,
} from "react-icons/md";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { RiFirebaseLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpo,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiRedux,
  SiRefinedgithub,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function Technology() {
  return (
    <div className="lg:p-10 md:p-10 p-5 bg-first flex flex-col flex-wrap justify-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-x-10 gap-y-5 mt-5 w-[100%] justify-center ">
        <div className="p-5 bg-white text-black">
          <p className="text-first font-bold text-xl">FullStack Technology</p>
          <p className="my-4 text-justify">
            JavaScript, HTML, CSS, React JS, Node JS, MongoDB, Express JS,
            PostgreSQL, GraphQL, Next JS, Redux, Tailwind CSS, Firebase, React
            Native, TypeScript
          </p>
          <div className="flex gap-x-2 items-center ">
            <IoLogoJavascript className="text-xl text-first" />
            <FaHtml5 className="text-xl text-first" />
            <BiSolidFileCss className="text-xl text-first" />
            <GrReactjs className="text-xl text-first" />
            <FaNodeJs className="text-xl text-first" />
            <SiMongodb className="text-xl text-first" />
            <SiExpress className="text-xl text-first" />
            <BiLogoPostgresql className="text-xl text-first" />
            <GrGraphQl className="text-xl text-first" />
            <SiRedux className="text-xl text-first" />
            <RiTailwindCssFill className="text-xl text-first" />
            <RiFirebaseLine className="text-xl text-first" />
            <SiTypescript className="text-xl text-first" />
          </div>
        </div>
        <div className="p-5 bg-white text-black ">
          <p className="text-first font-bold text-xl">Tools</p>
          <p className="my-4 text-justify">
            Netlify, Github, Expo, Vercel, Heroku, Vs Code
          </p>
          <div className="flex gap-x-2 items-center ">
            <SiNetlify className="text-xl text-first" />
            <SiRefinedgithub className="text-xl text-first" />
            <SiExpo className="text-xl text-first" />
            <IoLogoVercel className="text-xl text-first" />
            <DiHeroku className="text-xl text-first" />
            <VscCode className="text-xl text-first" />
          </div>
        </div>

        <div className="p-5 bg-white text-black">
          <p className="text-first font-bold text-xl">ERP Module</p>
          <p className="my-4 text-justify">
            Production, Sales, Purchase, Human Resource Management, Material
            Management, Fixed Asset, General Ledger, Office Organizer
          </p>
          <div className="flex gap-x-2 items-center ">
            <MdOutlineProductionQuantityLimits className="text-xl text-first" />
            <GrTransaction className="text-xl text-first" />
            <BiSolidPurchaseTag className="text-xl text-first" />
            <FaUsersGear className="text-xl text-first" />
            <MdOutlineInventory className="text-xl text-first" />
            <GiBassetHoundHead className="text-xl text-first" />
            <MdSwitchAccount className="text-xl text-first" />
            <PiBuildingOfficeDuotone className="text-xl text-first" />
          </div>
        </div>
      </div>
    </div>
  );
}
