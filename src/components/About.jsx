import {
  background,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import GroupOne from "../assets/Group 14.svg";
import GroupTwo from "../assets/Group 14 (1).svg";
import GroupThree from "../assets/Group 14 (2).svg";
import { useTranslation } from "react-i18next";

import MapImage from "../assets/map.png";

function About() {
  const { t } = useTranslation();
  return (
    <Box id="about" {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("About")}</Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justify={"space-between"}>
          <Heading {...css.title}>
            {t("Решение для потребностей вашего бизнеса")}
          </Heading>
          <Text {...css.subtext}>{t("about_text")}</Text>
        </Flex>
        <SimpleGrid
          gap={"30px"}
          mt={"60px"}
          columns={{ base: 1, sm: 2, md: 3 }}>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupOne} alt="GroupOne" />
              <Heading {...css.name}>{t("about_title1")}</Heading>
            </Flex>
            <Text {...css.text}>{t("about_text1")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupTwo} alt="GroupTwo" />
              <Heading {...css.name}>{t("about_title2")}</Heading>
            </Flex>
            <Text {...css.text}>{t("about_text2")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupThree} alt="GroupThree" />
              <Heading {...css.name}>{t("about_title3")}</Heading>
            </Flex>
            <Text {...css.text}>{t("about_text3")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  about: {
    backgroundImage: `url(${MapImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top 25% left 0",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: "-1",
    padding: {
      base: "36px 0",
      lg: "90px 0",
    },
  },
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
  },
  title: {
    fontSize: {
      base: "30px",
      sm: "65px",
    },
    lineHeight: {
      base: "40px",
      sm: "80px",
    },
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#000000",
    width: {
      base: "100%",
      lg: "546px",
    },
  },
  subtext: {
    fontSize: {
      base: "16px",
      lg: "18px",
    },
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: {
      base: "100%",
      lg: "400px",
    },
  },
  item: {
    background: "3px 5px 12px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    padding: "30px",
  },
  name: {
    fontSize: {
      base: "18px",
      lg: "24px",
    },
    lineHeight: "28px",
    fontWeight: "600",
    color: "#000000",
    letterSpacing: "0.24px",
  },
  icon: {
    width: "80px",
    height: "80px",
  },
  text: {
    color: "#9C9C9C",
    fontSize: {
      base: "16px",
      lg: "18px",
    },
    lineHeight: "26px",
    fontWeight: "400",
    marginTop: "20px",
  },
};
