/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import Contact from "../About/Contact";
import Experiences from "./Experiences";
import "./Home.css";
import HomePersonalDetails from "./PersonalDetails";
import Technology from "./Technology/Technology";

export default function Home() {
  return (
    <div className="mt-14">
      <HomePersonalDetails />
      <Technology />
      <Experiences />
      <Contact />
    </div>
  );
}
