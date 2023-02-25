import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

interface Props {
  content: string;
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args: Props) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "To Do List",
};
