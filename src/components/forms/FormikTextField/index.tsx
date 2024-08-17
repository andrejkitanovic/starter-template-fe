import React from "react";
import { TextField, type TextFieldProps } from "@mui/material";
import { useField } from "formik";

import FieldErrorFeedbackFormatter from "components/forms/FieldErrorFeedbackFormatter";
import type { MakeRequired } from "utils/types";

type Props = MakeRequired<TextFieldProps, "name">;

const FormikTextField = ({ name, helperText, ...rest }: Props) => {
  const [field, meta] = useField<unknown>(name);

  let helperTextValue;
  if (helperText !== false) {
    helperTextValue =
      meta.touched && meta.error ? (
        <FieldErrorFeedbackFormatter error={meta.error} />
      ) : (
        helperText
      );
  }

  return (
    <TextField
      fullWidth
      error={meta.touched && !!meta.error}
      helperText={helperTextValue}
      {...field}
      {...rest}
    />
  );
};

export default FormikTextField;
