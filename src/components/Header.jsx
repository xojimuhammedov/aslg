import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <Box className="header">
      <Navbar />
      <Box className="container">
        <Box {...css.top}>
          <Heading {...css.title}>
            {t("Flexible Transport And Logistics Services")}
          </Heading>
          <Text {...css.text}>
            {t(
              "Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you"
            )}
          </Text>
          <Link href="/services" {...css.link}>
            {t("Read More")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    fontSize: "60px",
    fontWeight: "700",
    color: "#fff",
    lineHeight: "65px",
    marginBottom: "20px",
  },
  top: {
    marginTop: "315px",
    maxWidth: "825px",
    position: "relative",
    zIndex: "100",
  },
  text: {
    fontSize: "18px",
    color: "#fff",
    marginBottom: "10px",
  },
  link: {
    backgroundColor: "#062e39",
    color: "#fff",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "30px",
    transition: "all 0.3s",

    _hover: {
      backgroundColor: "#fff",
      color: "#062e39",
    },
  },
};
