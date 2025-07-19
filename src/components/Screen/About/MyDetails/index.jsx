/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import PersonalInformation from "./PersonalInformation";
import SideNavigation from "./SideNavigation";

export default function MyDetails() {
  return (
    <div className="grid grid-cols-3 mt-16 mx-20 gap-x-8">
      <PersonalInformation />
      <SideNavigation />
    </div>
  );
}
