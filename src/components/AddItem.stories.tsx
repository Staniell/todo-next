import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import AddItem from "./AddItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/AddItem",
  component: AddItem,
  decorators: [(story) => <div className="p-5">{story()}</div>],
} as ComponentMeta<typeof AddItem>;

interface Props {
  content: string;
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddItem> = (args: Props) => <AddItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "",
};

export const WithValue = Template.bind({});
WithValue.args = {
  content: "Enim esse aute nostrud deserunt aute dolore consequat eiusmod nulla est commodo sunt proident.",
};

WithValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  const addButton = await canvas.getByTestId("addContent");

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  // await userEvent.click(canvas.getByRole("button"));

  // 👇 Assert DOM structure
  await expect(addButton).toBeInTheDocument();
};
