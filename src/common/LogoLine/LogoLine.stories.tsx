import { StoryObj, Meta } from "@storybook/react";
import LogoLine from "./LogoLine";
import { EULogo, CopernicusLogo, ECMWFLogo, C3SLogo,  } from "@/ui/Logo";

export default {
  title: "ecmwf-projects-ui/LogoLine",
  component: LogoLine,
} as Meta<typeof LogoLine>;


type Story = StoryObj<typeof LogoLine>;

export const C3S: Story = () => (
  <LogoLine>
    <EULogo />
    <CopernicusLogo />
    <ECMWFLogo />
    <C3SLogo />
  </LogoLine>
);