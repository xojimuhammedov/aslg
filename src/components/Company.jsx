import { border, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import CeoImage from "../assets/ceo.jpg";

function Company() {
  const { t } = useTranslation();
  return (
    <Box p={"120px 0"}>
      <Box className="container">
        <Flex>
          <Box w={"50%"}>
            <Heading {...css.title}>{t("Transportation Company")}</Heading>
            <Heading {...css.name}>
              {t("Добро пожаловать в Asilbek Sultanbek Logistics Group!")}
            </Heading>
            <Text {...css.text}>{t("companyText")}</Text>
            <Link to={"/"}>
              <Text {...css.link}>{t("Read More")}</Text>
            </Link>
          </Box>
          <Box {...css.right}>
            <Box {...css.box}>
              <Image
                src="https://themejunction.net/html/logiland/demo/assets/images/about/ab-1.jpg"
                {...css.image}
              />
            </Box>
            <Image src={CeoImage} {...css.images} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Company;

const css = {
  title: {
    fontSize: "22px",
    color: "#1670BB",
    lineHeight: "36px",
  },
  serviceName: {
    fontSize: "22px",
    color: "#1670BB",
    lineHeight: "36px",
    marginTop: "20px",
  },
  name: {
    fontSize: "50px",
    color: "#1670BB",
    lineHeight: "55px",
    fontWeight: "700",
  },
  text: {
    color: "#7c858c",
    lineHeight: "26px",
    width: "570px",
    marginTop: "20px",
  },
  texts: {
    color: "#7c858c",
    lineHeight: "26px",
    width: "250px",
  },
  box: {
    position: "absolute",
    right: "0",
    top: "0",
    transition: "0.4s",
    width: "calc(100% - 225px)",

    _before: {
      content: "''",
      position: "absolute",
      top: "25%",
      left: "20%",
      width: "59%",
      height: "53%",
      transition: "0.4s",
      zIndex: 10,
      maxWidth: "250px",
      maxHeight: "350px",
      border: "2px dashed #ddd",
      transform: "scale(1)",
    },
  },
  image: {
    position: "relative",
    zIndex: "3 !important",
  },
  link: {
    backgroundColor: "#1670BB",
    color: "#fff",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "30px",
    transition: "all 0.3s",
    width: "180px",
    textAlign: "center",
    marginTop: "20px",
    border: "2px solid #1670BB",

    _hover: {
      backgroundColor: "#fff",
      color: "#1670BB",
    },
  },
  images: {
    position: "relative",
    zIndex: "3 !important",
    width: "60%",
    marginTop: "240px",
    height: "500px",
    objectFit:"cover"
  },
  right: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "50%",
  },
};
