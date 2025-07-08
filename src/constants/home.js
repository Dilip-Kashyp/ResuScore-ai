export const HOME_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h4",
      children: "",
      sx: {
        textAlign: "center",
        fontWeight: 700,
        color: "#333",
        width: { sm: "70%", xs: "100%" },
        margin: "0 auto",
        fontSize: {
          xs: "2rem",
          sm: "3rem",
        },
      },
    },
  },
  SUB_HEADER_CONFIG: {
    typographyProps: {
      variant: "h4",
      children:
        "Craft winning resumes & cover letters with AI that understands the job you want.",
      sx: {
        textAlign: "center",
        color: "gray",
        fontSize: "1rem",
      },
    },
  },
  SUB_HEADER_COUNT: {
    typographyProps: {
      variant: "body1",
      children: "350+ users ",
      sx: {
        textAlign: "center",
        color: "gray",
        fontSize: "1rem",
      },
    },
  },

  NOTIFICATIONS_MESSAGES: {
    SUCCESS: { message: "Scholarships fetched successfully" },
    ERROR: { message: "No scholarships found" },
    SEARCH_ERROR: { message: "Please enter a search term" },
  },
};

export const FEATURE_PAGE_CONFIG = {
  HEADER_CONFIG: {
    typographyProps: {
      variant: "h4",
      children: "Explore our core features",
      sx: {
        textAlign: "center",
        fontWeight: 500,
        color: "#333",
        fontSize: {
          xs: "2rem",
          sm: "3rem",
        },
      },
    },
  },

  FEATURES: [
    {
      title: "AI-Powered Search",
      description:
        "Get personalized scholarship recommendations using advanced AI.",
    },
    {
      title: "Wide Range of Options",
      description:
        "Explore scholarships from local, government, and state institutions.",
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive interface for seamless navigation.",
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive interface for seamless navigation.",
    },
  ],
};

export const FEATURE_CARD_CONFIG = {
  TITLE_CONFIG: (title) => {
    return {
      typographyProps: {
        children: title,
        variant: "h5",
        sx: {
          fontWeight: 500,
        },
      },
    };
  },

  DESCRIPTION_CONFIG: (description) => {
    return {
      typographyProps: {
        children: description,
        variant: "body1",
        sx: {
          fontWeight: 600,
        },
      },
    };
  },
};
