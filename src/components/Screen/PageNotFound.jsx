/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../../assets/Animation/Error.json";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie animationData={Error} loop={true} className="mt-10 h-92 " />
      <button
        onClick={() => navigate("/")}
        className=" px-10 py-3 bg-first text-white text-xl cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  );
}
