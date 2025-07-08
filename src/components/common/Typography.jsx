import { forwardRef } from "react";
import { Typography as MUITypography } from "@mui/material";

const Typography = forwardRef(function Typography({ typographyProps }, ref) {
  return <MUITypography ref={ref} {...typographyProps} />;
});

export default Typography;
