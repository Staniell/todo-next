import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "../app/page";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/Home",
  component: Home,
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "Hello",
      description: "demo description",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" },
      },
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args: any) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
