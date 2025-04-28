import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faStar,
  faBasketShopping,
  faHeart,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Paper, Stack, styled, Typography, useTheme } from "@mui/material";

const ProductCardBox = styled(Paper)(({ theme }) => ({
  width: "30rem",
  padding: "1rem",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    "& .hover-icon-box": {
      right: "2rem",
      transition: "all 0.4s",
    },
  },
}));

const IconBox = styled(Box)({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "0.2rem solid #c7a17a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    background: "#c7a17a",
    "& svg": {
      color: "#fff",
    },
  },
});

export default function ProductCard({ img, title, price, oldPrice, discount }) {
  const theme = useTheme();
  return (
    <ProductCardBox>
      <img src={img} alt="img" />
      <Typography
        sx={{
          padding: "0.5rem 2rem",
          background: "#c7a17a",
          width: "fit-content",
          color: "white",
          borderRadius: "1rem",
          position: "absolute",
          top: "2rem",
          left: "2rem",
          fontWeight: "bold",
        }}
      >
        {discount}
      </Typography>

      <Stack
        direction={"column"}
        position={"absolute"}
        top={"2rem"}
        right={"-4rem"}
        gap={2}
        className="hover-icon-box"
      >
        <IconBox>
          <FontAwesomeIcon icon={faEye} fontSize={"1.5rem"} color="#c7a17a" />
        </IconBox>
        <IconBox>
          <FontAwesomeIcon icon={faHeart} fontSize={"1.5rem"} color="#c7a17a" />
        </IconBox>
        <IconBox>
          <FontAwesomeIcon
            icon={faCodeCompare}
            fontSize={"1.5rem"}
            color="#c7a17a"
          />
        </IconBox>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        fontSize={"1.5rem"}
        mb={2}
      >
        <FontAwesomeIcon icon={faStar} color="#c7a17a" />
        <FontAwesomeIcon icon={faStar} color="#c7a17a" />
        <FontAwesomeIcon icon={faStar} color="#c7a17a" />
        <FontAwesomeIcon icon={faStar} color="#c7a17a" />
        <FontAwesomeIcon
          icon={faStar}
          color="white"
          style={{
            stroke: "#c7a17a",
            strokeWidth: "6rem",
          }}
        />
      </Stack>

      <Typography
        variant="h5"
        fontSize={"1.6rem"}
        fontWeight={600}
        textAlign={"center"}
        sx={{
          "&:hover": { color: theme.palette.primary.main },
          cursor: "pointer",
        }}
      >
        {title}
      </Typography>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          sx={{
            borderRadius: "50%",
            border: "0.2rem solid #c7a17a",
            padding: "1rem",
            "&:hover": {
              background: "#c7a17a",
              "& svg": {
                color: "#fff",
              },
            },
          }}
        >
          <FontAwesomeIcon icon={faBasketShopping} size="2x" color="#c7a17a" />
        </Box>
        <Typography variant="h5" fontSize={"1.5rem"} fontWeight={"600"}>
          {price}
          <span
            style={{
              fontWeight: 400,
              color: "gray",
              textDecoration: "line-through",
            }}
          >
            {oldPrice}
          </span>
        </Typography>
      </Stack>
    </ProductCardBox>
  );
}
