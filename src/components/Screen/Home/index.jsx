/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import image from "../../../assets/Logo/Sanzina.png";
import AboutDetails from "./AboutDetails";
import MyPersonalDetails from "./MyPersonalDetails";

export default function Home() {
  return (
    <div
      className="h-[600px] max-w-screen grid grid-cols-2 justify-center place-items-center"
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
