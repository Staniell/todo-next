import React from "react";

interface Props {
  content: string;
}

export default function Header({ content }: Props) {
  return (
    <div className="text-center w-1/2 m-auto bg-white border-[3px] rounded-md border-delete-btn text-2xl font-bold">
      {content}
    </div>
  );
}
