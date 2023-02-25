import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToDoList/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

interface Props {
  buttonState: "delete" | "update" | "complete" | "cancel";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: Props) => <Button {...args} />;

export const Add = Template.bind({});
Add.args = {
  buttonState: "complete",
};

export const Delete = Template.bind({});
Delete.args = {
  buttonState: "delete",
};

export const Update = Template.bind({});
Update.args = {
  buttonState: "update",
};

export const Cancel = Template.bind({});
Cancel.args = {
  buttonState: "cancel",
};
