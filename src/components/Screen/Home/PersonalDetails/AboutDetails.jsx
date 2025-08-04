/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { useNavigate } from "react-router-dom";

export default function AboutDetails() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:w-[50%] md:w-[50%] w-auto justify-center ">
      <h1 className="text-2xl font-bold text-black animate-pulse text-left">
        <span className="text-4xl">👋</span>Hey, Nice to Meet You !
      </h1>
      <h1 className="text-4xl font-bold text-first my-3 cascadia-mono-title">
        I'm Sanzina Hossain
      </h1>
      <p className="text-justify">
        I’m a Software Engineer passionate about building thoughtful user
        experiences and robust web applications. With 2 years of hands-on
        experience, I specialize in creating clean, scalable solutions using
        JavaScript, React, and Node.js and MongoDB. My early journey in tech was
        shaped by problem solving and system design, which now fuels my approach
        to engineering modern software.🚀
      </p>
      <p className="text-justify mt-3">
        Curious about how things work and always excited to learn something
        new—especially in tech and AI. This space is where I pause, think, and
        share what I discover along the way. Welcome, and enjoy the journey with
        me!❤️
      </p>
      <button
        onClick={() => navigate("/about")}
        className="mt-3 text-black text-md text-left cursor-pointer"
      >
        🤷‍♀️ About me
      </button>
      <button
        onClick={() => navigate("/blogs")}
        className="mt-1 text-black text-md text-left cursor-pointer"
      >
        📖 Explore my blogs
      </button>
    </div>
  );
}
