/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import MyDetails from "./MyDetails";

export default function About() {
  return (
    <div className="p-10 bg-white text-black">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        About
      </h1>
      <p
        className="mt-2 text-lg text-black text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {` Discover my work, experiences, achievements and the technologies \n that drive me in the world of tech.`}
      </p>
      <MyDetails />
    </div>
  );
}
