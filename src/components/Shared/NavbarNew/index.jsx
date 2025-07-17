/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarUser from "./NavbarUser";

export default function NavbarNew() {
  return (
    <div className="navbar bg-white fixed top-0 left-0 right-0 z-10 px-4 py-3 text-black lg:shadow-none md:shadow-none shadow-lg">
      <NavbarLogo />
      <NavbarMenuItem />
      <NavbarUser />
    </div>
  );
}
