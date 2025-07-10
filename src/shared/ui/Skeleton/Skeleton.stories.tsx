import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {}
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200
  }
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100
  }
};
