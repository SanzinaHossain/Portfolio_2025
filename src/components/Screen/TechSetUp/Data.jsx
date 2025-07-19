/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import {
  FaDesktop,
  FaFirefoxBrowser,
  FaGithub,
  FaKeyboard,
  FaLaptop,
  FaMouse,
} from "react-icons/fa";
import { FaBrave } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const TechSetUpData = [
  {
    title: "Hardware",
    icon: <FaDesktop />,
    element: [
      {
        icon: <FaLaptop />,
        name: "Lenovo Thinkpad X240",
        description: "Office Setup - smooth service",
      },
      {
        icon: <FaMouse />,
        name: "RTM 019 Mouse",
        description: "Office Setup - with good performance 3D optical mouse",
      },
      {
        icon: <FaLaptop />,
        name: "Acer Laptop TravelMate P246-M ",
        description: "Home Setup - smooth service",
      },
      {
        icon: <FaMouse />,
        name: "Logitech B175",
        description: "Home Setup - highly recommended wireless mouse",
      },
      {
        icon: <FaKeyboard />,
        name: "Xtrike Me KB-303",
        description: "Home Setup - wireless keyboard",
      },
      {
        icon: <HiMiniSpeakerWave />,
        name: "DW06 Speaker",
        description:
          "Home Setup - moon shape portable speaker with night light",
      },
    ],
  },
  {
    title: "Software",
    icon: <GrCloudSoftware />,
    element: [
      {
        icon: <VscVscode />,
        name: "VsCode Editor",
        description: "Suitable for all type of stack with good performance",
      },
      {
        icon: <FaFirefoxBrowser />,
        name: "Mozila Firefox",
        description: "Strong focus on privacy, speed, and efficiency",
      },
      {
        icon: <FaGithub />,
        name: "Github ",
        description: "Code storage site. Good for collaboration works",
      },
      {
        icon: <SiNetlify />,
        name: "Netlify",
        description: "Smooth deployment for frontend web application.",
      },
      {
        icon: <IoLogoVercel />,
        name: "Vercel",
        description: "Smooth deployment for backend application",
      },
      {
        icon: <SiPostman />,
        name: "Postman",
        description: "Simplify the process of testing APIs ",
      },
      {
        icon: <FaBrave />,
        name: "Brave Browser",
        description: "Strong focus on privacy, speed, and efficiency",
      },
    ],
  },
];
