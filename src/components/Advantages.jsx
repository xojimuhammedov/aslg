import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import ArrowDown from "../assets/arrow-down-02.svg";
import { useTranslation } from "react-i18next";

function Advantages() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>Преимущества</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>Наши преимущества</Heading>
          <Text {...css.subtext}>
            Сотрудничество с нами — это гарантия того, что ваш груз окажется в
            нужном месте в нужное время, а вы получите высокий уровень сервиса и
            уверенность в результате.
          </Text>
        </Flex>
        <SimpleGrid gap={"30px"} mt={"60px"} columns={3}>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>01</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>{t("advantages_title7")}</Heading>
            <Text {...css.text}>{t("advantages_text7")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>02</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>{t("advantages_title2")}</Heading>
            <Text {...css.text}>{t("advantages_text2")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>03</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>{t("advantages_title3")}</Heading>
            <Text {...css.text}>{t("advantages_text3")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>04</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>{t("advantages_title4")}</Heading>
            <Text {...css.text}>{t("advantages_text4")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>05</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
            </Flex>
            <Heading {...css.name}>{t("advantages_title5")}</Heading>
            <Text {...css.text}>{t("advantages_text5")}</Text>
          </Box>
          <Box {...css.item}>
            <Flex mb={"48px"} align={"center"} justify={"space-between"}>
              <Heading {...css.number}>06</Heading>
              <Image src={ArrowDown} alt="ArrowDown" />
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
    width: "470px",
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
  text: {
    color: "#000",
    fontSize: "18px",
    lineHeight: "normal",
    fontWeight: "300",
    marginTop: "12px",
    letterSpacing: "0.2px",
  },
  name: {
    fontSize: "28px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#000000",
    letterSpacing: "0.35px",
    width: "300px",
  },
  number: {
    fontSize: "60px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: "0.6px",
  },
};
