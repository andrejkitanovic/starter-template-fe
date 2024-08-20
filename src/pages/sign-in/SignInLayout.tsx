import type { FC } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Logo from "assets/icons/logo.png";

import type { WithChildren } from "utils/types";

const SignInLayout: FC<WithChildren> = ({ children }) => {
  return (
    <Grid
      minHeight="100vh"
      container
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        bgcolor: "background.default",
      }}
    >
      <Grid
        item
        lg={4}
        xs={12}
        order={{ lg: 1, xs: 2 }}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          bgcolor: "primary.main",
        }}
      >
        <Stack
          direction="column"
          py={5}
          maxWidth="340px"
          height="100%"
          justifyContent="center"
          mx="auto"
        >
          <Box mb={4}>
            <img
              alt="Logo"
              style={{
                height: 80,
                width: 80,
                objectFit: "contain",
                objectPosition: "0 50%",
              }}
              src={Logo}
            />
          </Box>
          <Typography color="#fff" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          {/* <LoginLanguageSwitcher /> */}
        </Stack>
      </Grid>
      <Grid item lg={8} xs={12} order={{ lg: 2, xs: 1 }}>
        <Stack
          direction="column"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SignInLayout;
