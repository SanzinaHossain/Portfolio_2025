/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import Experiences from "./Experiences";
import "./Home.css";
import HomePersonalDetails from "./PersonalDetails";
import Technology from "./Technology/Technology";

export default function Home() {
  return (
    <>
      <HomePersonalDetails />
      <Technology />
      <Experiences />
    </>
  );
}
