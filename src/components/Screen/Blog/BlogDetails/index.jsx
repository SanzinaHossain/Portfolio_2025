import { useNavigate } from "react-router-dom";
import { BlogData } from "../Data";
import Loading from "../../../../assets/Animation/Loading.json";
import Lottie from "lottie-react";

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <div className="lg:p-10 md:pt-20 pt-15 md:p-10 p-5">
      <h1 className="text-center text-first text-4xl font-bold cascadia-mono-title">
        My Blogs
      </h1>
      <p
        className="mt-2 text-lg text-black text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {`Whether it's debugging challenges, exploring new tools, or sharing lessons learned, this space is where \nI document and reflect on the process of building thoughtful, impactful software.`}
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center mt-10 gap-x-10 gap-y-5 lg:mx-20 md:mx-16 mx-0">
        {BlogData.map((blog, index) => (
          <div key={index} className="bg-third shadow-lg rounded-lg">
            <img className="rounded-t-lg h-64 w-full" src={blog.image} />
            <div className="p-5">
              <h1 className="text-center text-xl text-first font-bold">
                {blog.name}
              </h1>
              <p className="my-2 text-black text-justify">{blog.description}</p>
              <div className="flex justify-between text-first font-bold">
                <p>{blog.date}</p>
                <button
                  onClick={() => navigate("/blogDetails", { state: blog })}
                  className="cursor-pointer"
                >
                  {`View Details ->`}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center  h-auto">
          <Lottie animationData={Loading} loop={true} />
        </div>
      </div>
    </div>
  );
}
