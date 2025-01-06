import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import VacancyBanner from "../assets/vacancy.jpg";
import { useTranslation } from "react-i18next";

function VacancyPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box p={"12px 0"} pb={"36px"}>
        <Box className="container">
          <Image {...css.banner} src={VacancyBanner} />
          <Text {...css.text}>{t("vacancy_text")}</Text>
          <Flex mt={"24px"} gap={"18px"} flexDirection={"column"}>
            <Heading {...css.title}>
              {t("Ведущий специалист отдела логистики")}
            </Heading>
            <Heading {...css.title}>{t("Менеджер по продажам")}</Heading>
            <Heading {...css.title}>{t("Менеджер по логистике")}</Heading>
            <Heading {...css.title}>{t("Оператор Call-центра")}</Heading>
            <Heading {...css.title}>{t("Менеджер отдела сервиса")}</Heading>
            <Heading {...css.title}>{t("Водитель фуры")}</Heading>
            <Heading {...css.title}>{t("Студенты (стажеры)")}</Heading>
          </Flex>
          <Text {...css.text}>{t("По вакансиям обращаться")}:</Text>
          <Link {...css.link} target="_blank" href={"tel:+77753378595"}>
            +7 775 337 85 95
          </Link>
          <Link
            {...css.link}
            target="_blank"
            href={"mailto:sultanbek.asilbek@gmail.com"}>
            sultanbek.asilbek@gmail.com
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default VacancyPage;

const css = {
  banner: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
    height: {
      base: "250px",
      md: "100%",
    },
  },
  text: {
    fontSize: "20px",
    lineHeight: "36px",
    marginTop: "20px",
    color: "#676767",
    fontWeight: "500",
  },
  title: {
    fontSize: {
      base: "18px",
      lg: "24px",
    },
    lineHeight: "30px",
    color: "#0563AB",
    fontWeight: "600",
    cursor: "pointer",
  },
  link: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "500",
    transition: "0.3s",
    display: "block",

    _hover: {
      textDecoration: "none",
    },
  },
};
