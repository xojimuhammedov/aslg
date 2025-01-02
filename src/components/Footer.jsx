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
import WhatsappIcon from "../assets/whatsapp.png";

import LogoIcon from "../assets/footer-logo.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Image {...css.image} src={LogoIcon} alt="Logo" />
        <SimpleGrid
          {...css.box}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={10}>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("INFORMATION")}</Heading>
            <Link {...css.link} href={"/"}>
              {t("About Us")}
            </Link>
            <Alink to={"/contact"}>
              <Text {...css.link}>{t("Contact")}</Text>
            </Alink>

            <Link {...css.link} href={"/"}>
              {t("FAQs")}
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
            <Link {...css.link} target="_blank" href={"tel:+77753378595"}>
              +7 775 337 85 95
            </Link>
            <Link
              {...css.link}
              target="_blank"
              href={"mailto:sultanbek.asilbek@gmail.com"}>
              sultanbek.asilbek@gmail.com
            </Link>
            <Link
              target="_blank"
              {...css.link}
              href={"https://maps.app.goo.gl/TArvqgcs41X2c1zQ8"}>
              Республика Казахстан, г.Алматы, Тулебаева 38, Бизнес центр Жетысу,
              офис 512
            </Link>
          </Flex>
          <Flex flexDirection={"column"}>
            <Heading {...css.title}>{t("FOLLOW US ON SOCIAL MEDIA")}</Heading>
            <Text {...css.link}>{t("Join Us")}</Text>
            <Flex gap={"12px"}>
              <Link href="/">
                <Image {...css.icon} src={Instagram} alt="Instagram" />
              </Link>
              <Link href="/">
                <Image {...css.icon} src={Telegram} alt="Telegram" />
              </Link>
              <Link href="/">
                <Image {...css.icon} src={WhatsappIcon} alt="WhatsappIcon" />
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
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
  box: {
    borderBottom: "1px solid #fff",
    padding: "48px 0",
    borderTop: "1px solid #fff",
  },
  icon: {
    width: "25px",
  },
  image: {
    width: "220px",
    height: "100px",
    objectFit: "contain",
    cursor: "pointer",
  },
};
