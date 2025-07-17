/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

export default function MyPersonalDetails({ image }) {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1lw2AoTksD1nPx-r1ncLA6NynlJPD8J5X/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="text-center flex flex-col justify-center items-center ">
      <div className="bg-first w-46 h-46  rounded-full mb-2">
        <img src={image} className="rounded-full w-46 h-46 " />
      </div>
      <h1 className="text-2xl text-first font-bold cascadia-mono-title">
        Sanzina Hossain
      </h1>
      <p className="text-black text-lg">
        FullStack Developer (MERN) | <br />
        Competitive Programmer | ERP Expert
      </p>
      <button
        onClick={handleDownload}
        className="cursor-pointer bg-gradient-to-r from-first to-second hover:from-second hover:to-first text-white font-bold px-5 w-56 py-2 mt-3 rounded-sm"
      >
        Download Cv
      </button>
      <a
        href="#contact"
        className="cursor-pointer bg-gradient-to-r from-first to-second hover:from-second hover:to-first text-white font-bold px-5 w-56 py-2 mt-3 rounded-sm text-center"
      >
        Contact Me
      </a>
    </div>
  );
}
