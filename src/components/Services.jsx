import { useTheme } from "@emotion/react";
import {
  CreditCard,
  Discount,
  HeadsetMic,
  LocalAirport,
} from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function Services() {
  const theme = useTheme();

  const services = [
    {
      icon: (
        <LocalAirport
          sx={{ color: theme.palette.primary.main, width: 30, height: 30 }}
        />
      ),
      title: "Envío gratuito a nivel mundial",
      desc: "En pedido superior a $150",
    },
    {
      icon: (
        <CreditCard
          sx={{ color: theme.palette.primary.main, width: 30, height: 30 }}
        />
      ),
      title: "Contrareembolso",
      desc: "100% garantía de devolución de dinero",
    },
    {
      icon: (
        <Discount
          sx={{ color: theme.palette.primary.main, width: 30, height: 30 }}
        />
      ),
      title: "Tarjeta regalo especial",
      desc: "Ofrece bonos especiales con regalo",
    },
    {
      icon: (
        <HeadsetMic
          sx={{ color: theme.palette.primary.main, width: 30, height: 30 }}
        />
      ),
      title: "Servicio al cliente 24/7",
      desc: "Llámenos 24/7 al 123-456-7890",
    },
  ];

  return (
    <Box paddingTop={5} paddingBottom={5}>
      <Container>
        <Stack direction={"row"} gap={3}>
          {services.map((service) => (
            <Paper
              key={service.title}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 1.5rem",
                gap: 2,
              }}
            >
              {service.icon}
              <Stack direction={"column"}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.desc}</Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
