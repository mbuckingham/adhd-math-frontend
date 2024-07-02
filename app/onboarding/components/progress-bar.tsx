import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/Vector.svg";

export default function ProgressBar() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex  h-9 p-2 justify-center items-center rounded-full border-2 border-gray-700 bg-gray-400">
        <Image src={Check} alt="completed" width={50} height={50} />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="flex  h-9 p-2 justify-center items-center rounded-full border-2 border-gray-700 bg-gray-400">
        <Image src={Check} alt="completed" width={50} height={50} />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="flex w-9 h-9 p-3 justify-center items-center gap-2.5 rounded-full border-2 border-gray-700 bg-gray-400">
        #
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>
      <div className="flex w-9 h-9 p-3 justify-center items-center gap-2.5 rounded-full border-2 border-gray-600 bg-gray-300">
        #
      </div>
    </div>
  );
}
