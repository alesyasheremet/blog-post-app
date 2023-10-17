import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MaterialCard from "./Card";
import InputText from "./InputText";
import TextArea from "./TextArea";

const meta = {
  title: "Example/Page",
  component: TextArea,
  parameters: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn3: Story = {
  args: {
    label: "Field Name:",
    value: "",
    id: "",
    name: "",
  },
};
