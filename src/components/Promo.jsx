import { Box, Button, Typography, useTheme } from "@mui/material";
import bannerImage from "../assets/banner.jpg";

export default function Promo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "calc(100vh - 160px)",
        position: "relative",
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
      <Box
        sx={{ position: "absolute", bottom: "20rem", left: "30rem", zIndex: 2 }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.5rem", color: theme.palette.primary.main }}
        >
          Café Delicioso
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: 600, margin: "1rem 0" }}
        >
          100% Natural <br /> Café Fresco
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "white", borderRadius: "2rem", boxShadow: "none" }}
        >
          Comprar ahora
        </Button>
      </Box>
    </Box>
  );
}
