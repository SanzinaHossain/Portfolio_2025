/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { TechSetUpData } from "./Data";

export default function TechSetUp() {
  return (
    <div className="lg:p-10 lg:pt-16 md:pt-20 pt-15 md:p-10 p-5">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        Tech SetUp
      </h1>
      <p
        className="mt-2 text-lg text-black text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {`Technology is at the heart of everything I create, shaping how ideas turn into real-world solutions.This section offers a glimpse \ninto the tools and environments that power my work and help me stay adaptable in an ever-changing tech landscape.`}
      </p>
      <div className="lg:mx-20 md:mx-16 mx-0 mt-16">
        {TechSetUpData.map((item, index) => (
          <div key={index} className="mb-20">
            <div className="flex items-center gap-x-3 text-4xl text-first">
              <p>{item.icon}</p>
              <h1 className="text-black text-2xl">{item.title}</h1>
            </div>
            <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
              {item.element.map((d, index) => (
                <div
                  key={index}
                  className="flex gap-x-5 bg-third p-5 rounded-sm shadow-lg items-center"
                >
                  <p className="text-2xl text-first">{d.icon}</p>
                  <div>
                    <h1 className="text-xl font-bold">{d.name}</h1>
                    <p className="text-lg">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
