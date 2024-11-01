import { useState } from "react";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, IconButton, Link } from "@mui/material";
import { Form as FormikForm, FormikProvider, useFormik } from "formik";
import { Link as RouterLink, useHistory } from "react-router-dom";
import * as yup from "yup";

import FormikTextField from "components/forms/FormikTextField";
import { useMeStore } from "components/stores/MeStore";

const LoginForm = () => {
  const history = useHistory();

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      useMeStore.getState().setMe({
        name: "John Doe",
        email: values.email,
      });
      useMeStore.getState().setToken("token");
      history.push("/dashboard");
    },
  });

  return (
    <Box pt={5} px={5} pb={3}>
      <FormikProvider value={formik}>
        <FormikForm data-cy="login-form">
          <FormikTextField
            name="email"
            sx={{ mb: 1 }}
            label="Email"
            data-cy="email-input"
          />
          <FormikTextField
            name="password"
            type={passwordVisible ? "text" : "password"}
            sx={{ mb: 1 }}
            label="Password"
            data-cy="password-input"
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setPasswordVisible((p) => !p)}>
                  {passwordVisible ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </IconButton>
              ),
            }}
          />
          <Link
            component={RouterLink}
            to={`/forgot-password`}
            fontSize={14}
            sx={{ textDecoration: "none" }}
            data-cy="forgot-password-button"
          >
            Forgot Password?
          </Link>

          <LoadingButton
            sx={{ mt: 4.5, py: 1 }}
            type="submit"
            variant="contained"
            fullWidth
            // loading={status === "loading"}
            data-cy="login-button"
          >
            Sign In
          </LoadingButton>
        </FormikForm>
      </FormikProvider>
    </Box>
  );
};

export default LoginForm;
