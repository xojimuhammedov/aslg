import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Instagram from "../assets/Instagram";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Our Delivery Team")}</Heading>
        <SimpleGrid columns={3} gap={"24px"} mt={"36px"}>
          <Box className="blog-item" {...css.box}>
            <Box {...css.top}>
              <Image src="https://themejunction.net/html/logiland/demo/assets/images/team/team-2.jpg" />
              <Box className="blog-social" {...css.social}>
                <Flex {...css.bottom}>
                  <Instagram />
                  <Instagram />
                  <Instagram />
                  <Instagram />
                </Flex>
              </Box>
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>David Cooper</Heading>
              <Text {...css.text}> Consultant</Text>
            </Box>
          </Box>
          <Box className="blog-item" {...css.box}>
            <Box {...css.top}>
              <Image src="https://themejunction.net/html/logiland/demo/assets/images/team/team-2.jpg" />
              <Box className="blog-social" {...css.social}>
                <Flex {...css.bottom}>
                  <Instagram />
                  <Instagram />
                  <Instagram />
                  <Instagram />
                </Flex>
              </Box>
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>David Cooper</Heading>
              <Text {...css.text}> Consultant</Text>
            </Box>
          </Box>
          <Box className="blog-item" {...css.box}>
            <Box {...css.top}>
              <Image src="https://themejunction.net/html/logiland/demo/assets/images/team/team-2.jpg" />
              <Box className="blog-social" {...css.social}>
                <Flex {...css.bottom}>
                  <Instagram />
                  <Instagram />
                  <Instagram />
                  <Instagram />
                </Flex>
              </Box>
            </Box>
            <Box {...css.content}>
              <Heading {...css.name}>David Cooper</Heading>
              <Text {...css.text}> Consultant</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Blog;

const css = {
  title: {
    fontSize: "55px",
    fontWeight: "700",
    lineHeight: "65px",
    color: "#062E39",
    textAlign: "center",
  },
  box: {
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  top: {
    position: "relative",
    overflow: "hidden",
  },
  social: {
    width: "75px",
    height: "100%",
    backgroundColor: "#062E39",
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0,
    transition: "0.5s",
  },
  bottom: {
    padding: "15px 0",
    borderRadius: "4px",
    width: "55px",
    position: "relative",
    left: "-20px",
    flexDirection: "column",
    backgroundColor: "#fd5523",
    gap: "24px",
    alignItems: "center",
    top: "25%",
  },
  content: {
    padding: "30px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 45px 0px rgba(0, 0, 0, 0.1)",
  },
  name: {
    textAlign: "center",
    color: "#062e39",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "700",
  },
  text: {
    color: "#7c858c",
    textAlign: "center",
  },
};
