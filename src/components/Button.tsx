import React from "react";

interface Props {
  /**
   * four states are available for it. The style changes accordingly to state
   */
  buttonState: "delete" | "update" | "complete" | "cancel";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ buttonState, onClick }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`border-2 border-x-black p-3 w-24 lg:w-32 ${
          buttonState === "delete"
            ? "bg-delete-btn"
            : buttonState === "complete"
            ? "bg-complete-btn"
            : buttonState === "update"
            ? "bg-white"
            : "bg-orange-400"
        }`}
      >
        {buttonState === "delete"
          ? "Delete"
          : buttonState === "complete"
          ? "Complete"
          : buttonState === "update"
          ? "Update"
          : "Cancel"}
      </button>
    </div>
  );
}
