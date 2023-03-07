import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme }) => {
  const { palette, boxShadows, functions } = theme;
  const { gradients } = palette;
  const { xxl } = boxShadows;
  const { linearGradient } = functions;

  let backgroundValue = linearGradient(gradients.dark.main, gradients.dark.state);

  const drawerOpenStyles = () => ({
    background: backgroundValue,
  });
  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",

      ...(drawerOpenStyles()),
    },
  };
});
