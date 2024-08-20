import React, { useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";

// import type { UserOrgTypeRoleType } from "api/user/types";

import SidebarMenuItem, { type SidebarMenuItemsProps } from "./SidebarMenuItem";

export interface SidebarMenuDropdownProps {
  icon: JSX.Element;
  text: string | JSX.Element;
  link: string;
  list: Omit<SidebarMenuItemsProps, "icon">[];
  onClick?: () => void;
}

const SidebarMenuDropdown = ({
  icon,
  text,
  link,
  list,
  onClick,
}: SidebarMenuDropdownProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((p) => !p);
  };

  const isSelected = pathname.includes(link);

  return (
    <>
      <MenuItem
        onClick={handleClick}
        sx={{
          py: 1.3,
          pl: 0,
          mb: 0.5,
          mx: 1,
          borderRadius: 2,
          overflow: "hidden",
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
        {open ? (
          <ExpandLessIcon
            sx={{
              color: isSelected
                ? theme.palette.primary.dark
                : theme.palette.grey[500],
            }}
          />
        ) : (
          <ExpandMoreIcon
            sx={{
              color: isSelected
                ? theme.palette.primary.dark
                : theme.palette.grey[500],
            }}
          />
        )}
      </MenuItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.map(({ text, link }) => (
            <SidebarMenuItem
              key={link}
              icon={<FiberManualRecordIcon sx={{ transform: "scale(0.5)" }} />}
              text={text}
              link={link}
              onClick={onClick}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarMenuDropdown;
