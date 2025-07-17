/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import NavbarNew from "./components/Shared/NavbarNew";

export default function App() {
  return (
    <>
      <NavbarNew />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
