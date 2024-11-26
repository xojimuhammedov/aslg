import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import FooterBanner from "../assets/footer.jpg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Telegram from "../assets/tg.svg";
import Twitter from "../assets/twitter-new.svg";
import LocationIcon from "../assets/location.svg";
import EmailIcon from "../assets/mail-open.svg";
import CallIcon from "../assets/call.svg";
import { useTranslation } from "react-i18next";
import LogoIcon from "../assets/logos.jpg";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Flex gap={"60px"} align={"center"} justify={"space-between"}>
          <Box {...css.left}>
            <Image {...css.image} src={LogoIcon} alt="ASLG Logo" />
            <Text {...css.text}>
              {t(
                "Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you"
              )}
            </Text>
            <Flex align={"center"} mt={"35px"}>
              <Link href="/" {...css.social}>
                <Image src={Instagram} alt="Instagram" />
              </Link>
              <Link href="/" {...css.social}>
                <Image src={Facebook} alt="Facebook" />
              </Link>
              <Link href="/" {...css.social}>
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
              <Link href="/" {...css.social}>
                <Image src={Telegram} alt="Telegram" />
              </Link>
              <Link href="/" {...css.social}>
                <Image src={Twitter} alt="Twitter" />
              </Link>
            </Flex>
          </Box>
          <SimpleGrid
            columns={3}
            width={"100%"}
            justifyContent={"space-between"}>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>{t("Our Services")}</Heading>
              <Flex flexDirection={"column"}>
                <RouterLink to="/">
                  <Text {...css.link}>{t("Home")}</Text>
                </RouterLink>
                <RouterLink to={"/about"}>
                  <Text {...css.link}>{t("About")}</Text>
                </RouterLink>
                <Link {...css.link} href="#services">
                  {t("Services")}
                </Link>
                <Link {...css.link} href="#contact">
                  {t("Contact")}
                </Link>
                <RouterLink to={"/tariff"}>
                  <Text {...css.link}>{t("Tariff")}</Text>
                </RouterLink>
              </Flex>
            </Box>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>{t("Our Services")}</Heading>
              <Flex flexDirection={"column"}>
                <RouterLink to="/service-about/1">
                  <Text {...css.link}>
                    {" "}
                    {t("Международные грузоперевозки")}
                  </Text>
                </RouterLink>
                <RouterLink to="/service-about/2">
                  <Text {...css.link}>
                    {" "}
                    {t("Складирование и обработка грузов")}
                  </Text>
                </RouterLink>
                <RouterLink to="/service-about/3">
                  <Text {...css.link}> {t("Таможенное оформление")}</Text>
                </RouterLink>
                <RouterLink to="/service-about/4">
                  <Text {...css.link}> {t("Логистический консалтинг")}</Text>
                </RouterLink>
              </Flex>
            </Box>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>{t("Contact Info")}</Heading>
              <Flex flexDirection={"column"}>
                <Link {...css.link} href="/">
                  <Image src={LocationIcon} alt="Location" />
                  {t("г.Алматы, Тулебаева 38")}
                </Link>
                <Link {...css.link} href="tel:+77753378595">
                  <Image src={CallIcon} alt="Call" />
                  +7(775)337-85-95
                </Link>
                <Link {...css.link} href="mailto:sultanbek.asilbek@gmail.com">
                  <Image src={EmailIcon} alt="Email" />
                  sultanbek.asilbek@gmail.com
                </Link>
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    backgroundImage: `url(${FooterBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    paddingTop: "70px",

    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(6, 46, 57, 0.7)",
      transition: "0.6s",
    },
  },
  image: {
    width: "200px",
  },
  left: {
    position: "relative",
    zIndex: 3,
    maxWidth: "385px",
    // width: "100%",
    padding: "10px 50px 15px",
    backgroundColor: "#0062AD",
    marginBottom: 0,
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
  },
  social: {
    background: "#1b1a1a",
    width: "40px",
    height: "40px",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  link: {
    color: "#fff",
    lineHeight: "26px",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    color: "#fff",
    fontSize: "22px",
    lineHeight: "32px",
    marginBottom: "20px",
  },
};
