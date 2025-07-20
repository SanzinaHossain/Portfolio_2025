/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { TiArrowForward } from "react-icons/ti";
import { ContactUsData } from "./Data";

export default function ContactForm({
  handleSubmit,
  handleAddContact,
  register,
}) {
  return (
    <div className="bg-white lg:p-10 md:p-10 p-5 w-full">
      <h1 className="text-3xl text-center text-first font-bold">
        Make An Appointment
      </h1>

      <div className={`bg-slate-300 h-[1px]  mt-3 `}></div>
      <form
        onSubmit={handleSubmit(handleAddContact)}
        className=" flex flex-col justify-center items-center  gap-y-3 mt-5 "
      >
        {ContactUsData.map((data, index) => (
          <input
            key={index}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder={data.placeHolder}
            className="focus:ring-0 hover:ring-0 bg-gray-100 border-gray-100 w-full rounded-sm p-4 outline-none text-lg text-gray-700"
            {...register(data.register)}
          />
        ))}

        <button className="bg-first text-lg  text-white  flex gap-x-1 jusfify-center items-center mt-5 p-2 rounded-sm  cursor-pointer">
          Submit Request
          <TiArrowForward className="text-lg" />
        </button>
      </form>
    </div>
  );
}
