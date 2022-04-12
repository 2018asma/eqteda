import React, { useState } from "react";
import OrganizersList from "./organizer/OrganizersList";
import CreateOrganizer from "./organizer/CreateOrganizer";


const OrganizerTabs = () => {
  const [openTap, setOpenTap] = useState(1);

  return (
    <div className="col-start-2 col-end-6 bg-gray-100">
      <div className="border-b border-gray-200 dark:border-gray-700 relative">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 grid grid-cols-2">
          <li
            className={`py-3   ${
              openTap === 1
                ? "border-b-4 border-emerald-500 text-black font-bold"
                : "bg-transparent text-black"
            }`}
            onClick={(e) => {
              setOpenTap(1);
            }}
          >
            جميع المنظمون
          </li>
          <li
            className={`py-3   ${
              openTap === 2
                ? "border-b-4 border-emerald-500 text-black font-bold"
                : "bg-transparent text-black"
            }`}
            onClick={(e) => {
              setOpenTap(2);
            }}
          >
            {" "}
            إضافة منظم
          </li>
        </ul>
      </div>

      <div className={`pt-8 scroll-smooth ${openTap === 1 ? "block" : "hidden"}`}>
        <OrganizersList/>
      </div>

      <div className={`mt-6 pt-6 ${openTap === 2 ? "block" : "hidden"}`}>
        <CreateOrganizer />
      </div>
      
    </div>
  );
};

export default OrganizerTabs;
