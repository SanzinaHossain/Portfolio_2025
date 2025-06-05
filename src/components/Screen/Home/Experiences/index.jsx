/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import CompanyLogo from "../../../../assets/Logo/CompanyLogo.png";
import CompanyLogo1 from "../../../../assets/Logo/CompanyLogo1.jpeg";

export default function ExperienceSection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="p-10 max-w-5xl w-full mt-10">
        <h1 className="text-3xl text-first font-bold cascadia-mono-title mb-10">
          Experiences
        </h1>

        {/* First Experience */}
        <div className="flex gap-x-5 mb-5">
          <div>
            <img src={CompanyLogo} className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-2xl text-first font-bold">
              Niret InfoTech Limited
            </h1>
            <p>🏠 Chattogram, Bangladesh</p>
            <div className="mt-3 w-full">
              <ul className="timeline timeline-compact timeline-snap-icon timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-[#006d77]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-5">
                    <div className="flex justify-between flex-wrap">
                      <h1 className="text-xl text-black">Software Engineer</h1>
                      <h1>June 2025 - Present</h1>
                    </div>
                    <div className="text-justify mt-3">
                      Contributed to the development of multiple projects using
                      React, Node.js, and MongoDB. Led and mentored development
                      teams, performed code reviews, and defined technical
                      standards. Additionally, worked on the Oracle database
                      system for our ERP product and provided customer support
                      services.
                    </div>
                  </div>
                  <hr className="bg-third" />
                </li>
                <li>
                  <hr className="bg-third" />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-[#006d77]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-3">
                    <div className="flex justify-between flex-wrap">
                      <h1 className="text-xl text-black">
                        Software Engineer Intern
                      </h1>
                      <h1>December 2024 - May 2025</h1>
                    </div>
                    <div className="text-justify mt-3">
                      <ul className="list-disc pl-5">
                        <li>
                          Built a full-stack company website with an admin
                          panel, making it easy to update content without
                          changing the code.
                        </li>
                        <li className="my-2">
                          Explored and documented all ERP modules to better
                          understand the system and support clients more
                          effectively.
                        </li>
                        <li className="my-2">
                          Helped ERP clients like MAF Footwear Limited and MAF
                          Shoes Limited by solving system issues and keeping
                          their operations smooth.
                        </li>
                        <li className="my-2">
                          Worked on upgrading the ERP technology stack to make
                          the system faster and more scalable.
                        </li>
                        <li className="my-2">
                          Developing support software to track and resolve
                          client issues more efficiently and improve service
                          quality.
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Experience */}
        <div className="flex gap-x-5">
          <img src={CompanyLogo1} className="h-12 w-12" />
          <div className="flex flex-col items-start w-full">
            <h1 className="text-2xl text-first font-bold">
              Software Engineer Intern
            </h1>
            <div className="flex justify-between w-full flex-wrap">
              <div className="flex gap-x-2">
                <p>🏬 Plusklass Technology Limited</p>
                <p>🏠 Bengaluru, India</p>
              </div>
              <h1>August 2022 - November 2022</h1>
            </div>
            <div className="text-justify mt-3">
              <ul className="list-disc pl-5">
                <li>
                  Designed and developed the user interface of Plusklass
                  websites.
                </li>
                <li className="my-2">
                  Made the website fully responsive for smooth performance
                  across all devices and screen sizes.
                </li>
                <li>
                  Collaborated closely with designers and project managers to
                  align on project goals and deliverables.
                </li>
                <li className="my-2">
                  Identified and fixed bugs, optimized performance, and
                  conducted thorough testing to ensure high-quality user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
