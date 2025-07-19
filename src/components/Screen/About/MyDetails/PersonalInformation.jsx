/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import Achievement from "../Achievement";
import { myData } from "../Data";

export default function PersonalInformation() {
  return (
    <div className="lg:col-span-2 md:col-span-2 col-span-1 lg:px-5 md:px-5 px-0">
      <h1 className="text-first text-3xl font-bold">{myData.title}</h1>
      {myData.description.map((item, index) => (
        <p key={index} className="text-justify text-black text-lg my-3">
          {item.text}
        </p>
      ))}
      <Achievement />
    </div>
  );
}
