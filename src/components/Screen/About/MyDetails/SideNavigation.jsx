/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { useNavigate } from "react-router-dom";
import { techData } from "../Data";

export default function SideNavigation() {
  const navigate = useNavigate();
  return (
    <div className="col-span-1 gap-y-10 lg:mt-0 md:mt-0 mt-10">
      {techData.map((item, index) => (
        <div key={index} className="shadow-lg bg-third p-5 mb-8 ">
          <p className="text-2xl text-first">{item.name}</p>
          <p className="text-lg my-3">{item.description}</p>
          <button
            onClick={() => navigate(item.path)}
            className="p-2 rounded-sm bg-first text-white w-full cursor-pointer"
          >
            {item.button_name}
          </button>
        </div>
      ))}
    </div>
  );
}
