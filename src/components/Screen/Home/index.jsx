/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import image from "../../../assets/Logo/Sanzina.png";
import AboutDetails from "./AboutDetails";
import MyPersonalDetails from "./MyPersonalDetails";
import "./Home.css";

export default function Home() {
  return (
    <div
      className="h-[600px] max-w-screen flex justify-center items-center p-10  gap-x-16"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-vector/modern-geometric-vector-illustration-design-abstract-background_29865-9088.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AboutDetails />
      <MyPersonalDetails image={image} />
    </div>
  );
}
