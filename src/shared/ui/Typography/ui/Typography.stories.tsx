import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Typography, TypographyAlign, TypographyColor, TypographySize } from "./Typography";

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
    align: TypographyAlign.LEFT,
    size: TypographySize.L,
    color: TypographyColor.PRIMARY
  }
};

export const ErrorText: Story = {
  args: {
    text: "Error",
    title: "Something wrong",
    align: TypographyAlign.LEFT,
    size: TypographySize.L,
    color: TypographyColor.ERROR
  }
};
