import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import HeaderBanner from "../assets/banner.png";

import HeaderOne from "../assets/Group 1.svg";
import HeaderTwo from "../assets/Group 3.svg";
import HeaderThree from "../assets/Group 4.svg";
import HeaderFour from "../assets/Group 8.svg";
import HeaderFive from "../assets/Group 10.svg";

function Header() {
  const { t } = useTranslation();
  return (
    <Box pb={{ base: "36px", lg: "90px" }}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={{
            base: "36px",
            lg: "109px",
          }}>
          <Image {...css.images} src={HeaderBanner} alt="HeaderBanner" />
          <Box>
            <Heading {...css.title}>
              {t("Доставка любых возможностей с одним грузом за раз")}
            </Heading>
   
            <Heading {...css.name}>
              {t("Рассчитайте стоимость доставки")}
            </Heading>
            <SimpleGrid mt={"15px"} columns={{ base: 1, lg: 2 }} gap={"20px"}>
              <Input {...css.input} placeholder={t("Откуда")} />
              <Input {...css.input} placeholder={t("Куда")} />
            </SimpleGrid>
            <Input
              mt={"15px"}
              {...css.input}
              placeholder={t("Описание груза (вес, объем)")}
            />
            <SimpleGrid mt={"15px"} columns={{ base: 1, lg: 2 }} gap={"20px"}>
              <Input {...css.input} placeholder={t("Ваше имя")} />
              <Input {...css.input} placeholder={t("Ваш телефон")} />
            </SimpleGrid>
            <Button {...css.button}>{t("Рассчитать")}</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    fontSize: {
      base: "40px",
      lg: "68px",
    },
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  image: {
    cursor: "pointer",
  },
  name: {
    fontSize: {
      base: "22px",
      lg: "25px",
    },
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
    marginTop: "30px",
  },
  input: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "45px",
  },
  button: {
    background: "#0563AB",
    borderRadius: "18px",
    color: "white",
    height: "45px",
    border: "2px solid #0563AB",
    width: "100%",
    lineHeight: "normal",
    fontFamily: "Inter",
    marginTop: "25px",

    _hover: {
      background: "#0563AB",
    },
  },
  images: {
    height: {
      base: "450px",
      lg: "720px",
    },
    width: {
      base: "100%",
      lg: "650px",
    },
    objectFit: "cover",
    borderRadius: "10px",
  },
};
