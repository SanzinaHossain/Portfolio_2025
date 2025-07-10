/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo/logo.png";
import { navbarDataMenu } from "./NavbarData";

export default function NavbarLogo() {
  return (
    <div className="navbar-start bg-white ">
      <div className="dropdown bg-white">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden text-lg"
        >
          <GiHamburgerMenu />
        </div>
        <ul
          tabIndex={0}
          className="bg-first menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow focus:outline-none focus:ring-0 gap-y-2 text-lg text-white"
        >
          {navbarDataMenu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg focus:ring-0 focus:outline-none focus:bg-transparent active:bg-transparent hover:bg-transparent navbar_backgroundColor cursor-pointer hover:font-bold hover:ring-0 ${
                    isActive ? "text-second font-bold" : "text-white"
                  }`
                }
              >
                {item?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="flex items-center gap-x-2">
        <img src={logo} className="h-10 w-16" />
        <h1 className="text-2xl">Sanzina Hossain</h1>
      </Link>
    </div>
  );
}
