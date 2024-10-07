import { createTheme, mergeThemeOverrides, ActionIcon, Accordion } from '@mantine/core';

export const theme = createTheme({
  colors: {
    "brand-primary": [
      "#ebf7ff",
      "#d6ecfa",
      "#a6d7f7",
      "#75c2f6",
      "#53aff5",
      "#42a4f5",
      "#389ef6",
      "#2d8adb",
      "#207bc4",
      "#006EAD"
    ],
  },
  components: {
    ActionIcon: ActionIcon.extend({
      vars: (theme, props) => {
        return {
          root: {
            "--ai-color": 'white',
            "--ai-radius": props.radius || '50px',
            "--ai-bg": props.color || theme.colors["brand-primary"][9],
            "--ai-hover": props.color || theme.colors["brand-primary"][7],
          }
        };
      },
    }),
    Accordion: Accordion.extend({
      vars: (theme, props) => {
        return {
          label: {
            "color": props.color || theme.colors["brand-primary"][9],
            "fontWeight": "bold",
          },
        };
      },
    }),
  },
  fontFamily: "Lato, Open Sans, sans-serif",
});

const c3sCols = createTheme({
  colors: {
    "brand-primary": [
      "#fdedf1",
      "#f5d7de",
      "#edaaba",
      "#e67b95",
      "#e05475",
      "#de3e61",
      "#dd3256",
      "#c42647",
      "#b01f3f",
      "#941333",
    ]
  },
})

const camsCols = createTheme({
  colors: {
    "brand-primary": [
      "#91f8ff",
      "#8bf1fa",
      "#84ebf4",
      "#7ee4ef",
      "#77deea",
      "#70d8e5",
      "#6ad2df",
      "#63cbda",
      "#5cc5d5",
      "#55bfd0",
    ]
  },
})

const cemsCols = createTheme({
  colors: {
    "brand-primary": [
      '#fff5e0',
      '#ffecce',
      '#ffe3bc',
      '#ffdbab',
      '#ffd299',
      '#ffc988',
      '#ffc176',
      '#ffb864',
      '#fdb052',
      '#faa73e',
    ]
  },
})

export const cams = mergeThemeOverrides(theme, camsCols);
export const c3s = mergeThemeOverrides(theme, c3sCols);
export const cems = mergeThemeOverrides(theme, cemsCols);