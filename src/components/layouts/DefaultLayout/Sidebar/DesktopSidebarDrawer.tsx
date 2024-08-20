import React, { useState, type FC } from "react";
import {
  KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRight as KeyboardDoubleArrowRightIcon,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Logo from "assets/icons/logo.png";
import { Link } from "react-router-dom";

import SidebarMenu from "./SidebarMenu/SidebarMenu";

interface DesktopSidebarDrawerProps {
  wideDrawerWidth: number;
  menuDrawerWidth: number;
  isDesktopDrawerShrinked: boolean;
  toggleDesktopDrawer: () => void;
}

const DesktopSidebarDrawer: FC<DesktopSidebarDrawerProps> = ({
  wideDrawerWidth,
  menuDrawerWidth,
  isDesktopDrawerShrinked,
  toggleDesktopDrawer,
}) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width:
            isDesktopDrawerShrinked && isMouseOver
              ? wideDrawerWidth
              : menuDrawerWidth,
          transition: "width 0.1s ease-out",
          overflow: "hidden",
          border: "none",
          borderRight: "1px solid #EEE",
        },
      }}
    >
      <Box
        sx={{ height: "100%" }}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent:
              !isDesktopDrawerShrinked || isMouseOver
                ? "space-between"
                : "center",
            alignItems: "center",
          }}
          disableGutters
        >
          {(!isDesktopDrawerShrinked || isMouseOver) && (
            <Box sx={{ pl: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                component={Link}
                to="/dashboard"
              >
                <img
                  alt="Logo"
                  style={{
                    height: 40,
                    width: 40,
                    objectFit: "contain",
                    objectPosition: "0 50%",
                  }}
                  src={Logo}
                />
              </Stack>
            </Box>
          )}

          <Box sx={{ px: 1 }}>
            <IconButton color="primary" onClick={toggleDesktopDrawer}>
              {isDesktopDrawerShrinked ? (
                <KeyboardDoubleArrowRightIcon />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
        <SidebarMenu />
      </Box>
    </Drawer>
  );
};

export default DesktopSidebarDrawer;
