import { createTheme } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { viVN } from "./locale/viVN";

const color = red[700];

const theme = createTheme(
  {
    typography: {
      poster: {
        fontSize: "4rem",
        color: color,
        fontWeight: "bolder",
      },
    },

    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            poster: "h1",
          },
        },
      },
    },
  },
  viVN
);

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

export default theme;
