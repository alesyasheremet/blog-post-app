import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Paginate } from "./Paginate";

const meta = {
  title: "Example/Page",
  component: Paginate,
  parameters: {},
} satisfies Meta<typeof Paginate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn2: Story = {
  args: {
    pageCount: 10, // Replace with your actual page count
    onPageChange: (selectedItem: { selected: number }) => {
      console.log(`Selected page: ${selectedItem.selected + 1}`);
    },
  },
};
