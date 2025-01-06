import { Box, Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Language from "./Language";

import LogoIcon from "../assets/navbar-logo.png";
import NavbarMenu from "./NavbarMenu";
import { Link as Alink } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex justifyContent={"space-between"} align={"center"}>
          <Alink to={"/"}>
            <Image {...css.icon} src={LogoIcon} alt="Logo" />
          </Alink>
          <Flex align={"center"} gap={{ base: "16px", lg: "32px" }}>
            <Alink to={"/"}>
              <Text {...css.link}>{t("Главная")}</Text>
            </Alink>
            <Link href={"#about"}>
              <Text {...css.link}>{t("About")}</Text>
            </Link>
            <Link href={"#service"}>
              <Text {...css.link}>{t("Services")}</Text>
            </Link>
            <Link href={"#partner"}>
              <Text {...css.link}>{t("Partners")}</Text>
            </Link>
            <Alink to={"/tariff"}>
              <Text {...css.link}>{t("Tariff")}</Text>
            </Alink>
            <Alink to="/vacancy">
              <Text {...css.link}>{t("Вакансии")}</Text>
            </Alink>
            <Alink to={"/contact"}>
              <Text {...css.link}>{t("Contact")}</Text>
            </Alink>
            <Language />
            <NavbarMenu />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
    display: {
      base: "none",
      lg: "block",
    },
  },
  navbar: {
    padding: {
      base: "8px 0",
    },
  },
  icon: {
    width: "220px",
    height: "100px",
    objectFit: "contain",
  },
};
