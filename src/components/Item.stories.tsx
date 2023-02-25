import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Item from "./Item";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

interface Props {
  content: string;
  cleared: boolean;
  id: string;
  editMode: boolean;
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Item> = (args: Props) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "To Do Item",
};

export const ShortItem = Template.bind({});
ShortItem.args = {
  content: "Lorem nisi laborum proident.",
  cleared: false,
  id: "1",
  editMode: true,
};

export const LongItem = Template.bind({});
LongItem.args = {
  content: "Lorem nisi laborum proident voluptate ipsum minim sunt qui excepteur est occaecat in",
  cleared: false,
  id: "2",
};

export const ShortItemCleared = Template.bind({});
ShortItemCleared.args = {
  content: "Lorem nisi laborum proident.",
  cleared: true,
  id: "3",
};

export const LongItemCleared = Template.bind({});
LongItemCleared.args = {
  content: "Lorem nisi laborum proident voluptate ipsum minim sunt qui excepteur est occaecat in",
  cleared: true,
  id: "4",
  editMode: true,
};
