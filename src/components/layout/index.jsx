import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { AsideMenu } from "./AsideMenu.jsx";

import { Box, styled } from "@mui/material";
import { Stack } from "@mui/material";
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Layout = ({ children }) => {
  return (
    <Stack
      style={{
        padding: "0",
        height: "200vh",
      }}
    >
      <Header />
      <Offset />
      <Box
        display={"flex"}
        flex={1}
        >
        <AsideMenu />
        <Box flex={1} component={"main"}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};
