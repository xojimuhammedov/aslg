import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AsideBanner from "../assets/aside.jpg";
import WhiteImage from "../assets/white.png";
import { useTranslation } from "react-i18next";

function Aside() {
  const { t } = useTranslation();
  return (
    <Box {...css.aside}>
      <Box {...css.banner}></Box>
      <Box p={"100px 0"} className="container">
        <Flex align={"center"} justify={"space-between"}>
          <Box {...css.content}>
            <Heading {...css.title}>
              {t(
                "Свяжитесь с нами, и мы предложим лучшее решение для вашего бизнеса!"
              )}
            </Heading>
            <Text {...css.text}>
              {t(
                "Asilbek Sultanbek Logistics Group — ваш ключ к успешной логистике."
              )}
            </Text>
          </Box>
          <Button {...css.link} variant="primary" size="lg">
            Send Message
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Aside;

const css = {
  aside: {
    background: "#062e39",
    backgroundSize: "27.5% 100%",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${WhiteImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      zIndex: "2",
    },
  },
  banner: {
    backgroundImage: `url(${AsideBanner})`,
    position: "absolute",
    top: 0,
    left: 0,
    width: "25%",
    backgroundSize: "cover",
    height: "100%",
    backgroundPosition: "center",
  },
  link: {
    backgroundColor: "#1670BB",
    color: "#fff",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "30px",
    transition: "all 0.3s",
    width: "180px",
    textAlign: "center",
    position: "relative",
    zIndex: "9",

    _hover: {
      backgroundColor: "#fff",
      color: "#1670BB",
    },
  },
  title: {
    fontSize: "30px",
    color: "#fff",
    lineHeight: "35px",
    width: "570px",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "26px",
    marginTop: "20px",
  },
  content: {
    position: "relative",
    zIndex: "9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    left: "25%",
  },
};
