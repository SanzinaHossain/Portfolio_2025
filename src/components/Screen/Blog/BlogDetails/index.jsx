export default function BlogSection() {
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
    </div>
  );
}
