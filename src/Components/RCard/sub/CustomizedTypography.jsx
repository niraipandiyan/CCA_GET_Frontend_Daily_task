import * as React from "react";
import Typography from "@mui/material/Typography";

const CustomizedTypography = (props) => (
  <Typography
    {...props}
    sx={{
      fontFamily: "'Satoshi', sans-serif", // Specify your font-family
      // You can add other styles here as needed
    }}
  />
);

export default CustomizedTypography;
