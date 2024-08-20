import { createTheme, type ThemeOptions } from "@mui/material/styles";
import type { Shadows } from "@mui/material/styles/shadows";

const defaultThemeOptions: ThemeOptions = {
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#461383",
      contrastText: "#f5f5f5",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.675rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.375rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.875rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          ".MuiAutocomplete-groupLabel": {
            backgroundColor: "#e2dbc7",
          },
          borderRadius: 4,
          overflow: "hidden",
          borderColor: "#EEE",
          borderWidth: "1px",
          borderStyle: "solid",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#EEE",
          opacity: 0.4,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
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
        root: {
          backgroundColor: "#fff",
          "&.Mui-disabled": {
            backgroundColor: "#f9f8f5",
          },
        },
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
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "sm",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
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
        // TODO: most likely this gets overriden by some styles from MUIv4
        // try removing when MUIv4 is gone
        endAdornment: {
          top: "inherit",
        },
        // TODO: remove when this gets merged https://github.com/mui/material-ui/issues/28465
        root: {
          ".MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            paddingRight: "39px",
            // or padding: theme.spacing(X) if you want to be more precise & already defined your theme
          },
        },
        paper: {
          marginTop: "2px",
          border: "1px solid #C5C3C5",
        },
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
