import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col p-4 overflow-hidden border mt-6 ml-8 rounded-lg relative border-white h-[120px] w-[200px]">
      <h2 className="">Card TItle</h2>
      <p className="text-xs m-2">Card Description Lorem</p>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        Badge
      </span>
    </div>
  );
};

export default Card;
