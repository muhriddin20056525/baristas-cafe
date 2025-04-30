import { Box, Stack, Typography } from "@mui/material";
import blogImg1 from "../assets/blog-1.jpg";
import blogImg2 from "../assets/blog-2.jpg";
import blogImg3 from "../assets/blog-3.jpg";
import BlogsCard from "./BlogsCard";

const blogs = [
  {
    id: 1,
    title: "Lorem, ipsum dolor sit",
    image: blogImg1,
    date: "29 Noviembre 2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor sit",
    image: blogImg2,
    date: "29 Noviembre 2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?",
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor sit",
    image: blogImg3,
    date: "29 Noviembre 2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae! Ratione et, dolore ipsum quaerat iure illum reprehenderit non maxime amet dolor voluptas facilis corporis, consequatur eius est sunt suscipit?",
  },
];

export default function Blogs() {
  return (
    <Box p={5}>
      <Typography
        variant="h4"
        fontWeight={"600"}
        fontSize={"3rem"}
        textAlign={"center"}
      >
        Últimos Blogs
      </Typography>

      <Stack direction={"row"} gap={3} justifyContent={"center"} mt={5}>
        {blogs.map((blog) => (
          <BlogsCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            desc={blog.desc}
          />
        ))}
      </Stack>
    </Box>
  );
}
