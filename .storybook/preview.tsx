// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import {
  MantineProvider,
  useMantineColorScheme,
} from '@mantine/core';
import { withMantineThemes } from "storybook-addon-mantine";
// theme.ts file from previous step
import { theme, c3s, cams, cems } from '../src/theme';

const channel = addons.getChannel();

function ColorSchemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return (<>{children}</>);
}

export const decorators = [
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  withMantineThemes({
    themes: [
      {
        id: "ecmwf",
        name: "ECMWF Theme",
        ...theme,
      },
      {
        id: "c3s",
        name: "C3S Theme",
        ...c3s,
      },
      {
        id: "cams",
        name: "CAMS Theme",
        ...cams,
      },
      {
        id: "cems",
        name: "CEMS Theme",
        ...cems,
      }
    ],
  }),
];
