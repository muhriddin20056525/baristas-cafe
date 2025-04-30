import { Box, Button, Typography, useTheme } from "@mui/material";

export default function BlogsCard({ image, title, date, desc }) {
  const theme = useTheme();
  return (
    <Box component={"div"} sx={{ width: "40rem" }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "20rem",
          objectFit: "cover",
          borderRadius: "3rem",
        }}
      />
      <Typography
        variant="h4"
        sx={{ cursor: "pointer", margin: "1rem 0", fontWeight: "600" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.primary.main} gutterBottom>
        {date}
      </Typography>
      <Typography variant="body1" fontSize={"1.5rem"} sx={{ color: "gray" }}>
        {desc}
      </Typography>
      <Button
        variant="contained"
        sx={{
          padding: "0.5rem 3rem",
          fontSize: "1.5rem",
          borderRadius: "2rem",
          color: "white",
          fontWeight: 400,
          marginTop: "1rem",
        }}
      >
        Leer más
      </Button>
    </Box>
  );
}
