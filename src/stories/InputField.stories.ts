import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MaterialCard from "./Card";
import InputField from "./InputField";

const meta = {
  title: "Example/Page",
  component: InputField,
  parameters: {},
} satisfies Meta<typeof InputField>;

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
