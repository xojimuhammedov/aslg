import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function CompanyPage() {
  const { t } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("О Компании")}</Heading>
        <Text {...css.text}>{t("text1")}</Text>
        <Text {...css.text}>{t("text2")}</Text>
      </Box>
    </Box>
  );
}

export default CompanyPage;

const css = {
  title: {
    fontSize: {
      base: "30px",
      lg: "60px",
    },
    fontWeight: "600",
    lineHeight: "normal",
    color: "#000",
    letterSpacing: "0.6px",
    marginBottom: "36px",
  },
  text: {
    fontSize: {
      base: "18px",
    },
    lineHeight: "26px",
    color: "#000",
    marginBottom: "30px",
    letterSpacing: "0.5px",
  },
};
