/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import BlogSection from "./BlogDetails";
import MyResources from "./MyResources";

export default function Blog() {
  return (
    <div className="lg:pt-10 md:pt-10 pt-5 lg:p-10 md:p-10 p-2">
      <BlogSection />
      <MyResources />
    </div>
  );
}
