import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t } = useTranslation();
  return (
    <Box pb={'24px'} className="header">
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
          <Link to={"/"}>
            <Text {...css.link}>{t("Read More")}</Text>
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
    width: "180px",
    textAlign: "center",

    _hover: {
      backgroundColor: "#fff",
      color: "#062e39",
    },
  },
};
