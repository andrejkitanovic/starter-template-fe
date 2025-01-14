import type { FC } from "react";
import {
  Dashboard as DashboardIcon,
  DataArray,
  FormatListBulleted,
  TableRows,
} from "@mui/icons-material";
import { Box, Divider, MenuList, Typography } from "@mui/material";

// import { FormattedMessage } from "react-intl";

// import type { UserOrgTypeRoleType } from "api/user/types";
// import { hasPermissions, hasRole } from "components/stores/UserStore";
// import type { PermissionsType } from "components/stores/UserStore/permissions";

import SidebarMenuDropdown from "./SidebarMenuDropdown";
import SidebarMenuItem, { type SidebarMenuItemsProps } from "./SidebarMenuItem";

export type SidebarMenuListChild = (SidebarMenuItemsProps & {
  //   requiredPermissions?: PermissionsType[];
  //   requiredRole?: UserOrgTypeRoleType[];
  dropdown?: Omit<SidebarMenuItemsProps, "icon">[];
})[];

type SidebarMenuList = {
  id: string;
  text: string | JSX.Element;
  list: SidebarMenuListChild;
}[];

const sidebarMenuListOperational: SidebarMenuListChild = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <DataArray />,
    text: "Data Grid",
    link: "/data-grid",
  },
  {
    icon: <TableRows />,
    text: "Table",
    link: "/table",
  },
  {
    icon: <FormatListBulleted />,
    text: "Form",
    link: "/form",
  },
];

const sidebarMenuList: SidebarMenuList = [
  {
    id: "operational",
    text: "Operational",
    list: sidebarMenuListOperational,
  },
];

interface SidebarMenuProps {
  onClose?: () => void;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ onClose }) => {
  return (
    <MenuList
      sx={{
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "calc(100% - 45px)",
        pt: 0,
        msOverflowStyle: "none",

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {sidebarMenuList.map(({ id, list, text }) => {
        // const filteredList = list.filter(
        //   ({ requiredRole, requiredPermissions }) =>
        //     hasPermissions(requiredPermissions) && hasRole(requiredRole),
        // );

        if (!list.length) {
          return null;
        }

        return (
          <Box key={id}>
            <Typography
              variant="body2"
              sx={{
                ml: 1,
                my: 1.5,
                width: "80%",
                overflowX: "hidden",
                textOverflow: "ellipsis",
                fontWeight: (t) => t.typography.fontWeightBold,
              }}
            >
              {text}
            </Typography>
            {list.map(({ icon, text, link, dropdown }) => {
              if (dropdown) {
                return (
                  <SidebarMenuDropdown
                    key={link}
                    icon={icon}
                    text={text}
                    link={link}
                    list={dropdown}
                    onClick={onClose}
                  />
                );
              }

              return (
                <SidebarMenuItem
                  key={link}
                  icon={icon}
                  text={text}
                  link={link}
                  onClick={onClose}
                />
              );
            })}
            <Divider sx={{ mx: 1 }} />
          </Box>
        );
      })}
    </MenuList>
  );
};

export default SidebarMenu;
