/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarUser from "./NavbarUser";

export default function NavbarNew() {
  return (
    <div className="navbar bg-white fixed top-0 left-0 right-0 z-10 px-4 py-3 text-black">
      <NavbarLogo />
      <NavbarMenuItem />
      <NavbarUser />
    </div>
  );
}
