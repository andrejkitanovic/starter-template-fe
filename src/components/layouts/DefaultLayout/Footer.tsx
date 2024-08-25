import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import Logo from "assets/icons/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      component="footer"
      alignItems="center"
      sx={{
        minHeight: { xs: "auto", md: 46 },
        px: { xs: 1, md: 3 },
        py: { xs: 2, md: 0 },
      }}
      justifyContent="space-between"
      data-cy="footer"
      direction={{ xs: "column", md: "row" }}
      spacing={2}
    >
      <Stack direction="row" alignItems="center">
        <img
          alt="Logo"
          style={{
            height: 25,
            width: 25,
            objectFit: "contain",
            objectPosition: "0 50%",
          }}
          src={Logo}
        />
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={{ xs: 0.5, md: 2 }}
      >
        <Link
          component={RouterLink}
          to={`/support`}
          sx={{ textDecoration: "none" }}
        >
          Support
        </Link>
        <Link
          component={RouterLink}
          to={`/privacy-policy`}
          sx={{ textDecoration: "none" }}
        >
          Privacy Policy
        </Link>
        <Typography sx={{ color: (t) => t.palette.grey[500] }}>
          {new Date().getFullYear()} &copy;
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
