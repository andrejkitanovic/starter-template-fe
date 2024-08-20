import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import SignInForm from "./SignInForm";
import SignInLayout from "./SignInLayout";

const SignInPage = () => {
  return (
    <SignInLayout>
      <Paper sx={{ borderRadius: 1, maxWidth: "420px", width: "100%", my: 4 }}>
        <Box py={2} borderBottom="1px solid rgba(172, 172, 172, 0.2);">
          <Typography textAlign="center" fontWeight="bold" variant="h4">
            {/* <FormattedMessage id="LOGIN.FORM.TITLE" /> */}
            Sign In
          </Typography>
        </Box>

        <SignInForm />
        {/* <Divider /> */}
        {/* <AlternativeLogin /> */}
      </Paper>
    </SignInLayout>
  );
};

export default SignInPage;
