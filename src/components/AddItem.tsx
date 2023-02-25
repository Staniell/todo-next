import React from "react";
import { useState } from "react";

interface Props {
  content: string;
}

export default function AddItem({ content }: Props) {
  // const [value, setV]

  // function completeItem(id: string) {
  //   setItems([...items, { id: id, content: "sds", cleared: false, editMode: false }]);
  // }

  return (
    <div className="flex flex-col items-center lg:flex-row lg:w-1/2 m-auto gap-5">
      <input
        type="text"
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={content}
        readOnly
        value={content}
      ></input>
      <button className="border-2 bg-slate-50 border-black p-3 w-32">Add</button>
    </div>
  );
}
