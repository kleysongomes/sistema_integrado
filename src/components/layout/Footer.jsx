import { Box } from "@mui/material"

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "70px",
        backgroundColor: "primary.main",
      }}
      component={"footer"}
    >
      <p>Dev Teste</p>
    </Box>
  );
}