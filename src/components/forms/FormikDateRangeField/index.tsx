import { useMemo, useState } from "react";
import { Box, TextField, type TextFieldProps } from "@mui/material";
import type { DateRange } from "@mui/x-date-pickers-pro";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { PickersShortcutsItem } from "@mui/x-date-pickers/PickersShortcuts";
import dayjs, { type Dayjs } from "dayjs";
import { useField } from "formik";

import { useOuterClick } from "utils/hooks/useOuterClick";
import type { MakeRequired } from "utils/types";

import FieldErrorFeedbackFormatter from "../FieldErrorFeedbackFormatter";

const shortcutsItems: PickersShortcutsItem<DateRange<Dayjs>>[] = [
  {
    label: "Today",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("day"), today.endOf("day")];
    },
  },
  {
    label: "Yesterday",
    getValue: () => {
      const yesterday = dayjs().subtract(1, "day");
      return [yesterday.startOf("day"), yesterday.endOf("day")];
    },
  },
  {
    label: "This Week",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "Last Week",
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, "day");
      return [prevWeek.startOf("week"), prevWeek.endOf("week")];
    },
  },
  {
    label: "This Month",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "Last Month",
    getValue: () => {
      const today = dayjs();
      const previousMonth = today.subtract(1, "month");
      return [previousMonth.startOf("month"), previousMonth.endOf("month")];
    },
  },
];

type Props = MakeRequired<TextFieldProps, "name">;

const FormikDateRangeField = ({ name, helperText, ...rest }: Props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [field, meta, helpers] = useField<[Date, Date] | [Date]>(name);
  const innerRef = useOuterClick(() => setShowPicker(false));

  let helperTextValue;
  if (helperText !== false) {
    helperTextValue =
      meta.touched && meta.error ? (
        <FieldErrorFeedbackFormatter error={meta.error} />
      ) : (
        helperText
      );
  }

  const value = useMemo(() => {
    if (field.value?.[1]) {
      return `${dayjs(field.value?.[0]).format("DD MMM YYYY")} - ${dayjs(
        field.value?.[1],
      ).format("DD MMM YYYY")}`;
    }

    return `${dayjs(field.value?.[0]).format("DD MMM YYYY")}`;
  }, [field.value]);

  return (
    <Box position="relative" ref={innerRef}>
      <TextField
        fullWidth
        error={meta.touched && !!meta.error}
        helperText={helperTextValue}
        // InputLabelProps={{ shrink: true }}
        onClick={() => setShowPicker(true)}
        {...field}
        {...rest}
        value={value}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          slotProps={{
            shortcuts: {
              items: shortcutsItems,
            },
            actionBar: { actions: [] },
          }}
          calendars={1}
          onChange={(date) => {
            if (date) {
              if (date[0] && date[1]) {
                helpers.setValue([date[0].toDate(), date[1].toDate()]);
              } else if (date[0]) {
                helpers.setValue([date[0].toDate()]);
              }
            }
          }}
          sx={{
            position: "absolute",
            display: showPicker ? "grid" : "none",
            backgroundColor: (t) => t.palette.background.default,
            borderRadius: "12px",
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
            ".MuiPickersLayout-shortcuts": {
              gridArea: "1 / 1 / 3 / auto",
            },
            ".MuiPickersLayout-toolbar": {
              borderLeft: "2px solid #454A5E",
              borderBottom: "2px solid #454A5E",
            },
            ".MuiDateRangeCalendar-monthContainer": {
              borderLeft: "2px solid #454A5E",
            },
            ".MuiChip-root": {
              background: "none",
            },
            ".MuiListItem-dense": {
              borderBottom: "2px solid #454A5E",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default FormikDateRangeField;
