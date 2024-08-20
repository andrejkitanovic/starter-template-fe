import React from "react";
import { Paper, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";

import FormikAutocomplete from "components/forms/FormikAutocomplete";
import FormikAutocompleteMultiple from "components/forms/FormikAutocompleteMultiple";
import FormikCheckbox from "components/forms/FormikCheckbox";
import FormikDatePicker from "components/forms/FormikDatePicker";
import FormikDateTimePicker from "components/forms/FormikDateTimePicker";
import FormikNumberField from "components/forms/FormikNumberField";
import FormikTextField from "components/forms/FormikTextField";
import FormikTimePicker from "components/forms/FormikTimePicker";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      textField: "",
      numberField: null,
      autcomplete: null,
      autcompleteMultiple: [],
      date: null,
      dateTime: null,
      time: null,
      checkbox: false,
    },
    onSubmit: () => {},
  });

  return (
    <Stack
      component={Paper}
      className="scrollbar-hidden"
      flexDirection="column"
      overflow="scroll"
      maxHeight="100%"
      flex={1}
      p={2}
    >
      <FormikProvider value={formik}>
        <Form>
          <FormikTextField name="textField" label="Text Field" />
          <FormikNumberField name="numberField" label="Number Field" />
          <FormikAutocomplete
            name="autcomplete"
            label="Autocomplete"
            options={[
              { label: "Option 1", value: "option-1" },
              { label: "Option 2", value: "option-2" },
            ]}
          />
          <FormikAutocompleteMultiple
            name="autcompleteMultiple"
            label="Autocomplete Multiple"
            options={[
              { label: "Option 1", value: "option-1" },
              { label: "Option 2", value: "option-2" },
            ]}
          />
          <FormikDatePicker name="date" label="Date" />
          <FormikDateTimePicker name="dateTime" label="Date Time" />
          <FormikTimePicker name="time" label="Time" />

          <FormikCheckbox name="checkbox" label="Checkbox" />
        </Form>
      </FormikProvider>
    </Stack>
  );
};

export default FormPage;
