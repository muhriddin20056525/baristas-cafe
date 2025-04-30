import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import cafe1 from "../assets/cafe-irish.jpg";
import cafe2 from "../assets/cafe-ingles.jpg";
import cafe3 from "../assets/cafe-viena.jpg";
import cafe4 from "../assets/cafe-liqueurs.jpg";

export default function Especiales() {
  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight={"600"}
        fontSize={"3rem"}
        textAlign={"center"}
      >
        Especiales
      </Typography>

      <Stack direction={"row"} gap={2} justifyContent={"center"} mt={5}>
        <ProductCard
          img={cafe1}
          title={"Cafe Irish"}
          price={"$4.60"}
          oldPrice={"$5.30"}
          discount={"-13%"}
        />
        <ProductCard
          img={cafe2}
          title={"Cafe Irish"}
          price={"$4.60"}
          oldPrice={"$5.30"}
          discount={"-13%"}
        />
        <ProductCard
          img={cafe3}
          title={"Cafe Viena"}
          price={"$3.85"}
          oldPrice={"$5.50"}
          discount={"-30%"}
        />
        <ProductCard
          img={cafe4}
          title={"Cafe Liqueurs"}
          price={"$5.60"}
          oldPrice={""}
          discount={"-13%"}
        />
      </Stack>
    </Box>
  );
}
