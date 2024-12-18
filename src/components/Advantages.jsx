import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

// import ArrowDown from "../assets/arrow-down-02.svg";
import { useTranslation } from "react-i18next";
import ArrowDown from "../assets/ArrowDown";

function Advantages() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("Преимущества")}</Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justify={"space-between"}>
          <Heading {...css.title}>{t("Наши преимущества")}</Heading>
          <Text {...css.subtext}>{t("advantagesText")}</Text>
        </Flex>
        <SimpleGrid
          gap={"30px"}
          mt={"60px"}
          columns={{ base: 1, sm: 2, md: 3 }}>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>01</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title7")}</Heading>
            <Text {...css.text}>{t("advantages_text7")}</Text>
          </Box>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>02</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title2")}</Heading>
            <Text {...css.text}>{t("advantages_text2")}</Text>
          </Box>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>03</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title3")}</Heading>
            <Text {...css.text}>{t("advantages_text3")}</Text>
          </Box>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>04</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title4")}</Heading>
            <Text {...css.text}>{t("advantages_text4")}</Text>
          </Box>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>05</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title5")}</Heading>
            <Text {...css.text}>{t("advantages_text5")}</Text>
          </Box>
          <Box className="advantages-item" {...css.item}>
            <Flex
              mb={{ base: "24px", md: "48px" }}
              align={"center"}
              justify={"space-between"}>
              <Heading {...css.number}>06</Heading>
              <ArrowDown />
            </Flex>
            <Heading {...css.name}>{t("advantages_title6")}</Heading>
            <Text {...css.text}>{t("advantages_text6")}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Advantages;

const css = {
  about: {
    // background: "#F6F6F6",
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
      lg: "470px",
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
    backgroundColor: "#EFF8FF",
    padding: "30px",
  },
  text: {
    color: "#000",
    fontSize: {
      base: "16px",
      md: "18px",
    },
    lineHeight: "normal",
    fontWeight: "300",
    marginTop: "12px",
    letterSpacing: "0.2px",
  },
  name: {
    fontSize: {
      base: "24px",
      md: "28px",
    },
    lineHeight: "normal",
    fontWeight: "500",
    color: "#000000",
    letterSpacing: "0.35px",
    width: {
      base: "100%",
      md: "300px",
    },
  },
  number: {
    fontSize: "60px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: "0.6px",
  },
};
