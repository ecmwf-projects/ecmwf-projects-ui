import { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "ecmwf-projects-ui/Logo",
  argTypes: {
    organisation: {
      options: ["c3s", "copernicus", "ecmwf", "eu"],
      control: {type: "select"},
    },
    negative: {
      options: [true, false],
      control: {type: "boolean"},
    },
  },
};
export default meta;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  organisation: "c3s",
};

export const Negative = Template.bind({});
Negative.args = {
  organisation: "c3s",
  negative: true,
};

export const ECMWF = Template.bind({});
ECMWF.args = {
  organisation: "ecmwf",
};