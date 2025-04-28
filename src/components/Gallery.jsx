import { Box, Grid, Stack } from "@mui/material";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

export default function Gallery() {
  return (
    <Grid container spacing={2}>
      <Grid size={3}>
        <Stack direction={"column"} gap={2}>
          <img src={gallery1} alt="gallery" />
          <img src={gallery4} alt="gallery" />
        </Stack>
      </Grid>
      <Grid size={6}>
        <Stack>
          <img src={gallery3} alt="gallery" />
        </Stack>
      </Grid>
      <Grid size={3}>
        <Stack direction={"column"} gap={2}>
          <img src={gallery2} alt="gallery" />
          <img src={gallery5} alt="gallery" />
        </Stack>
      </Grid>
    </Grid>
  );
}
