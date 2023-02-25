import React from "react";

interface Props {
  /**
   * Item's ID
   */
  id: string;
  /**
   * Content of the item
   */
  content: string;
  /**
   * Cleared items will have breakthrough class, else none
   */
  cleared: boolean;
  /**
   * Edit mode will show different buttons depending on the editMode boolean
   */
  editMode: boolean;
}

export default function Item({ content, cleared }: Props) {
  return <div>{cleared ? <p className="line-through">{content}</p> : <p>{content}</p>}</div>;
}
