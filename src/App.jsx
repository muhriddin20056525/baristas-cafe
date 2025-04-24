import React from "react";
import Header from "./components/Header";
import Promo from "./components/Promo";
import Services from "./components/Services";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Promo />
      <Box sx={{ bgcolor: theme.palette.custom.bgColor }}>
        <Services />
      </Box>
    </>
  );
}
