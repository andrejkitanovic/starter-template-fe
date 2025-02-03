import React, { type FC } from "react";
import { Box, Typography, type TypographyProps } from "@mui/material";

interface TextFormatterProps extends TypographyProps {
  value: string;
}

const TextFormatter: FC<TextFormatterProps> = ({ value, ...rest }) => {
  return (
    <Box>
      <Typography
        {...rest}
        sx={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          ...(rest.sx ?? {}),
        }}
        // pr={2}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default TextFormatter;
