/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import image from "../../../../assets/Logo/Sanzina.png";
import AboutDetails from "./AboutDetails";
import MyPersonalDetails from "./MyPersonalDetails";

export default function HomePersonalDetails() {
  return (
    <div
      className="lg:h-[550px] md:h-[550px] h-auto max-w-screen flex justify-center items-center lg:p-10 md:p-10 p-5  gap-x-16 gap-y-10 flex-wrap"
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
