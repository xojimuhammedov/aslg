import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ContactImage from "../assets/contact.jpg";
import OneIcon from "../assets/11.svg";
import TwoIcon from "../assets/22.svg";
import ThreeIcon from "../assets/1.svg";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <Box {...css.contact}>
      <Box className="container">
        <SimpleGrid gap={"60px"} columns={2}>
          <Box {...css.left}>
            <Box {...css.top}>
              <Heading {...css.title}>
                We are the Future of Cargo & Logistics
              </Heading>
              <Text {...css.text}>
                Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla
                a lobortis lectus, id volutpat magna. Morbi consequat porttitor
              </Text>
            </Box>
            <Flex align={"center"} gap={"12px"}>
              <Flex {...css.item}>
                <Image {...css.image} src={OneIcon} alt="OneIcon" />
                <Heading {...css.subname}>{t("Optimized Cost")}</Heading>
              </Flex>
              <Flex {...css.item}>
                <Image {...css.image} src={TwoIcon} alt="TwoIcon" />
                <Heading {...css.subname}>{t("Delivery on Time")}</Heading>
              </Flex>
              <Flex {...css.item}>
                <Image {...css.image} src={ThreeIcon} alt="ThreeIcon" />
                <Heading {...css.subname}>{t("Safety & Reliability")}</Heading>
              </Flex>
            </Flex>
          </Box>
          <Box {...css.right}>
            <Heading {...css.name}>{t("Request a Quote")}</Heading>
            <label htmlFor="name">
              {t("Your Name")}:
              <input type="text" id="name" placeholder={t("Your Name")} />
            </label>
            <label htmlFor="email">
              {t("Your Email")}:
              <input type="email" id="email" placeholder={t("Your Email")} />
            </label>
            <label htmlFor="phone">
              {t("Your Phone")}:
              <input type="tell" id="phone" placeholder={t("Your Phone")} />
            </label>
            <Button type="submit" {...css.button}>
              {t("Submit")}
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  contact: {
    backgroundImage: `url(${ContactImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "110px",
    paddingBottom: "120px",
    position: "relative",

    _before: {
      width: "100%",
      position: "absolute",
      content: "''",
      height: "100%",
      left: 0,
      top: 0,
      background: "rgba(6, 46, 57, 0.7)",
    },
  },
  top: {
    marginBottom: "55px",
    maxWidth: "800px",
  },
  left: {
    position: "relative",
    zIndex: "3",
  },
  title: {
    fontSize: "55px",
    lineHeight: "65px",
    color: "#fff",
    fontWeight: "700",
    margin: "20px 0",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "26px",
  },
  right: {
    backgroundColor: "#1670BB",
    borderRadius: "3px",
    padding: "50px 55px 60px",
    maxWidth: "486px",
    position: "relative",
    zIndex: "3",
  },
  name: {
    color: "#fff",
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#1670BB",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "30px",
    transition: "all 0.3s",
  },
  item: {
    alignItems: "center",
    marginBottom: "20px",
    flexDirection: "column",
    borderRadius: "2px",
    padding: "25px 35px",
    maxWidth: "200px",
    backgroundColor: "#1670BB",
    width: "100%",
  },
  image: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
  subname: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "15px",
    textAlign: "center",
  },
};
