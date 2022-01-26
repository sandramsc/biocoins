

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, functions, borders, boxShadows }) => {
  const { gradients, grey } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };

  const validGradients = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ];

  const validColors = [
    "transparent",
    "white",
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "grey-100",
    "grey-200",
    "grey-300",
    "grey-400",
    "grey-500",
    "grey-600",
    "grey-700",
    "grey-800",
    "grey-900",
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "regular", "lg", "xl", "xxl", "inset"];

  return {
    suiBox: {
      opacity: ({ opacity }) => opacity,
      backgroundColor: ({ backgroundColor }) => {
        let backgroundColorValue;

        if (validColors.find((el) => el === backgroundColor)) {
          backgroundColorValue = palette[backgroundColor]
            ? palette[backgroundColor].main
            : greyColors[backgroundColor];
        } else {
          backgroundColorValue = backgroundColor;
        }

        return backgroundColorValue;
      },
      color: ({ color }) => {
        let colorValue;

        if (validColors.find((el) => el === color)) {
          colorValue = palette[color] ? palette[color].main : greyColors[color];
        } else {
          colorValue = color;
        }

        return colorValue;
      },
      borderRadius: ({ borderRadius }) => {
        let borderRadiusValue;

        if (validBorderRadius.find((el) => el === borderRadius)) {
          borderRadiusValue = radius[borderRadius];
        } else {
          borderRadiusValue = borderRadius;
        }

        return borderRadiusValue;
      },
      boxShadow: ({ boxShadow }) => {
        let boxShadowValue;

        if (validBoxShadows.find((el) => el === boxShadow)) {
          boxShadowValue = boxShadows[boxShadow];
        } else {
          boxShadowValue = boxShadows;
        }

        return boxShadowValue;
      },
    },

    suiBox_backgroundGradient: {
      backgroundImage: ({ backgroundColor }) => {
        let backgroundValue;

        if (validGradients.find((el) => el === backgroundColor)) {
          backgroundValue = linearGradient(
            gradients[backgroundColor].main,
            gradients[backgroundColor].state
          );
        } else {
          backgroundValue = "none";
        }

        return backgroundValue;
      },
    },
  };
});
