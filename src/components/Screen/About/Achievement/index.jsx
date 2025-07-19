/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { GiDiamondTrophy } from "react-icons/gi";
import { achievementData } from "../Data";

export default function Achievement() {
  return (
    <div className="mt-10">
      <h1 className="text-first text-4xl font-bold cascadia-mono-title">
        Achivements
      </h1>
      <p
        className="mt-2 text-lg text-black mb-5"
        style={{ whiteSpace: "pre-line" }}
      >
        {`Showcasing the milestones and successes that highlight my growth and impact in software development 👑`}
      </p>
      <div className="flex flex-col gap-y-5">
        {achievementData.map((item, index) => (
          <div
            key={index}
            className={`shadow-lg p-5 rounded-sm flex items-center h-36 gap-x-5 ${
              index % 2 != 0 ? "bg-white " : "bg-third"
            }`}
          >
            <GiDiamondTrophy className="text-first w-11 h-11 flex-shrink-0" />
            <div>
              <h1>
                <span className="text-first font-bold">{item.title}</span> |{" "}
                {item.subtitle}
              </h1>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
