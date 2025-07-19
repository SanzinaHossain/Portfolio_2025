import { useState } from "react";
import { InterviewData, ResourceData } from "./Data";

export default function MyResources() {
  const [data, setData] = useState(InterviewData);
  return (
    <div className="lg:p-10 md:pt-20 pt-15 md:p-10 p-5">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        My Resources
      </h1>
      <p
        className="mt-2 text-lg text-black text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {`From code editors to cloud platforms, these are the tools that fuel my creativity and productivity. \nThey reflect not just what I use, but how I approach problem-solving, learning, and building meaningful software solutions.`}{" "}
      </p>
      <div>
        <div className="flex lg:gap-x-10 md:gap-x-10 gap-x-5 items-center mt-8 justify-center">
          <button
            onClick={() => setData(InterviewData)}
            className="px-10 py-3 bg-first text-white cursor-pointer"
          >
            Interview Question
          </button>
          <button
            onClick={() => setData(ResourceData)}
            className="px-10 py-3  bg-first text-white cursor-pointer"
          >
            Resource Handbook
          </button>
        </div>
        <div>
          <div className="text-center mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
            {data?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-lg p-5"
              >
                <img
                  className="h-38 w-38 "
                  src="https://static.vecteezy.com/system/resources/previews/036/437/096/non_2x/illustration-of-book-vector.jpg"
                />
                <h1 className="p-2 text-first text-lg">{item.name}</h1>
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-block bg-first text-white px-5 py-2 rounded hover:bg-opacity-80 transition"
                >
                  📄 Download & View PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
