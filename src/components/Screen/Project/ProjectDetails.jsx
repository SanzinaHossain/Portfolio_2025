/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

export default function ProjectDetails({ item }) {
  return (
    <div className="shadow-lg lg:p-10 md:p-10 p-5 flex flex-col items-center justify-center mb-10 bg-third">
      <div className="flex flex-wrap justify-center items-center lg:gap-x-10 md:gap-x-10 gap-x-0 gap-y-5">
        {item.images.map((im, index) => (
          <img className="h-64 w-64" key={index} src={im.link} />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-x-5">
        {item.code_preview.map(
          (cp, index) =>
            cp.path && (
              <a
                href={cp.path}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="px-3 py-1 bg-first text-white cursor-pointer"
              >
                {cp.name}
              </a>
            )
        )}
      </div>

      <div className="mt-8">
        <h1 className="text-3xl text-first mb-3 lg:text-left md:text-left text-center">
          {item.name}
        </h1>
        <p className="text-black text-justify">{item.description}</p>
        <div className=" flex items-center gap-x-5 mt-3 flex-wrap gap-y-3">
          {item.tech_stack.map((d, index) => (
            <p className="px-2 py-1 bg-white text-black" key={index}>
              {d.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
