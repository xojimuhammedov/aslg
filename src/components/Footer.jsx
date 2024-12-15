import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";

import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/tg.svg";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Heading mb={"24px"}>Logo</Heading>
        <SimpleGrid {...css.box} columns={4} spacing={10}>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("INFORMATION")}</Heading>
            <Alink to={"/contact"}>
              <Text {...css.link}>{t("Contact")}</Text>
            </Alink>
            <Link href={"/"}>
              <Text {...css.link}>{t("About Us")}</Text>
            </Link>
            <Link href={"/"}>
              <Text {...css.link}>{t("FAQs")}</Text>
            </Link>
            <Alink to={"/tariff"}>
              <Text {...css.link}>{t("Tariff")}</Text>
            </Alink>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("SERVICES")}</Heading>
            <Alink to={"/"}>
              <Text {...css.link}>{t("Международные грузоперевозки")}</Text>
            </Alink>
            <Alink to={"/"}>
              <Text {...css.link}>{t("Складирование и обработка грузов")}</Text>
            </Alink>
            <Alink to={"/"}>
              <Text {...css.link}>{t("Таможенное оформление")}</Text>
            </Alink>
            <Alink to={"/"}>
              <Text {...css.link}>{t("Логистический консалтинг")}</Text>
            </Alink>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("Contact")}</Heading>
            <Link target="_blank" href={"tel:+77753378595"}>
              <Text {...css.link}>+7 775 337 85 95</Text>
            </Link>
            <Link target="_blank" href={"mailto:sultanbek.asilbek@gmail.com"}>
              <Text {...css.link}>sultanbek.asilbek@gmail.com</Text>
            </Link>
            <Link href={"/"}>
              <Text {...css.link}>
                Республика Казахстан, г.Алматы, Тулебаева 38, Бизнес центр
                Жетысу, офис 512
              </Text>
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("FOLLOW US ON SOCIAL MEDIA")}</Heading>
            <Text {...css.link}>{t("Join Us")}</Text>
            <Flex gap={"12px"}>
              <Link href="/">
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link href="/">
                <Image src={Telegram} alt="Telegram" />
              </Link>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Text
          color={"#fff"}
          fontSize={"16px"}
          textAlign={"center"}
          lineHeight={"24px"}
          mt={"40px"}>
          © 2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    background: "#0563AB",
    padding: "40px 0",
  },
  title: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "700",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "10px",
    fontWeight: "500",
  },
  box: {
    borderBottom: "1px solid #fff",
    padding: "48px 0",
    borderTop: "1px solid #fff",
  },
};
