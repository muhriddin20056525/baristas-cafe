import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import cafe1 from "../assets/cafe-irish.jpg";
import cafe2 from "../assets/cafe-ingles.jpg";
import cafe3 from "../assets/cafe-australiano.jpg";
import cafe4 from "../assets/cafe-helado.jpg";

import ProductCard from "./ProductCard";

const ProdcutFilterButton = styled(Button)(({ theme }) => ({
  color: "#111",
  fontWeight: 500,
  fontSize: "1.3rem",
  borderRadius: "3rem",
  padding: "1rem 3rem",
  background: "white",
  boxShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  "&:hover": {
    background: theme.palette.primary.main,
    color: "white",
  },
}));

export default function Products() {
  return (
    <Box paddingBlock={"3rem"}>
      <Typography variant="h3" fontWeight={600} textAlign={"center"}>
        Mejores Productos
      </Typography>

      <Stack direction={"row"} justifyContent={"center"} gap={2} mt={3}>
        <ProdcutFilterButton>Destacados</ProdcutFilterButton>
        <ProdcutFilterButton>Más recientes</ProdcutFilterButton>
        <ProdcutFilterButton>Mejores Vendidos</ProdcutFilterButton>
      </Stack>

      <Stack
        direction={"row"}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        mt={4}
      >
        <ProductCard
          img={cafe1}
          title={"Cafe Irish"}
          price={"$4.60"}
          oldPrice={"$5.30"}
          discount={"-13%"}
        />
        <ProductCard
          img={cafe2}
          title={"Cafe Inglés"}
          price={"$5.70"}
          oldPrice={"$7.30"}
          discount={"-22%"}
        />
        <ProductCard
          img={cafe3}
          title={"Cafe Australiano"}
          price={"$3.20"}
          oldPrice={""}
          discount={"-13%"}
        />
        <ProductCard
          img={cafe4}
          title={"Cafe Helado"}
          price={"$5.60"}
          oldPrice={""}
          discount={"-13%"}
        />
      </Stack>
    </Box>
  );
}
