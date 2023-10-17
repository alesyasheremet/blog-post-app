import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MaterialCard from "./Card";

const meta = {
  title: "Example/Page",
  component: MaterialCard,
  parameters: {},
} satisfies Meta<typeof MaterialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn3: Story = {
  args: {
    children: "This is the content of the Material Card.",
  },
};
