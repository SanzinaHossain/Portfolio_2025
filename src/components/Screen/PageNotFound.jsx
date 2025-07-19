/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { useNavigate } from "react-router-dom";
import image from "../../assets/error.webp";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} />
      <button
        onClick={() => navigate("/")}
        className="my-5 px-10 py-3 bg-first text-white text-xl cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  );
}
