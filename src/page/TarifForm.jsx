import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

import IconOne from "../assets/icon.svg";
import IconTwo from "../assets/icon1.svg";
import IconThree from "../assets/icon2.svg";
import IconFour from "../assets/icon3.svg";
import { useTranslation } from "react-i18next";

function TarifForm() {
  const { t } = useTranslation();
  return (
    <Box pb={"45px"}>
      <Box className="container">
        <Heading {...css.title}>{t("Calculate your shipment")}</Heading>
        <SimpleGrid alignItems={"center"} columns={2} gap={"48px"}>
          <Box>
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder={t("Откуда")} />
              <Input {...css.input} placeholder={t("Куда")} />
            </SimpleGrid>
            <Textarea
              placeholder={t("Описание груза (вес, объем)")}
              {...css.inputs}
            />
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder={t("Ваше имя")} />
              <Input {...css.input} placeholder={t("Ваш телефон")} />
            </SimpleGrid>
            <SimpleGrid gap={"24px"} columns={2}>
              <Input {...css.input} placeholder={t("E-mail")} />
              <Input {...css.input} placeholder={t("Country")} />
            </SimpleGrid>
            <Button {...css.button}>{t("Рассчитать")}</Button>
          </Box>
          <Box>
            <SimpleGrid gap={"24px"} columns={2}>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconOne} />
                  <Heading {...css.name}>{t("Address delivery")}</Heading>
                </Flex>
                <Text {...css.text}>
                  {t(
                    "Delivery to the recipient's address with a convenient time specified"
                  )}
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconTwo} />
                  <Heading {...css.name}>{t("Собственный автопарк")}</Heading>
                </Flex>
                <Text {...css.text}>
                  {t(
                    "Предоставляем широкий спектр услуг в перевозке грузов различных габаритов."
                  )}
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconThree} />
                  <Heading {...css.name}>{t("ОПЛАТА В ОДИН КОНЕЦ")}</Heading>
                </Flex>
                <Text {...css.text}>
                  {t(
                    "Вы оплачиваете стоимость перевозки в один конец, не платите за обратную дорогу"
                  )}
                </Text>
              </Box>
              <Box {...css.item}>
                <Flex align={"center"} gap={"10px"}>
                  <Image src={IconFour} />
                  <Heading {...css.name}>
                    {t("Delivery of cargo just in minute")}
                  </Heading>
                </Flex>
                <Text {...css.text}>
                  {t(
                    "Мы гарантируем качественную доставку груза точно в указанный срок"
                  )}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TarifForm;

const css = {
  title: {
    fontSize: "25px",
    lineHeight: "normal",
    fontWeight: "500",
    color: "#000000",
  },
  input: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "45px",
    margin: "12px 0",

    _placeholder: {
      color: "#9C9C9C",
      lineHeight: "normal",
      fontWeight: "400",
    },
  },
  inputs: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "120px",
    resize: "none",
    padding: "14px",

    _placeholder: {
      color: "#9C9C9C",
      lineHeight: "normal",
      fontWeight: "400",
    },
  },
  item: {
    background: "#F6F6F6",
    borderRadius: "10px",
    padding: "20px",
  },
  name: {
    fontSize: "20px",
    lineHeight: "normal",
    fontWeight: "600",
  },
  text: {
    fontSize: "20px",
    lineHeight: "normal",
    fontWeight: "400",
    marginTop: "15px",
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
