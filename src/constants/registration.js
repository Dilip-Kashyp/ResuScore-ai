import { ColorPalette } from "@/styles/color";

export const REGISTRATION_FORM_CONFIG = {
  REGISTRATION_HEADER: {
    typographyProps: {
      children: "Create Account",
      variant: "h5",
      sx: {
        color: ColorPalette.secondary,
        fontWeight: 600,
      },
    },
  },
  EMAIL_INPUT: {
    inputProps: {
      label: "Email",
      required: true,
      type: "email",
      name: "email",
    },
  },
  PASSWORD_INPUT: {
    inputProps: {
      name: "password",
      label: "Password",
      required: true,
      type: "password",
    },
  },
  NAME_INPUT: {
    inputProps: {
      label: "First Last Name",
      required: true,
      name: "name",
      type: "text",
    },
  },
  BUTTON: {
    buttonProps: {
      children: "Create Account",
      variant: "contained",
      size: "large",
      type: "submit",
      sx: {
        backgroundColor: ColorPalette.secondary,
        color: ColorPalette.primary,
      },
    },
  },

  LOGIN_LINK: {
    buttonProps: {
      children: "Login",
      variant: "text",
      size: "small",
      sx: {
        color: ColorPalette.bluePrimary,
      },
    },
  },
  ALREADY_HAVE_ACCOUNT: {
    typographyProps: {
      children: "Already have an account?",
      variant: "body3",
      align: "center",
    },
  },
  NOTIFICATIONS_MESSAGES: {
    SUCCESS: { message: "Account created successfully" },
  },
};
