import { useLocation } from "react-router-dom";

export default function BlogDetailsQuery() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="pt-16">
      <div className="w-full max-w-4xl mx-auto px-4 text-lg">
        {/* Title */}
        <h1 className="text-3xl lg:text-left md:text-left text-center text-first font-bold mb-6">
          {data.data.title}
        </h1>

        {/* Image */}
        <img src={data.image} alt="Blog" className="w-full h-auto rounded-lg" />

        {/* Description */}
        <p className="text-justify mt-5 text-black">{data.data.description}</p>

        {/* Sections */}
        {data.data.part?.map((item, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl text-first font-semibold">{item.title}</h2>
            <p className="text-justify my-2">{item.description}</p>

            {/* Pros */}
            {item.pros?.pros_value && (
              <>
                <h3 className="font-bold text-lg mt-3">{item.pros.title}</h3>
                <ul className="list-disc pl-5 text-black">
                  {item.pros.pros_value.map((d, i) => (
                    <li key={i}>{d.text}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Cons */}
            {item.pros?.cons_value && (
              <>
                <h3 className="font-bold text-lg mt-4">Disadvantages</h3>
                <ul className="list-disc pl-5 text-black">
                  {item.pros.cons_value.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Code Image */}
            {item.pros?.code_image && (
              <img
                src={item.pros.code_image}
                alt="Code Example"
                className="mt-4 w-full rounded-lg"
              />
            )}
          </div>
        ))}

        {/* Conclusion */}
        {data.data.end_title && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-first">
              {data.data.end_title}
            </h2>
            <p className="text-justify mt-2">{data.data.end_description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
