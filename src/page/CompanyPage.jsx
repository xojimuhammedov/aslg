import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import CompanyLogo from "../assets/company-logo.jpg";

function CompanyPage() {
  const { t } = useTranslation();
  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("О Компании")}</Heading>
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          align={"center"}
          gap={"36px"}>
          <Box>
            <Text {...css.text}>{t("text1")}</Text>
            <Text {...css.text}>{t("text2")}</Text>
          </Box>
          <Image {...css.image} src={CompanyLogo} alt="Company Logo" />
        </Flex>

        <Heading {...css.subname}>{t("Как работаем")}</Heading>

        <Text {...css.texts}>
          {t("Вы оставляете заявку на сайте, e-mail, whatsapp, телефон.")}
        </Text>
        <Text {...css.texts}>
          {t("С вами связываются наши связываются наши специалисты")}
        </Text>
        <Text {...css.texts}>
          {t("Мы предоставляем вам каждодневный отчет по грузам")}
        </Text>
        <Text {...css.texts}>
          {t("Проводим закрытие счета после выгрузки")}
        </Text>
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
    marginBottom: "18px",
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
  subname: {
    fontSize: {
      base: "30px",
      lg: "40px",
    },
    fontWeight: "600",
    lineHeight: "normal",
    color: "#000",
    letterSpacing: "0.6px",
    marginBottom: "36px",
  },
  texts: {
    fontSize: {
      base: "18px",
    },
    lineHeight: "26px",
    color: "#000",
    marginBottom: "12px",
    letterSpacing: "0.5px",
    cursor: "pointer",
  },
  image: {
    width: {
      base: "100%",
      md: "550px",
    },
    height: {
      base: "auto",
      md: "580px",
    },
    objectFit: "cover",
    borderRadius: {
      base: "12px",
      md: "20px",
    },
  },
};
