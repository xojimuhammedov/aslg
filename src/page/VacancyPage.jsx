import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import VacancyBanner from "../assets/vacancy.jpg";

function VacancyPage() {
  return (
    <>
      <Box p={"12px 0"} pb={"36px"}>
        <Box className="container">
          <Image {...css.banner} src={VacancyBanner} />
          <Text {...css.text}>
            Asilbek Sultanbek Logistic Group — молодая и динамично развивающаяся
            логистическая компания в Казахстане. Мы специализируемся на
            автоперевозках и предлагаем услуги по доставке грузов из Китая,
            Европы, стран СНГ, а также по локальным направлениям внутри страны.
          </Text>
          <Flex mt={"24px"} gap={"18px"} flexDirection={"column"}>
            <Heading {...css.title}>
              Ведущий специалист отдела логистики
            </Heading>
            <Heading {...css.title}>Менеджер по продажам</Heading>
            <Heading {...css.title}>Менеджер по логистике</Heading>
            <Heading {...css.title}>Оператор Call-центра</Heading>
            <Heading {...css.title}>Менеджер отдела сервиса</Heading>
            <Heading {...css.title}>Водитель фуры</Heading>
            <Heading {...css.title}>Студенты (стажеры)</Heading>
          </Flex>
          <Text {...css.text}>По вакансиям обращаться:</Text>
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
    fontSize: "16px",
    lineHeight: "30px",
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
