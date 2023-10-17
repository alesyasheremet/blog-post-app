import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PagingComponent } from "./PagingComponent";
import BlogPostSubmitForm from "./BlogPostSubmitForm";

const meta = {
  title: "Example/Page",
  component: BlogPostSubmitForm,
  parameters: {},
} satisfies Meta<typeof BlogPostSubmitForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn2: Story = {
  args: {
    onSubmit: (formData) => {
      console.log("Form data submitted:", formData);
    },
  },
};
