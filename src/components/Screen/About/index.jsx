/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { techData } from "./Data";

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
      <div className="grid grid-cols-3 mt-16 mx-20 gap-x-8">
        <div className="col-span-2 px-5">
          <h1 className="text-first text-3xl font-bold">
            Hey! Welcome to my space 🎊
          </h1>
          <p className="text-justify text-black text-lg my-3">
            Hi! I’m Sanzina Hossain, a passionate Full Stack Developer and
            aspiring Data Scientist from Chittagong, Bangladesh. I hold a
            Bachelor’s degree in Computer Science and Engineering from
            International Islamic University Chittagong (IIUC), where I built a
            strong foundation in software development, problem-solving, and
            system design.
          </p>
          <p className="text-justify text-black text-lg my-1">
            From a young age, I’ve been deeply fascinated by coding and
            technology. What started as curiosity quickly turned into a lifelong
            passion for building solutions that are both functional and
            impactful. I’m currently working as a Full Stack Developer at Niret
            Infotech Limited, where I design and develop full-fledged web
            applications using modern technologies, collaborating closely with
            teams to deliver clean, scalable, and efficient code.
          </p>
          <p className="text-justify text-black text-lg my-3">
            I’ve recently taken a significant step forward in my academic
            journey by getting admitted to the Master’s program in Data Science
            at the Technical University of Hamburg (TUHH) in Germany. This
            program will allow me to dive deeper into areas like machine
            learning, big data analytics, and intelligent systems — all of which
            align perfectly with my long-term goal of combining software
            engineering with data science to build smarter, data-driven
            applications.
          </p>
          <p className="text-justify text-black text-lg my-3">
            Whether it’s developing a web platform or exploring a new machine
            learning model, I love solving complex problems and learning
            something new every day. I’m excited about building tools and
            products that make a real difference.
          </p>
          <p className="text-justify text-black text-lg my-3">
            Welcome to my little space on the web — a place where I share my
            journey, experiences, and thoughts on tech and beyond. Let’s
            connect, grow, and create something amazing together.
          </p>
        </div>
        <div className="col-span-1 gap-y-10">
          {techData.map((item, index) => (
            <div key={index} className="shadow-lg bg-third p-5 mb-8 ">
              <p className="text-2xl text-first">{item.name}</p>
              <p className="text-lg my-3">{item.description}</p>
              <button className="p-2 rounded-sm bg-first text-white w-full">
                {item.button_name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
