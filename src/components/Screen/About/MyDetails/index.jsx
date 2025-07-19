/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import PersonalInformation from "./PersonalInformation";
import SideNavigation from "./SideNavigation";

export default function MyDetails() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-16 lg:mx-20 md:mx-10 mx-0 lg:gap-x-8 md:gap-x-8 gap-x-0">
      <PersonalInformation />
      <SideNavigation />
    </div>
  );
}
