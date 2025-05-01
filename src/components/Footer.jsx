import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import PaymentImg from "../assets/payment.png";

const FooterHeading = styled(Typography)({
  fontSize: "2rem",
  color: "#111",
  marginBottom: "1rem",
  fontWeight: 600,
});

const FooterLink = styled(Link)({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: 400,
  marginBottom: "0.7rem",
  display: "block",
});

const IconBox = styled(Box)({
  width: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
});

function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.primary.main, padding: "3rem 0" }}>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <Box>
            <FooterHeading>Información de Contacto</FooterHeading>
            <FooterLink>
              Dirección: 71 Pennington Lane <br /> Vernon Rockville, CT 06066
            </FooterLink>
            <FooterLink>Teléfono: 123-456-7890</FooterLink>
            <FooterLink>Fax: 55555300</FooterLink>
            <FooterLink>EmaiL: baristas@support.com</FooterLink>
            <Stack direction={"row"} alignItems={"center"} gap={2} mt={2}>
              <IconBox sx={{ background: "#3B5998" }}>
                <Facebook sx={{ fontSize: "2rem", color: "white" }} />
              </IconBox>
              <IconBox sx={{ background: "#00ACEE" }}>
                <Twitter sx={{ fontSize: "2rem", color: "white" }} />
              </IconBox>
              <IconBox sx={{ background: "#C4302B" }}>
                <YouTube sx={{ fontSize: "2rem", color: "white" }} />
              </IconBox>
              <IconBox sx={{ background: "#C8232C" }}>
                <Pinterest sx={{ fontSize: "2rem", color: "white" }} />
              </IconBox>
              <IconBox sx={{ background: "#9B39A2" }}>
                <Instagram sx={{ fontSize: "2rem", color: "white" }} />
              </IconBox>
            </Stack>
          </Box>
          <Box>
            <FooterHeading>Información</FooterHeading>
            <FooterLink>Acerca de Nosotros</FooterLink>
            <FooterLink>Información Delivery</FooterLink>
            <FooterLink>Politicas de Privacidad</FooterLink>
            <FooterLink>Términos y condiciones</FooterLink>
            <FooterLink>Contactános</FooterLink>
          </Box>

          <Box>
            <FooterHeading>Mi cuenta</FooterHeading>
            <FooterLink>Mi cuenta</FooterLink>
            <FooterLink>Historial de ordenes</FooterLink>
            <FooterLink>Lista de deseos</FooterLink>
            <FooterLink>Boletín</FooterLink>
            <FooterLink>Reembolsos</FooterLink>
          </Box>

          <Box>
            <FooterHeading>Boletín informativo</FooterHeading>
            <FooterLink>
              Suscríbete a nuestros boletines ahora y <br /> mantente al día con
              nuevas colecciones y <br /> ofertas exclusivas.
            </FooterLink>
            <FooterLink>Ingresa el correo aquí...</FooterLink>

            <Button
              variant="contained"
              sx={{
                fontSize: "1.5rem",
                color: "white",
                fontWeight: "600",
                background: "black",
                borderRadius: "2rem",
                padding: "0.7rem 2rem",
                marginTop: "2rem",
              }}
            >
              Suscríbete
            </Button>
          </Box>
        </Stack>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background: "#fff",
            opacity: "0.2",
            margin: "2rem 0",
          }}
        />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            color="#111"
            fontWeight={500}
          >
            Desarrollado por Programación para el mundo © 2022
          </Typography>

          <img src={PaymentImg} alt="payment img" />
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
