import {
  HeadsetMic,
  LocalCafe,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Container,
  Box,
  useTheme,
  Stack,
  Typography,
  styled,
  TextField,
  Button,
} from "@mui/material";

const HeaderLink = styled("div")(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.custom.darkColor,
  fontWeight: 600,
}));

export default function Header() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ bgcolor: theme.palette.custom.bgColor, padding: "1rem 0" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} gap={2}>
            <HeadsetMic sx={{ width: 40, height: 40 }} />
            <Stack direction={"column"}>
              <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                Soporte al cliente
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                123-456-7890
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <LocalCafe sx={{ width: 40, height: 40 }} />
            <Typography variant="body1" sx={{ fontSize: "4rem" }}>
              Baristas
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Person
              sx={{
                width: 40,
                height: 40,
                color: theme.palette.primary.main,
              }}
            />
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <ShoppingCart
                sx={{
                  width: 40,
                  height: 40,
                  color: theme.palette.primary.main,
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Carrito
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  0
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ bgcolor: theme.palette.primary.main, padding: "2rem 0" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} gap={2}>
            <HeaderLink href="#">Inicio</HeaderLink>
            <HeaderLink href="#">Moca Helado</HeaderLink>
            <HeaderLink href="#">Expreso</HeaderLink>
            <HeaderLink href="#">Capuchino</HeaderLink>
            <HeaderLink href="#">Más</HeaderLink>
            <HeaderLink href="#">Blog</HeaderLink>
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              background: "white",
              width: "fit-content",
              borderRadius: "2rem",
              overflow: "hidden",
              border: "2px solid white",
            }}
          >
            <TextField
              sx={{
                width: "30rem",
                background: "inherit",
                "& .MuiInputBase-input": {
                  height: "1rem", // input balandligi
                  fontSize: "2rem", // matn o‘lchami
                  border: "none",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <Button variant="contained">
              <Search
                sx={{ width: 25, height: 25, color: "white", fontWeight: 600 }}
              />
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
