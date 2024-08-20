import React, { type FC } from "react";
import { Box, useMediaQuery, type Theme } from "@mui/material";

import DesktopSidebarDrawer from "./DesktopSidebarDrawer";
import MobileSidebarDrawer from "./MobileSidebarDrawer";

type SidebarProps = {
  isMobileDrawerOpen: boolean;
  toggleMobileDrawer: () => void;
  isDesktopDrawerShrinked: boolean;
  toggleDesktopDrawer: () => void;
};

const Sidebar: FC<SidebarProps> = ({
  isMobileDrawerOpen,
  toggleMobileDrawer,
  isDesktopDrawerShrinked,
  toggleDesktopDrawer,
}) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  const wideDrawerWidth = 225;
  const narrowDrawerWidth = 64;

  const menuDrawerWidth = isDesktopDrawerShrinked
    ? narrowDrawerWidth
    : wideDrawerWidth;

  return (
    <Box
      component="nav"
      sx={{ width: { md: menuDrawerWidth }, flexShrink: { md: 0 } }}
      data-cy="navigation"
    >
      {isMobile && (
        <MobileSidebarDrawer
          wideDrawerWidth={wideDrawerWidth}
          isMobileDrawerOpen={isMobileDrawerOpen}
          toggleMobileDrawer={toggleMobileDrawer}
        />
      )}

      {!isMobile && (
        <DesktopSidebarDrawer
          wideDrawerWidth={wideDrawerWidth}
          menuDrawerWidth={menuDrawerWidth}
          isDesktopDrawerShrinked={isDesktopDrawerShrinked}
          toggleDesktopDrawer={toggleDesktopDrawer}
        />
      )}
    </Box>
  );
};

export default Sidebar;
