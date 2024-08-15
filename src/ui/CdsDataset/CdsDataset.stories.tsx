import { Meta, StoryFn } from "@storybook/react";
import { CdsDataset } from "./CdsDataset";

const meta: Meta<typeof CdsDataset> = {
  component: CdsDataset,
  title: "ECMWF-APPS-UI/CdsDataset",
  argTypes: {
    dataset: {
      control: {type: "text"},
    },
  },
};
export default meta;

const Template: StoryFn<typeof CdsDataset> = (args) => <CdsDataset {...args} />;

export const ERA5Monthly = Template.bind({});
ERA5Monthly.args = {
  dataset: "reanalysis-era5-single-levels-monthly-means",
};
