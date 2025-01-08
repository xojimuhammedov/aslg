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
        <Heading {...css.subname}>Как работаем</Heading>

        <Text {...css.texts}>
          Вы оставляете заявку на сайте, e-mail, whatsapp, телефон.
        </Text>
        <Text {...css.texts}>
          С вами связываются наши связываются наши специалисты
        </Text>
        <Text {...css.texts}>
          Мы предоставляем вам каждодневный отчет по грузам
        </Text>
        <Text {...css.texts}>Проводим закрытие счета после выгрузки</Text>
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
};
