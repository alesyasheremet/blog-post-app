import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Example/Page",
  component: Card,
  parameters: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Display: Story = {
  args: {
    title: "Header",
    content: "text"
  },
};
