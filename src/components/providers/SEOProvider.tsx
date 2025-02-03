import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { Helmet } from "react-helmet";

const SEO = () => {
  const theme = useTheme();

  const title = useMemo(() => {
    if (import.meta.env.MODE === "development") {
      return "[DEV] Starter Template";
    }

    return "Starter Template";
  }, []);

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: "",
        },
        {
          name: "theme-color",
          content: theme.palette.primary.main,
        },
      ]}
    />
  );
};

export default SEO;
