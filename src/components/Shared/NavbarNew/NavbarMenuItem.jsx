/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import { NavLink } from "react-router-dom";
import { navbarDataMenu } from "./NavbarData";

export default function NavbarMenuItem() {
  return (
    <div className="navbar-center hidden lg:flex md:flex">
      <ul className="menu menu-horizontal px-1 text-[20px]">
        {navbarDataMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `focus:bg-transparent active:bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none border-0 hover:ring-0 text-black hover:text-first hover:font-bold navbar_backgroundColor ${
                  isActive
                    ? "navbar_Client_Link font-bold navbar_backgroundColor"
                    : ""
                }`
              }
            >
              {item?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
