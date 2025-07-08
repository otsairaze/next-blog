import { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, ButtonSize } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {}
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text"
  }
};

export const PrimaryM: Story = {
  args: {
    children: "Text",
    size: ButtonSize.M
  }
};

export const PrimaryL: Story = {
  args: {
    children: "Text",
    size: ButtonSize.L
  }
};

export const PrimaryXL: Story = {
  args: {
    children: "Text",
    size: ButtonSize.XL
  }
};
