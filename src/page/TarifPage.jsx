import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

import OneTariffImage from "../assets/delivery.webp";
import TwoTarifImage from "../assets/2-3.png";
import ThreeTarifImage from "../assets/3-3.webp";
import { useTranslation } from "react-i18next";

function TariffPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box className="contact">
        <Navbar />
        <Box className="container">
          <Heading {...css.title}>{t("Tariff")}</Heading>
        </Box>
      </Box>
      <Box p={"48px 0"}>
        <Box className="container">
          <Heading {...css.name}>
            {t("Тарифы транспортной компании — Рассчитать стоимость перевозки")}
          </Heading>
          <Text {...css.text}>
            {t(
              "Калькулятор автоматически рассчитывает стоимость, исходя из тарифов за км, которые обычно действуют в нашей транспортной компании."
            )}
          </Text>
          <Flex justify={"space-between"}>
            <Box {...css.box}>
              <Text {...css.subname}>Рассчитать стоимость перевозки:</Text>
              <Flex m={"12px 0"} gap={"12px"}>
                <Input {...css.input} placeholder="Откуда" type="text" />
                <Input {...css.input} placeholder="Куда" type="email" />
              </Flex>
              <Text {...css.subname}>Рассчитать стоимость перевозки:</Text>
              <Flex m={"12px 0"} gap={"12px"}>
                <Input
                  {...css.input}
                  placeholder="Описание груза (вес, объем)"
                  type="text"
                />
              </Flex>
              <Text {...css.subname}>Рассчитать стоимость перевозки:</Text>
              <Flex m={"12px 0"} gap={"12px"}>
                <Input {...css.input} placeholder="FullName" type="text" />
                <Input {...css.input} placeholder="Email" type="email" />
              </Flex>
              <Flex m={"12px 0"} gap={"12px"}>
                <Input {...css.input} placeholder="Company" type="text" />
                <Input {...css.input} placeholder="Phone" type="tell" />
              </Flex>
              <Button {...css.button}>Send Message</Button>
            </Box>
            <Box mt={"24px"}>
              <Box m={"12px 0"}>
                <Flex align={"center"} gap={"12px"}>
                  <Image
                    {...css.image}
                    src={
                      "https://le-trans.kz/wp-content/uploads/2023/05/1-6.png"
                    }
                    alt="OneTariffImage"
                  />
                  <Heading {...css.names}>{t("АДРЕСНАЯ ДОСТАВКА")}</Heading>
                </Flex>
                <Text {...css.texts}>
                  {t(
                    "Доставка до адреса получателя с уточнением удобного для него времени"
                  )}
                </Text>
              </Box>
              <Box m={"12px 0"}>
                <Flex align={"center"} gap={"12px"}>
                  <Image
                    {...css.image}
                    src={OneTariffImage}
                    alt="OneTariffImage"
                  />
                  <Heading {...css.names}>{t("Собственный автопарк")}</Heading>
                </Flex>
                <Text {...css.texts}>
                  {t(
                    "Предоставляем широкий спектр услуг в перевозке грузов различных габаритов."
                  )}
                </Text>
              </Box>
              <Box m={"12px 0"}>
                <Flex align={"center"} gap={"12px"}>
                  <Image
                    {...css.image}
                    src={TwoTarifImage}
                    alt="OneTariffImage"
                  />
                  <Heading {...css.names}>{t("ОПЛАТА В ОДИН КОНЕЦ")}</Heading>
                </Flex>
                <Text {...css.texts}>
                  {t(
                    "Вы оплачиваете стоимость перевозки в один конец, не платите за обратную дорогу"
                  )}
                </Text>
              </Box>
              <Box m={"12px 0"}>
                <Flex align={"center"} gap={"12px"}>
                  <Image
                    {...css.image}
                    src={ThreeTarifImage}
                    alt="OneTariffImage"
                  />
                  <Heading {...css.names}>
                    {t("ДОСТАВКА ГРУЗА ТОЧНО В СРОК")}
                  </Heading>
                </Flex>
                <Text {...css.texts}>
                  {t(
                    "Мы гарантируем качественную доставку груза точно в указанный срок"
                  )}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default TariffPage;

const css = {
  title: {
    color: "#fff",
    position: "relative",
    zIndex: "3 !important",
    textAlign: "center",
    paddingTop: "125px",
    paddingBottom: "125px",
    fontSize: "45px",
    lineHeight: "54px",
  },
  box: {
    background: "#f7f7f7",
    padding: "40px 30px",
    borderRadius: "30px",
    border: "3px solid rgba(18, 115, 186, 0.65)",
    marginTop: "20px",
    width: "70%",
  },
  subname: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "22px",
  },
  input: {
    background: "#e6f0f7",
    height: "40px",

    _placeholder: {
      color: "#000",
      fontWeight: "500",
      fontSize: "14px",
    },
  },
  name: {
    fontSize: "35px",
    lineHeight: "40px",
    width: "800px",
    color: "#062e39",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    color: "#000",
    marginBottom: "10px",
    width: "500px",
  },
  button: {
    marginTop: "60px",
    width: "100%",
    height: "50px",
    backgroundColor: "#1670BB",
    color: "#fff",
    border: "2px solid #1670BB",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "500 !important",
    transition: "all 0.3s",

    _hover: {
      backgroundColor: "#fff",
      color: "#062e39",
    },
  },
  names: {
    fontSize: "16px",
    lineHeight: "18px",
    color: "#062e39",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  image: {
    width: "50px",
    height: "50px",
  },
  texts: {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#515b67",
    width: "280px",
    marginTop: "10px",
  },
};
