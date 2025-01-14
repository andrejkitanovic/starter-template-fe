import { type FC } from "react";
import { ManageAccounts as ManageAccountsIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router";

import { useMeStore, useUserInitals } from "components/stores/MeStore";

type UserDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UserDrawer: FC<UserDrawerProps> = ({ isOpen, onClose }) => {
  const history = useHistory();

  const handleLogout = () => {
    useMeStore.getState().reset();
    history.push("/login");
  };

  const name = useMeStore((s) => s.me?.name);
  const userInitials = useUserInitals();

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: { xs: "320px", sm: "400px" },
          p: { xs: 2, sm: 3 },
          borderRadius: 0,
        },
      }}
      variant="temporary"
      anchor="right"
      open={isOpen}
      onClose={onClose}
      data-cy="user-drawer"
    >
      <Typography variant="h4" sx={{ p: 1 }}>
        User Profile
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2, p: 1 }}>
        <Avatar
          variant="rounded"
          sx={{
            width: 67,
            height: 67,
            fontSize: Math.min(45, 65 / userInitials.length),
            bgcolor: "primary.main",
          }}
        >
          {userInitials.toUpperCase()}
        </Avatar>
        <Stack sx={{ minWidth: 0 }}>
          <Typography
            noWrap
            fontSize={20}
            fontWeight={500}
            sx={{ fontWeight: 400 }}
          >
            {name}
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "100%", mt: 0.5 }}
            onClick={handleLogout}
            data-cy="logout-button"
          >
            Logout
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ my: 3, mx: 1 }} />

      <List>
        <ListItemButton
          onClick={() => {
            history.push("/user/profile");
            onClose();
          }}
          sx={{ px: 1 }}
        >
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              sx={{
                backgroundColor: (t) => t.palette.grey[300],
                color: (t) => t.palette.primary.main,
              }}
            >
              <ManageAccountsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="My Profile" secondary="Update your profile" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default UserDrawer;
