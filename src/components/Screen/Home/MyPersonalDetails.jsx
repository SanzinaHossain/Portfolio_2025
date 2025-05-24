/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

export default function MyPersonalDetails({ image }) {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="bg-first w-46 h-46  rounded-full mb-2">
        <img src={image} className="rounded-full w-46 h-46 " />
      </div>
      <h1 className="text-2xl text-first font-bold">Sanzina Hossain</h1>
      <p className="text-black text-lg">
        FullStack Developer (MERN) | <br />
        Competitive Programmer | ERP Expert
      </p>
      <button className="cursor-pointer bg-first text-white font-bold px-5 w-56 py-2 mt-3 rounded-sm">
        Download Cv
      </button>
      <button className="cursor-pointer bg-first text-white font-bold px-5 w-56 py-2 mt-3 rounded-sm">
        Contact Me
      </button>
      <button></button>
    </div>
  );
}
