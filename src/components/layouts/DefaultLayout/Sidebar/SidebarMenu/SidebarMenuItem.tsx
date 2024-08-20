import React from "react";
import {
  alpha,
  ListItemIcon,
  ListItemText,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export interface SidebarMenuItemsProps {
  icon: JSX.Element;
  text: string | JSX.Element;
  link: string;
  onClick?: () => void;
}

const SidebarMenuItem = ({
  icon,
  text,
  link,
  onClick,
}: SidebarMenuItemsProps) => {
  const theme = useTheme();
  const history = useHistory();
  const { pathname } = useLocation();

  const isSelected = pathname.includes(link);

  return (
    <MenuItem
      onClick={() => {
        history.push(link);
        onClick && onClick();
      }}
      sx={{
        py: 1.5,
        pl: 0,
        mb: 0.5,
        mx: 1,
        borderRadius: 2,
        overflow: "hidden",
        "&.Mui-selected": {
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
        },
        "&.Mui-selected:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
        },
      }}
      selected={isSelected}
    >
      <ListItemIcon
        sx={{
          width: 48,
          justifyContent: "center",
          color: isSelected
            ? theme.palette.primary.dark
            : theme.palette.grey[500],
          "& svg g [fill]": {
            fill: isSelected
              ? theme.palette.primary.dark
              : theme.palette.grey[500],
          },
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        sx={{
          color: isSelected
            ? theme.palette.primary.dark
            : theme.palette.grey[800],
        }}
      >
        {text}
      </ListItemText>
    </MenuItem>
  );
};

export default SidebarMenuItem;
