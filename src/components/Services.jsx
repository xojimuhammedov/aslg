import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { serviceData } from "./../data";

function Services() {
  const { t, i18n } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("Services")}</Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justify={"space-between"}>
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
        <SimpleGrid
          mt={"60px"}
          gap={"18px"}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {serviceData?.map((item, index) => (
            <Box {...css.item} key={index}>
              <Image {...css.image} src={item.image} alt="ServiceImage" />
              <Heading {...css.name}>{item[`title_${i18n?.language}`]}</Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  about: {
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
      lg: "850px",
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
  image: {
    height: "450px",
    width: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
  item: {
    position: "relative",
    overflow: "hidden",
  },
  name: {
    position: "absolute",
    zIndex: "999",
    bottom: "50px",
    left: "20px",
    fontSize: "25px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#FFFFFF",
  },
};
