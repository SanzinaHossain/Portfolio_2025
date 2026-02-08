/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/
import { GiBookCover } from "react-icons/gi";
export default function Publication() {
  return (
    <div className="mt-10">
      <h1 className="text-first text-4xl font-bold cascadia-mono-title">
        Publications
      </h1>
      <p
        className="mt-2 text-lg text-black mb-5"
        style={{ whiteSpace: "pre-line" }}
      >
        {`Showcasing my published research papers that reflect my academic achievements and technical expertise. 👑`}
      </p>
      <div className="flex flex-col gap-y-5">
        <div className="shadow-lg p-5 rounded-sm flex items-center lg:h-36 md:h-36 h-64 gap-x-5 bg-third">
          <GiBookCover className="text-first w-11 h-11 flex-shrink-0" />
          <div>
            <p className="text-first font-bold">
              Mitigating Evasion and Poisoning Attacks in Malware Detection
              Systems: An In-Depth Exploration of Robustness and Resilience
            </p>
            <h1>
              2025 Innovations in Intelligent Systems and Applications
              Conference (ASYU)
            </h1>
            <p>Date : 15-09-2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
