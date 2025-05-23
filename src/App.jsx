import React from "react";
import Header from "./components/Header";
import Promo from "./components/Promo";
import Services from "./components/Services";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Especiales from "./components/Especiales";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export default function App() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Promo />
      <Box sx={{ bgcolor: theme.palette.custom.bgColor }}>
        <Services />
        <Categories />
        <Products />
        <Gallery />
        <Especiales />
        <Blogs />
      </Box>
      <Footer />
    </>
  );
}
