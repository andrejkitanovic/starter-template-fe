import { createTheme, type ThemeOptions } from "@mui/material/styles";
import type { Shadows } from "@mui/material/styles/shadows";

declare module "@mui/material/styles" {
  // @ts-ignore
  interface PaletteColorOptions {
    primary?: string;
    secondary?: string;
    inverse?: string;
    disabled?: string;
  }

  interface Palette {
    brand: PaletteColorOptions;
    brandSuccess: PaletteColorOptions;
    brandDanger: PaletteColorOptions;
    brandWarning: PaletteColorOptions;
    brandBackground: PaletteColorOptions;
    brandText: PaletteColorOptions;
    brandBorder: PaletteColorOptions;
  }

  interface PaletteOptions {
    brand: PaletteColorOptions;
    brandSuccess: PaletteColorOptions;
    brandDanger: PaletteColorOptions;
    brandWarning: PaletteColorOptions;
    brandBackground: PaletteColorOptions;
    brandText: PaletteColorOptions;
    brandBorder: PaletteColorOptions;
  }

  interface TypographyVariants {
    headingXL: React.CSSProperties;
    headingLG: React.CSSProperties;
    headingMD: React.CSSProperties;
    headingSM: React.CSSProperties;
    headingXS: React.CSSProperties;
    labelMD: React.CSSProperties;
    labelSM: React.CSSProperties;
    labelXS: React.CSSProperties;
    textMD: React.CSSProperties;
    textSM: React.CSSProperties;
    textXS: React.CSSProperties;
    textXXS: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    headingXL?: React.CSSProperties;
    headingLG?: React.CSSProperties;
    headingMD?: React.CSSProperties;
    headingSM?: React.CSSProperties;
    headingXS?: React.CSSProperties;
    labelMD?: React.CSSProperties;
    labelSM?: React.CSSProperties;
    labelXS?: React.CSSProperties;
    textMD?: React.CSSProperties;
    textSM?: React.CSSProperties;
    textXS?: React.CSSProperties;
    textXXS?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headingXL: true;
    headingLG: true;
    headingMD: true;
    headingSM: true;
    headingXS: true;
    labelMD: true;
    labelSM: true;
    labelXS: true;
    textMD: true;
    textSM: true;
    textXS: true;
    textXXS: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    brand: true;
    brandDanger: true;
  }
}

const defaultThemeOptions: ThemeOptions = {
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    // @ts-ignore
    primary: { main: "#015864" },
    brand: { primary: "#015864", secondary: "#2B737D" },
    brandSuccess: { primary: "#00D47E", secondary: "#EDF9F4" },
    brandDanger: { primary: "#FD3F39", secondary: "#FEE9E8" },
    brandWarning: { primary: "#D49400", secondary: "#F9F3ED" },
    brandBackground: {
      primary: "#ffffff",
      secondary: "#F5F7F9",
      disabled: "#eef1ee",
      inverse: "#1c1c1c",
    },
    brandText: {
      primary: "#1c1c1c",
      secondary: "#5C7187",
      disabled: "#76797F",
      inverse: "#ffffff",
    },
    brandBorder: {
      primary: "#DEE5EF",
      inverse: "#18191B",
      disabled: "#DADADA",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
    headingXL: {
      fontSize: 40,
      fontWeight: 600,
    },
    headingLG: {
      fontSize: 32,
      fontWeight: 600,
    },
    headingMD: {
      fontSize: 28,
      fontWeight: 600,
    },
    headingSM: {
      fontSize: 24,
      fontWeight: 600,
    },
    headingXS: {
      fontSize: 20,
      fontWeight: 600,
    },
    labelMD: {
      fontSize: 16,
      fontWeight: 500,
    },
    labelSM: {
      fontSize: 14,
      fontWeight: 500,
    },
    labelXS: {
      fontSize: 12,
      fontWeight: 500,
    },
    textMD: {
      fontSize: 16,
      fontWeight: 400,
    },
    textSM: {
      fontSize: 14,
      fontWeight: 400,
    },
    textXS: {
      fontSize: 12,
      fontWeight: 400,
    },
    textXXS: {
      fontSize: 10,
      fontWeight: 400,
    },
    allVariants: {
      color: "#1C1C1C",
    },
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.brandText.primary,
          fontWeight: 500,
          borderRadius: 10,
          padding: "18px 14px",
          minWidth: 40,

          "&.Mui-selected": {
            backgroundColor: theme.palette.brand.primary,
            color: theme.palette.brandText.inverse,

            "&:hover": {
              backgroundColor: theme.palette.brand.primary,
              color: theme.palette.brandText.inverse,
            },
          },
        }),
        previousNext: ({ theme }) => ({
          border: "none",

          "& .MuiTypography-root": {
            color: theme.palette.brandText.primary,
            fontSize: 14,
            fontWeight: 500,
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          overflow: "hidden",
          borderColor: theme.palette.brandBorder.primary,
          borderWidth: "1px",
          borderStyle: "solid",
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 1,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.brand.primary,
          borderRadius: 8,
          textTransform: "none",
        }),
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: "small",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
      styleOverrides: {
        input: ({ theme }) => ({
          fontSize: 14,
          lineHeight: 1,
          color: theme.palette.brandText.primary,

          "&::placeholder": {
            color: theme.palette.brandText.secondary,
            opacity: 1,
            "-webkit-text-fill-color": theme.palette.brandText.secondary,
          },
        }),
        root: {
          backgroundColor: "#fff",

          "&.Mui-disabled": {
            opacity: 0.7,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 6,

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.brand.primary,
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.brandBorder.primary,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.brandDanger.primary,
          },
        }),

        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.brandBorder.primary,
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "xs",
      },
    },
    MuiTooltip: {
      defaultProps: {
        // arrow: true,
      },
      styleOverrides: {
        tooltip: ({ theme }) => ({
          borderRadius: 3,
          backgroundColor: theme.palette.brandBackground.primary,
          color: theme.palette.brandText.secondary,
          boxShadow:
            "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)",
        }),
      },
    },
    MuiList: {
      defaultProps: {
        dense: false,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }) => ({
          marginTop: "2px",
          borderRadius: 6,
          border: `1px solid ${theme.palette.brandBorder.primary}`,
        }),
        listbox: {
          paddingTop: "8px",
          paddingBottom: "8px",
        },
        noOptions: ({ theme }) => ({
          paddingTop: "8px",
          paddingBottom: "8px",
          fontSize: 14,
          color: theme.palette.brandText.secondary,
        }),
        loading: ({ theme }) => ({
          paddingTop: "8px",
          paddingBottom: "8px",
          fontSize: 14,
          color: theme.palette.brandText.secondary,
        }),
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};

const darkThemeOptions: () => ThemeOptions = () => {
  const themeOptions: any = {
    ...defaultThemeOptions,
  };

  themeOptions.palette.mode = "dark";

  return themeOptions;
};

const lightThemeOptions: () => ThemeOptions = () => {
  const themeOptions: any = {
    ...defaultThemeOptions,
  };

  themeOptions.palette.mode = "light";

  return themeOptions;
};

export const darkTheme = createTheme(darkThemeOptions());
export const lightTheme = createTheme(lightThemeOptions());
