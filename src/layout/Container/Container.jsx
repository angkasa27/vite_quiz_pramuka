import React from "react";
import Burger from "../../assets/svg/Burger";

export default function container({ children, bgColor }) {
  return (
    <div className={"h-screen w-sceen relative " + bgColor}>
      <div className="w-full h-full max-w-screen-sm mx-auto min-h-screen p-4">
        <div className="w-full justify-between flex pb-4">
          <div className="flex gap-2">
            <div className="bg-gray-700 rounded-lg   p-1.5">
              <Burger className="w-6 h-6" />
            </div>
            <div className="bg-gray-700 rounded-lg  px-3 py-1.5">
              Stage 1/24
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg  px-3 py-1.5">99</div>
        </div>
        {children}
      </div>
    </div>
  );
}
