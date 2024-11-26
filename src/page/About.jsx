import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import HistoryImage from "../assets/image.jpg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex align={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading {...css.title}>
              {t("История успеха Asilbek Sultanbek Logistic Group")}
            </Heading>
            <Text {...css.text}>{t("text")}</Text>
            <Text {...css.text}>{t("text1")}</Text>
            <Text {...css.text}>{t("text2")}</Text>
          </Box>
          <Box>
            <Image src={HistoryImage} {...css.image} />
          </Box>
        </Flex>
        <Text {...css.texts}>{t("text3")}</Text>
        <Text {...css.texts}>{t("text4")}</Text>
        <Text {...css.texts}>{t("text5")}</Text>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  title: {
    fontSize: "22px",
    color: "#1670BB",
    lineHeight: "36px",
  },
  text: {
    color: "#7c858c",
    lineHeight: "26px",
    width: "570px",
    marginTop: "20px",
  },
  texts: {
    color: "#7c858c",
    lineHeight: "26px",
    marginTop: "20px",
  },
  image: {
    width: "570px",
  },
};
