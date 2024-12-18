import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Statistic() {
  const { t } = useTranslation();
  return (
    <Box {...css.statistic}>
      <Box className="container">
        <SimpleGrid gap={"36px"} columns={{ base: 1, sm: 2, md: 3 }}>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>12+</Heading>
            <Text {...css.text}>{t("Year Services")}</Text>
          </Flex>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>+20K</Heading>
            <Text {...css.text}>{t("Cargo Delivered")}</Text>
          </Flex>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>500</Heading>
            <Text {...css.text}>{t("Total Cargo")}</Text>
          </Flex>
        </SimpleGrid>
        <hr
          style={{
            borderBottom: "1px solid rgba(139, 139, 139, 0.60)",
            marginTop: "60px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Statistic;

const css = {
  number: {
    fontSize: "60px",
    lineHeight: "75px",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
    letterSpacing: "0.6px",
  },
  text: {
    fontSize: "22px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: "0.22px",
    color: "rgba(0, 0, 0, 1)",
  },
  statistic: {
    padding: {
      base: "36px 0",
      lg: "90px 0",
    },
    background: "#EFF8FF",
  },
};
