import React, { useState } from "react";
import { Box, useMediaQuery, type Theme } from "@mui/material";

import ScrollTopProvider from "components/providers/ScrollTopProvider";
import type { WithChildren } from "utils/types";

import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar";

interface DefaultLayoutProps {
  showBreadcrumbs: boolean;
}

const DefaultLayout = ({
  showBreadcrumbs,
  children,
}: WithChildren<DefaultLayoutProps>) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );

  const [isDesktopDrawerShrinked, setIsDesktopDrawerShrinked] =
    useState<boolean>(false);
  const toggleDesktopDrawer = () => setIsDesktopDrawerShrinked((prev) => !prev);

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const toggleMobileDrawer = () => setIsMobileDrawerOpen((prev) => !prev);

  return (
    <ScrollTopProvider>
      <Box
        display="grid"
        gridTemplateAreas="
        'sidebar topbar' 
        'sidebar content'
      "
        gridTemplateColumns="min-content 1fr"
        gridTemplateRows="min-content 1fr"
        height="100vh"
        width="100vw"
      >
        <Box gridArea="sidebar">
          <Sidebar
            isMobileDrawerOpen={isMobileDrawerOpen}
            toggleMobileDrawer={toggleMobileDrawer}
            isDesktopDrawerShrinked={isDesktopDrawerShrinked}
            toggleDesktopDrawer={toggleDesktopDrawer}
          />
        </Box>

        <Box gridArea="topbar">
          <Topbar
            showBreadcrumbs={showBreadcrumbs}
            toggleMobileDrawer={toggleMobileDrawer}
          />
        </Box>

        <Box
          gridArea="content"
          minHeight="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          flex={1}
          sx={{
            overflow: "auto",
            paddingTop: isMobile ? "64px" : 0,
          }}
          className="content"
        >
          {/* Place for Alert */}
          {/* <Alert
            onClose={() => {}}
            severity="error"
            sx={{ borderRadius: 0, overflow: "visible", alignItems: "center" }}
          >
            Poštovani, vaša pretplata ističe <b>1. Januara 2023.</b> molimo Vas
            produžite pretplatu
          </Alert> */}
          <Box
            component="main"
            height="100%"
            flex={1}
            overflow="scroll"
            className="scrollbar-hidden"
            sx={{
              position: "relative",
              flexGrow: 1,
              p: isMobile ? 2 : 3,
              py: isMobile ? 4 : 2,
              bgcolor: "background.default",
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
    </ScrollTopProvider>
  );
};

export default DefaultLayout;
