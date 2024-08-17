import { createTheme, type ThemeOptions } from "@mui/material/styles";
import type { Shadows } from "@mui/material/styles/shadows";

const defaultThemeOptions: ThemeOptions = {
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#000",
      contrastText: "#ffffff",
    },
    success: {
      main: "#34C759",
    },
    warning: {
      main: "#FF8F5D",
    },
    error: {
      main: "#E43232",
    },
    background: {
      default: undefined,
    },
  },
  typography: {
    allVariants: {
      color: undefined,
    },
    fontFamily:
      '"Inter", "Roboto", "Raleway", "Helvetica", "Arial", sans-serif',
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
      color: "#9A9EAD",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          // ".MuiAutocomplete-groupLabel": {
          //   backgroundColor: "#e2dbc7",
          // },
          // borderRadius: 4,
          // overflow: "hidden",
          // borderColor: "#EEE",
          // borderWidth: "1px",
          // borderStyle: "solid",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          backgroundColor: "transparent",
          borderColor: "#EBEDEF",
          opacity: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
        },
      },
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
          borderRadius: "10px!important",
          backgroundColor: "#fff",
          "&.Mui-disabled": {
            backgroundColor: "#f9f8f5",
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small",
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
      styleOverrides: {
        thumb: {
          color: "#000",
        },
        track: {
          backgroundColor: "#ebedef",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
        },
      },
      defaultProps: {
        fullWidth: true,
        maxWidth: "xs",
      },
    },
    // MuiTooltip: {
    //   defaultProps: {
    //     arrow: true,
    //     // followCursor: true,
    //   },
    //   styleOverrides: {
    //     arrow: {
    //       color: "#333546",
    //     },
    //     tooltip: {
    //       padding: 0,
    //       maxWidth: "fit-content",
    //       backgroundColor: "#333546",
    //       border: "1px solid #535662",
    //     },
    //   },
    // },
    MuiList: {
      defaultProps: {
        dense: false,
      },
    },
    // MuiModal: {
    //   defaultProps: {},
    //   styleOverrides: {
    //     root: {
    //       ".MuiPaper-root": {
    //         backgroundColor: "#1b1c28",
    //         backgroundImage: "none",
    //         border: "1px solid #454a5d",
    //       },
    //     },
    //   },
    // },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: "2px",
          borderRadius: "10px",
          border: "1px solid #C5C3C5",
          backgroundColor: "#FFFFFF",
        },
        list: {
          ".MuiMenuItem-root": {
            color: "#000",
          },
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          // backgroundColor: "#EBEDEF",
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8F8F8",
          borderRadius: "10px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        // TODO: remove when this gets merged https://github.com/mui/material-ui/issues/28465
        root: {
          ".MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            paddingRight: "39px",
            // or padding: theme.spacing(X) if you want to be more precise & already defined your theme
          },
        },
        paper: {
          marginTop: "2px",
          borderRadius: "10px",
          border: "1px solid #C5C3C5",
          backgroundColor: "#FFFFFF",
        },
        listbox: {
          // padding: "",
        },
        option: {
          // paddingTop: "11px !important",
          // paddingBottom: "11px !important",
          // "&.Mui-focused": {
          //   backgroundColor: "#fff !important",
          // },
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
  themeOptions.palette.background.default = "#1B1C28";
  themeOptions.typography.allVariants.color = "#ffffff";

  return themeOptions;
};

const lightThemeOptions: () => ThemeOptions = () => {
  const themeOptions: any = {
    ...defaultThemeOptions,
  };

  themeOptions.palette.mode = "light";
  themeOptions.palette.background.default = "#ffffff";
  themeOptions.typography.allVariants.color = "#000000";

  return themeOptions;
};

export const darkTheme = createTheme(darkThemeOptions());
export const lightTheme = createTheme(lightThemeOptions());
