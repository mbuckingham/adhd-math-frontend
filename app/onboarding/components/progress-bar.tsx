import React from "react";
import Image from "next/image";
import Check from "../../../public/onboarding/Icon/CheckMark.svg";

export default function ProgressBar() {
  return (
    <div className="flex items-center ">
      <div className="flex flex-col items-center space-x-5 ">
        <div className="flex  h-9 p-2 justify-center items-center rounded-full border-2 border-gray-700 bg-gray-400 grow-0 shrink-0">
          <Image src={Check} alt="completed" width={15} height={15} />
        </div>
        <p className="pr-5">Me</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="flex flex-col items-center space-x-5 ">
        <div className="flex  h-9 p-2 justify-center items-center rounded-full border-2 border-gray-700 bg-gray-400 grow-0 shrink-0">
          <Image src={Check} alt="completed" width={15} height={15} />
        </div>
        <p className="pr-5">Lessons</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "100%" }}
        ></div>
      </div>
      <div className="flex flex-col items-center space-x-5 ">
        <div className="flex w-9 h-9 p-3 justify-center items-center gap-2.5 rounded-full border-2 border-gray-700 bg-gray-400">
          #
        </div>
        <p className="pr-5">Settings</p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>
      <div className="flex flex-col items-center space-x-5 ">
        <div className="flex w-9 h-9 p-3 justify-center items-center gap-2.5 rounded-full border-2 border-gray-600 bg-gray-300">
          #
        </div>
        <p className="pr-5">Buddy</p>
      </div>
    </div>
  );
}
