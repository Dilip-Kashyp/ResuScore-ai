import { useRouter } from "next/router";
import { Toolbar, Box } from "@mui/material";
import { Button, Stack } from "@/components";
import { LOGIN_URL, MENU_ITEMS, NAVBAR_STACK_CONFIG } from "@/constants";
import { clearAllCookie, isUserAuthenticated, useNotification } from "@/helper";
import { ColorPalette } from "@/styles/color";

function NavBar() {
  const router = useRouter();
  const { showNotification } = useNotification();
  const isLoggedIn = isUserAuthenticated();

  function logoutUser() {
    clearAllCookie();
    showNotification({ message: "Logout successfully" });
    router.push(LOGIN_URL);
  }

  return (
    <Stack
      stackProps={{
        backgroundColor: ColorPalette.secondary,
        width: { xs: "100%", sm: "50%" },
        margin: "auto",
        marginTop: "20px",
        borderRadius: "50px",
        padding: "0px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "auto",
            gap: {xs : 0, sm : 2},
          }}
        >
          {MENU_ITEMS(isLoggedIn).map((item) => {
            const isActive = router.pathname === item.path;

            return (
              <Button
                key={item.id}
                buttonProps={{
                  children: item.label,
                  sx: {
                    color: isActive ? ColorPalette.primary : ColorPalette.textPrimary,
                    backgroundColor: isActive ? ColorPalette.buttonPrimary : "transparent",
                    fontWeight: isActive ? "bold" : "normal",
                    borderRadius: "30px",
                    paddingX: "20px",
                    textTransform: "none",
                    ...NAVBAR_STACK_CONFIG?.sx, // merge existing styles
                  },
                }}
                onClick={() => {
                  if (item.id === "auth" && isLoggedIn) {
                    logoutUser();
                  } else {
                    router.push(item.path);
                  }
                }}
              />
            );
          })}
        </Box>
      </Toolbar>
    </Stack>
  );
}

export default NavBar;
