import React from "react";
import { Box, Card, CardMedia, Stack, styled, Typography } from "@mui/material";
import mocaImg from "../assets/moca-category.jpg";
import capuchinoImg from "../assets/capuchino-category.jpg";
import expresoImg from "../assets/expreso-category.jpg";

const categoriesData = [
  { id: "1", image: mocaImg, title: "Café moca", desc: "Ver más" },
  { id: "2", image: expresoImg, title: "Expreso Americano", desc: "Ver más" },
  { id: "3", image: capuchinoImg, title: "Capuchino", desc: "Ver más" },
];

const CategoriesCard = styled(Box)({
  width: "40rem",
  height: "20rem",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
});

export default function Categories() {
  return (
    <Box padding={"2rem 0"}>
      <Typography variant="h3" fontWeight={600} textAlign={"center"}>
        Mejores Categorías
      </Typography>

      <Stack direction={"row"} justifyContent={"center"} gap={3} mt={3}>
        {categoriesData.map((category) => (
          <CategoriesCard
            key={category.id}
            sx={{
              background: `url(${category.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // yarim shaffof qora
                zIndex: 1,
              }}
            />
            <Box sx={{ zIndex: 2, textAlign: "center" }}>
              <Typography variant="h3" sx={{ color: "white" }} gutterBottom>
                {category.title}
              </Typography>
              <Box
                sx={{
                  width: "5rem",
                  height: "0.2rem",
                  background: "white",
                  position: "absolute",
                  left: "50%",
                  translate: "-50%",
                }}
              />
              <Typography variant="h4" sx={{ color: "white" }} mt={3}>
                {category.desc}
              </Typography>
            </Box>
          </CategoriesCard>
        ))}
      </Stack>
    </Box>
  );
}
