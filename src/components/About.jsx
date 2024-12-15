import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import GroupOne from "../assets/Group 14.svg";
import GroupTwo from "../assets/Group 14 (1).svg";
import GroupThree from "../assets/Group 14 (2).svg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("About")}</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>
            {t("Решение для потребностей вашего бизнеса")}
          </Heading>
          <Text {...css.subtext}>{t("about_text")}</Text>
        </Flex>
        <SimpleGrid gap={"30px"} mt={"60px"} columns={3}>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupOne} alt="GroupOne" />
              <Heading {...css.name}>
                Ваши решения по межконтинентальным перевозкам
              </Heading>
            </Flex>
            <Text {...css.text}>
              Благодаря улучшенному решению цепочки поставок ваш бизнес
              ускорится, а также повысится эффективность
            </Text>
          </Box>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupTwo} alt="GroupTwo" />
              <Heading {...css.name}>
                Ваши решения по межконтинентальным перевозкам
              </Heading>
            </Flex>
            <Text {...css.text}>
              Благодаря улучшенному решению цепочки поставок ваш бизнес
              ускорится, а также повысится эффективность
            </Text>
          </Box>
          <Box {...css.item}>
            <Flex align={"center"} gap={"17px"}>
              <Image {...css.icon} src={GroupThree} alt="GroupThree" />
              <Heading {...css.name}>
                Ваши решения по межконтинентальным перевозкам
              </Heading>
            </Flex>
            <Text {...css.text}>
              Благодаря улучшенному решению цепочки поставок ваш бизнес
              ускорится, а также повысится эффективность
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  about: {
    background: "#F6F6F6",
    padding: "90px 0",
  },
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
  },
  title: {
    fontSize: "65px",
    lineHeight: "80px",
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#000000",
    width: "546px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
  item: {
    background: "3px 5px 12px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    padding: "30px",
  },
  name: {
    fontSize: "24px",
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
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "400",
    marginTop: "20px",
  },
};
