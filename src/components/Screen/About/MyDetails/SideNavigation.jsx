/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { techData } from "../Data";

export default function SideNavigation() {
  return (
    <div className="col-span-1 gap-y-10">
      {techData.map((item, index) => (
        <div key={index} className="shadow-lg bg-third p-5 mb-8 ">
          <p className="text-2xl text-first">{item.name}</p>
          <p className="text-lg my-3">{item.description}</p>
          <button className="p-2 rounded-sm bg-first text-white w-full">
            {item.button_name}
          </button>
        </div>
      ))}
    </div>
  );
}
