import { Meta, StoryObj } from "@storybook/react";
import GridComponent from "./GridWithCards";

const meta = {
  title: "Example/Page",
  component: GridComponent,
  parameters: {},
} satisfies Meta<typeof GridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn2: Story = {
  args: {
    items: [],
  },
};
