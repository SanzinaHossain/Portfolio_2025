import Lottie from "lottie-react";
import animationData from "../../../../assets/Animation/Contact.json";

export default function Contact() {
  return (
    <div className="text-center p-10">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        Get In Touch
      </h1>
      <p className="mt-2 text-lg">
        Have a question or want to work together? Drop me a message and I’ll get
        back to you soon
      </p>
      <div className="flex justify-evenly">
        <div>
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
