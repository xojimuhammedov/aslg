import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import NewsImage from "../assets/news.jpg";

function News() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>Latest News & Blog</Heading>
        <SimpleGrid columns={3} mt={"36px"} gap={"24px"}>
          <Box>
            <Box {...css.top}>
              <Image {...css.image} src={NewsImage} alt="NewsImage" />
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>
                Introduce new suas boat service in this spring
              </Heading>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id
                vim rrem princi pes suas molesti interpretaris
              </Text>
            </Box>
          </Box>
          <Box>
            <Box {...css.top}>
              <Image {...css.image} src={NewsImage} alt="NewsImage" />
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>
                Guarantees varying Complexity, Long-Term
              </Heading>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id
                vim rrem princi pes suas molesti interpretaris
              </Text>
            </Box>
          </Box>
          <Box>
            <Box {...css.top}>
              <Image {...css.image} src={NewsImage} alt="NewsImage" />
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>
                We very careful handling the valuable goods
              </Heading>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id
                vim rrem princi pes suas molesti interpretaris
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  title: {
    fontSize: "55px",
    fontWeight: "700",
    lineHeight: "65px",
    color: "#1670BB",
    textAlign: "center",
  },
  top: {
    position: "relative",
    overflow: "hidden",
  },
  content: {
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.1)",
    padding: "25px 35px 25px",
  },
  name: {
    color: "#1670BB",
    marginBottom: "18px",
    fontSize: "26px",
    lineHeight:"36px"
  },
  text: {
    color: "#7c858c",
  },
  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
  },
};
