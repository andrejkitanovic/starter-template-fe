import * as React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@mui/material/styles";
import type { GridCellParams } from "@mui/x-data-grid";
import clsx from "clsx";

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        border: `1px solid ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        borderRadius: 2,
      },
      value: {
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      },
      bar: {
        height: "100%",
        "&.low": {
          backgroundColor: "#f44336",
        },
        "&.medium": {
          backgroundColor: "#efbb5aa3",
        },
        "&.high": {
          backgroundColor: "#088208a3",
        },
      },
    }),
  { defaultTheme },
);

interface ProgressBarProps {
  value: number;
}

const ProgressBar = React.memo(function ProgressBar(props: ProgressBarProps) {
  const { value } = props;
  const valueInPercent = value * 100;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.value}
      >{`${valueInPercent.toLocaleString()} %`}</div>
      <div
        className={clsx(classes.bar, {
          low: valueInPercent < 30,
          medium: valueInPercent >= 30 && valueInPercent <= 70,
          high: valueInPercent > 70,
        })}
        style={{ maxWidth: `${valueInPercent}%` }}
      />
    </div>
  );
});

export function renderProgress(params: GridCellParams) {
  return <ProgressBar value={Number(params.value)} />;
}
