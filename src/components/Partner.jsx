import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import PartnerImage from "../assets/partner.png";

function Partner() {
  const { t } = useTranslation();
  return (
    <Box background={"#EFF8FF"} p={{ base: "36px 0", lg: "90px 0" }}>
      <Box className="container">
        <Heading {...css.subname}>{t("Отзывы")}</Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          align={"center"}
          justify={"space-between"}>
          <Heading {...css.title}>
            {t("Звук от наших счастливых партнеров")}
          </Heading>
          <Flex
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            align={"center"}
            mt={{ base: "18px", lg: "0px" }}
            justify={{ base: "center", lg: "baseline" }}
            gap={{ base: "24px", lg: "90px" }}>
            <Flex flexDirection={"column"} align={"center"}>
              <Heading {...css.number}>25+</Heading>
              <Text {...css.text}>
                Победа в номинации «Лучшая судоходная компания»
              </Text>
            </Flex>
            <Flex flexDirection={"column"} align={"center"}>
              <Heading {...css.number}>100K+</Heading>
              <Text {...css.text}>Довольные клиенты по всему миру</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          mt={{ base: "24px", lg: "60px" }}
          gap={"12px"}
          justify={"space-between"}>
          <Box>
            <Text {...css.subtext}>
              «Большое спасибо Cicero за экономию моего времени. С Cicero
              доставка товаров происходит быстрее, даже если они находятся очень
              далеко. Мне также не нужно бояться и сомневаться, потому что
              Cicero предоставляет место для хранения моих транспортных
              документов и упрощает отличное отслеживание в реальном времени»
            </Text>
            <Heading {...css.ceoname}>ChristinaMartha Tiahahu</Heading>
            <Heading {...css.ceotext}>
              Генеральный директор Marthapura Gold & Diamond
            </Heading>
          </Box>
          <Image src={PartnerImage} alt="Partner" />
        </Flex>
      </Box>
    </Box>
  );
}

export default Partner;

const css = {
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
      lg: "60px",
    },
    fontWeight: "600",
    lineHeight: "normal",
    color: "#000",
    letterSpacing: "0.6px",
    width: {
      base: "100%",
      lg: "546px",
    },
  },
  number: {
    fontSize: {
      base: "35px",
      lg: "60px",
    },
    fontWeight: "600",
    lineHeight: "normal",
    color: "#000",
    letterSpacing: "0.6px",
  },
  text: {
    fontSize: {
      base: "16px",
      lg: "20px",
    },
    lineHeight: "normal",
    color: "#676767",
    fontWeight: "400",
    letterSpacing: "0.2px",
    width: {
      base: "100%",
      lg: "230px",
    },
    textAlign: "center",
  },
  subtext: {
    fontSize: {
      base: "20px",
      lg: "24px",
    },
    lineHeight: "30px",
    color: "#494949",
    fontWeight: "400",
    width: {
      base: "100%",
      lg: "546px",
    },
  },
  ceoname: {
    fontSize: {
      base: "28px",
      lg: "30px",
    },
    lineHeight: "30px",
    color: "#000",
    fontWeight: "600",
    letterSpacing: "0.6px",
    marginTop: "40px",
  },
  ceotext: {
    color: "#9C9C9C",
    fontSize: {
      base: "18px",
      lg: "20px",
    },
    lineHeight: "30px",
    fontWeight: "400",
    letterSpacing: "0.4px",
    marginTop: "10px",
  },
};
