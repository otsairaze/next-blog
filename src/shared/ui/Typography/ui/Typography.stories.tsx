import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextAlign, TextColor, TextSize, Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "shared/Typography",
  component: Typography,
  parameters: {}
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const WithTitle: Story = {
  args: {
    title: "Title"
  }
};

export const WithText: Story = {
  args: {
    text: "Text"
  }
};

export const PrimaryText: Story = {
  args: {
    text: "Text",
    title: "Title",
    align: TextAlign.LEFT,
    size: TextSize.L,
    color: TextColor.PRIMARY
  }
};

export const ErrorText: Story = {
  args: {
    text: "Error",
    title: "Something wrong",
    align: TextAlign.LEFT,
    size: TextSize.L,
    color: TextColor.ERROR
  }
};
