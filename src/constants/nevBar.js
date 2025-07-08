export const NAVBAR_CONFIG = {
  NAV_BAR_TITLE: (title) => ({
    buttonProps: {
      children: title,
      variant: "h6",
      color: "inherit",
      sx: {
        cursor: "pointer",
        fontSize: "1rem",
      },
      onClick: () => router.push("/"),
    },
  }),
};

export const NAVBAR_STACK_CONFIG = {
  sx: {
    fontSize: { xs: "0.9rem", sm: "1rem" },
    width: { xs: "100%", sm: "auto" },
    padding: { xs: "5px 10px", sm: "5px 20px" },
    color: "#ffffff",
    borderRadius: "50px",
    textTransform: "none",
    fontWeight: 500,
    letterSpacing: "0.5px",

    "&:hover": {
      backgroundColor: "#3384FF",
      transform: "translateY(-2px)",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  },
};
