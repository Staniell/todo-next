import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ItemContainer from "./ItemContainer";
import * as ItemStories from "./Item.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/ItemContainer",
  component: ItemContainer,
} as ComponentMeta<typeof ItemContainer>;

interface Item {
  content: string;
  id: string;
  cleared: boolean;
  editMode: boolean;
}

interface Props {
  itemLists: Item[];
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ItemContainer> = (args: Props) => <ItemContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemLists: [
    { content: ItemStories.Default.args?.content!, id: "5", cleared: true, editMode: false },
    { content: ItemStories.ShortItem.args?.content!, id: "6", cleared: false, editMode: false },
    { content: ItemStories.LongItem.args?.content!, id: "7", cleared: true, editMode: true },
    { content: ItemStories.LongItem.args?.content!, id: "8", cleared: false, editMode: true },
    { content: ItemStories.ShortItem.args?.content!, id: "9", cleared: false, editMode: true },
    { content: ItemStories.ShortItem.args?.content!, id: "10", cleared: true, editMode: true },
  ],
};
