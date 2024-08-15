import { Meta, StoryFn } from "@storybook/react";
import { Share } from "./Share";

const meta: Meta<typeof Share> = {
  component: Share,
  title: "ecmwf-projects-ui/Share",
  argTypes: {
    link: {
      control: {type: "text"},
    },
    facebook: {
      control: {type: "boolean"},
    },
    linkedin: {
      control: {type: "boolean"},
    },
    x: {
      control: {type: "boolean"},
    },
    group: {
      control: {type: "boolean"},
    },
  },
};
export default meta;

const Template: StoryFn<typeof Share> = (args) => <Share {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  link: "https://example.com",
  facebook: true,
  group: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  link: "https://example.com",
  facebook: true,
  linkedin: true,
  x: true,
  group: false,
};

export const Group = Template.bind({});
Group.args = {
  link: "https://example.com",
  facebook: true,
  linkedin: true,
  x: true,
  group: true,
};