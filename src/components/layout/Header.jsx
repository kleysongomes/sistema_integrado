import { AppBar, Box, styled, Toolbar } from "@mui/material";
export const Header = () => {
  return (
    <Box
      component={"header"}
      display={"flex"}
      sx={
        {
          // height: "70px",
        }
      }
      justifyContent={"space-between"}
    >
      <AppBar position="fixed">
        <Toolbar>
          <h1>Sistema Integrado</h1>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
