// import React, { Fragment, useState } from "react";
import { useState, type FC } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  LinearProgress,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { useIsFetching } from "@tanstack/react-query";

import { useMeStore, useUserInitals } from "components/stores/MeStore";

import UserDrawer from "./UserDrawer/UserDrawer";

interface TopbarProps {
  toggleMobileDrawer: () => void;
  showBreadcrumbs: boolean;
}

const Topbar: FC<TopbarProps> = ({ toggleMobileDrawer }) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md"),
  );
  const isFetching = useIsFetching();

  //   const { breadcrumbs } = useBreadcrumbStore((s) => ({
  //     breadcrumbs: s.breadcrumbs,
  //   }));

  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState<boolean>(false);
  const toggleUserDrawer = () => setIsUserDrawerOpen((prev) => !prev);

  const name = useMeStore((s) => s.me?.name);
  const userInitials = useUserInitals();

  return (
    <AppBar
      color="inherit"
      position={isMobile ? "fixed" : "sticky"}
      elevation={0}
      sx={{
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        mt: -0.5,
        borderRadius: 0,
      }}
    >
      <Toolbar disableGutters>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1, mt: 1 }}
            onClick={toggleMobileDrawer}
          >
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
        )}
        <Box
          sx={{
            mt: 1,
            ml: isMobile ? 1 : 3,
            mr: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* {showBreadcrumbs &&
              breadcrumbs.map((breadcrumb, i, arr) => {
                return (
                  <Fragment key={i}>
                    <Link
                      to={breadcrumb.pathname}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          color: (theme) => theme.palette.primary.dark,
                          ":hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                      >
                        {breadcrumb.translationId ? (
                          <FormattedMessage id={breadcrumb.translationId} />
                        ) : (
                          breadcrumb.title
                        )}
                      </Typography>
                    </Link>
                    {i < arr.length - 1 && (
                      <Typography
                        sx={{
                          mx: 0.5,
                          color: (theme) => theme.palette.grey[600],
                        }}
                        // variant="subtitle1"
                        component="span"
                      >
                        &#8226;
                      </Typography>
                    )}
                  </Fragment>
                );
              })} */}
          </Box>

          <Stack direction="row" alignItems="center">
            {/* {!isMobile && <LanguageSwitcher />} */}
            <Box>
              <Button
                sx={{
                  boxShaodw: "none",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  color: (theme) => theme.palette.grey[800],
                  ":hover": {
                    backgroundColor: (theme) => theme.palette.grey[200],
                  },
                }}
                onClick={toggleUserDrawer}
                data-cy="user-drawer-button"
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  {!isMobile && (
                    <Typography fontWeight={500} fontSize={16}>
                      {name}
                    </Typography>
                  )}
                  <Avatar
                    sx={{
                      backgroundColor: "primary.main",
                      fontSize: Math.min(35, 40 / userInitials.length),
                    }}
                    variant="rounded"
                  >
                    {userInitials.toUpperCase()}
                  </Avatar>
                </Stack>
              </Button>
              <UserDrawer
                isOpen={isUserDrawerOpen}
                onClose={toggleUserDrawer}
              />
            </Box>
          </Stack>
        </Box>
      </Toolbar>
      {isFetching ? <LinearProgress color="primary" /> : <Box height="4px" />}
    </AppBar>
  );
};

export default Topbar;
