/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import Lottie from "lottie-react";
import animationData from "../../../../assets/Animation/Contact.json";
import ContactForm from "./ContactForm";
import ContactHooks from "./Hooks";

export default function Contact() {
  const { register, handleSubmit, handleAddContact } = ContactHooks();
  return (
    <div id="contact" className="text-center lg:p-10 md:p-10 p-5 bg-third">
      <h1 className="text-center text-black text-4xl font-bold cascadia-mono-title">
        Get In Touch
      </h1>
      <p className="mt-2 text-lg text-black">
        Have a question or want to work together? Drop me a message and I’ll get
        back to you soon
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center justify-evenly lg:mt-16 md:mt-16 mt-8">
        <div>
          <Lottie animationData={animationData} loop={true} />
        </div>
        <ContactForm
          register={register}
          handleSubmit={handleSubmit}
          handleAddContact={handleAddContact}
        />
      </div>
    </div>
  );
}
