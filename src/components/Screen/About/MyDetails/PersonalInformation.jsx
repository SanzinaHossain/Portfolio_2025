/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import Achievement from "../Achievement";
import { myData } from "../Data";

export default function PersonalInformation() {
  return (
    <div className="col-span-2 px-5">
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
