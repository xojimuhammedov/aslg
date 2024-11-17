import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
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

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Flex gap={"60px"} align={"center"} justify={"space-between"}>
          <Box {...css.left}>
            <Image
              {...css.image}
              src={
                "https://themejunction.net/html/logiland/demo/assets/images/logo/logo.png"
              }
              alt="ASLG Logo"
            />
            <Text {...css.text}>
              A farm is a plot of land that is used to grow crops and raise
              livestock, as in our farm, we raise sheep and sell their wool the
              word farm is also.
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
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>{t("Our Services")}</Heading>
              <Flex flexDirection={"column"}>
                <Link {...css.link} href="/">
                  Home
                </Link>
                <Link {...css.link} href="/about">
                  About
                </Link>
                <Link {...css.link} href="/services">
                  Services
                </Link>
                <Link {...css.link} href="/contact">
                  Contact
                </Link>
                <Link {...css.link} href="/contact">
                  Contact
                </Link>
              </Flex>
            </Box>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>Our Services</Heading>
              <Flex flexDirection={"column"}>
                <Link {...css.link} href="/">
                  Home
                </Link>
                <Link {...css.link} href="/about">
                  About
                </Link>
                <Link {...css.link} href="/services">
                  Services
                </Link>
                <Link {...css.link} href="/contact">
                  Contact
                </Link>
                <Link {...css.link} href="/contact">
                  Contact
                </Link>
              </Flex>
            </Box>
            <Box position={"relative"} zIndex={"3"}>
              <Heading {...css.title}>{t("Contact Info")}</Heading>
              <Flex flexDirection={"column"}>
                <Link {...css.link} href="/">
                  <Image src={LocationIcon} alt="Location" />
                  244, First Floor, Angeles
                </Link>
                <Link {...css.link} href="/about">
                  <Image src={CallIcon} alt="Call" />
                  (880)1247536548
                </Link>
                <Link {...css.link} href="/services">
                  <Image src={EmailIcon} alt="Email" />
                  info@example.com
                </Link>
              </Flex>
            </Box>
          </Flex>
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
    padding: "70px 50px 75px",
    backgroundColor: "#062e39",
    marginBottom: 0,
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "20px",
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
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "20px",
  },
};
