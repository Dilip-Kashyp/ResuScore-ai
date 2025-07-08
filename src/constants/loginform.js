import { ColorPalette } from "@/styles/color";

export const LOGIN_FORM_CONFIG = {
  LOGIN_HEADER: {
    typographyProps: {
      children: "Login",
      variant: "h5",
      sx : {
        color: ColorPalette.secondary,
        fontWeight: 600,
      }
    },
  },
  FORGOT_PASSWORD: {
    buttonProps: {
      children: "Forgot Password?",
      variant: "text",
      size: "small",
      sx: {
        color: ColorPalette.secondary,
      },
    },
  },

  CREATE_ACCOUNT_TEXT: {
    typographyProps: {
      children: "No account?",
      variant: "body3",
      align: "center",
    },
  },
  SIGNUP: {
    buttonProps: {
      children: "Create Account",
      variant: "text",
      size: "small",
      sx: {
        color: ColorPalette.bluePrimary,
      },
    },
  },

  EMAIL_INPUT: {
    inputProps: {
      label: "Email",
      required: true,
      name: "email",
      type: "email",
    },
  },
  PASSWORD_INPUT: {
    inputProps: {
      label: "Password",
      required: true,
      name: "password",
      type: "password",
    },
  },
  BUTTON: {
    buttonProps: {
      children: "Login",
      variant: "contained",
      type: "submit",
      size: "large",
      sx: {
        backgroundColor: ColorPalette.secondary,
        color: ColorPalette.primary,
      },
    },
  },
  NOTIFICATIONS_MESSAGES: {
    SUCCESS: { message: "Login successfully" },
    ERROR: { message: "Login Failed, try again!" },
    SEARCH_ERROR: { message: "Please enter a search term" },
  },
};
