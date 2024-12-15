import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import ServiceImage from "../assets/services.png";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("Services")}</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>
            {t(
              "Откройте для себя полный спектр услуг, которые мы предлагаем для доставки"
            )}
          </Heading>
          <Text {...css.subtext}>
            Мы делаем логистическую доставку намного проще и понятнее. Сочетание
            хорошего обслуживания и технологий делает все эффективным
          </Text>
        </Flex>
        <SimpleGrid mt={"60px"} gap={"30px"} columns={3}>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
          <Box>
            <Image src={ServiceImage} alt="ServiceImage" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  about: {
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
    width: "850px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
};
