"use client";

import React from "react";
import Item from "./Item";
import Button from "./Button";
import { useState } from "react";

interface Item {
  content: string;
  id: string;
  cleared: boolean;
  editMode: boolean;
}

interface Props {
  /**
   * Content of the Item
   */
  itemLists: Item[];
}

export default function ItemContainer({ itemLists }: Props) {
  const [items, setItems] = useState(itemLists);

  function removeItem(id: string) {
    setItems((items) => items.filter((x) => x.id !== id));
  }

  function completeItem(id: string) {
    var index = items.findIndex((x) => x.id === id);

    let g = items[index];
    g["cleared"] = !g["cleared"];
    if (index === -1) {
      // handle error
      console.log("no match");
    } else setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
  }

  return (
    <div className="my-3">
      {items.map((item) => {
        return (
          <div className="flex lg:w-1/2 m-auto bg-item-bg border-2 border-black justify-center items-center">
            {item.editMode ? (
              <div key={item.id} className="flex items-center flex-grow">
                <div className="pl-3">
                  <Item id={item.id} cleared={item.cleared} content={item.content} editMode={item.editMode} />
                </div>
                <div className="flex flex-col lg:flex-row flex-grow gap-2 p-3 items-end justify-end">
                  <Button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                    buttonState="delete"
                  />{" "}
                  <Button
                    onClick={() => {
                      completeItem(item.id);
                    }}
                    buttonState="complete"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center flex-grow">
                <div className="pl-3">
                  <input
                    type="text"
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder={item.content}
                  ></input>
                </div>
                <div className="flex flex-col lg:flex-row flex-grow p-3 gap-2 items-end justify-end">
                  <Button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                    buttonState="cancel"
                  />{" "}
                  <Button
                    onClick={() => {
                      removeItem(item.id);
                    }}
                    buttonState="update"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
