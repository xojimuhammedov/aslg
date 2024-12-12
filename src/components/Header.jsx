import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeaderBanner from "../assets/header-banner.png";

import HeaderOne from "../assets/Group 1.svg";
import HeaderTwo from "../assets/Group 3.svg";
import HeaderThree from "../assets/Group 4.svg";
import HeaderFour from "../assets/Group 8.svg";
import HeaderFive from "../assets/Group 10.svg";

function Header() {
  const { t } = useTranslation();
  return (
    <Box pb={"168px"}>
      <Box className="container">
        <Flex gap={"109px"}>
          <Image src={HeaderBanner} alt="HeaderBanner" />
          <Box>
            <Heading {...css.title}>
              {t("Доставка любых возможностей с одним грузом за раз")}
            </Heading>
            <Flex mt={"30px"} justify={"space-between"}>
              <Image {...css.image} src={HeaderOne} alt="HeaderOne" />
              <Image {...css.image} src={HeaderTwo} alt="HeaderTwo" />
              <Image {...css.image} src={HeaderThree} alt="HeaderThree" />
              <Image {...css.image} src={HeaderFour} alt="HeaderFour" />
              <Image {...css.image} src={HeaderFive} alt="HeaderFive" />
            </Flex>
            <Heading {...css.name}>{t("Рассчитайте стоимость доставки")}</Heading>
            <SimpleGrid mt={"25px"} columns={2} gap={"20px"}>
              <Input {...css.input} placeholder="От" />
              <Input {...css.input} placeholder="Место назначения" />
              <Input {...css.input} placeholder="Тип" />
              <Input {...css.input} placeholder="kg" />
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
    fontSize: "68px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  image: {
    cursor: "pointer",
  },
  name: {
    fontSize: "25px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
    marginTop: "60px",
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
};
