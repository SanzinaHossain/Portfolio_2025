/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { projectData } from "./Data";
import ProjectDetails from "./ProjectDetails";

export default function Project() {
  return (
    <div className="lg:p-10 lg:pt-20 md:pt-20 pt-15 md:p-10 p-5">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        Projects
      </h1>
      <p
        className="mt-2 text-lg text-black text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {` Over the years, I’ve had the opportunity to work on a variety of projects across different domains. \nWhile this list is by no means exhaustive, it highlights some of the key initiatives I’ve been proud to contribute to.`}
      </p>

      <div className="lg:mt-16 md:mt-16 mt-8 lg:mx-30 md:mx-15 mx-0 bg-third flex flex-col bg-white">
        {projectData.map((item, index) => (
          <ProjectDetails item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
