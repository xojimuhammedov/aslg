import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import CeoImage from "../assets/ceo.jpg";
import Navbar from "../components/Navbar";
import About from "./About";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box className="contact">
        <Navbar />
        <Box className="container">
          <Heading {...css.titles}>{t("About Us")}</Heading>
        </Box>
      </Box>
      <Box p={"120px 0"} pb={"60px"}>
        <Box className="container">
          <Flex>
            <Box w={"50%"}>
              <Heading {...css.title}>{t("Transportation Company")}</Heading>
              <Heading {...css.name}>
                {t("Добро пожаловать в Asilbek Sultanbek Logistics Group!")}
              </Heading>
              <Text {...css.text}>{t("companyText")}</Text>
              <Heading {...css.names}>{t("Почему выбирают нас?")}</Heading>
              <Text {...css.text}>
                Мы понимаем, что каждый груз — это часть вашего бизнеса. Поэтому
                мы гарантируем: <br /> - Полное сопровождение на всех этапах
                логистической цепочки. <br /> - Прозрачность всех процессов и
                своевременное информирование. <br /> - Высокий уровень
                обслуживания, основанный на доверии и профессионализме.
              </Text>
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
      <About />
    </>
  );
}

export default AboutPage;

const css = {
  title: {
    fontSize: "22px",
    color: "#1670BB",
    lineHeight: "36px",
  },
  names: {
    fontSize: "26px",
    color: "#1670BB",
    lineHeight: "36px",
    marginTop: "40px",
  },
  titles: {
    color: "#fff",
    position: "relative",
    zIndex: "3 !important",
    textAlign: "center",
    paddingTop: "125px",
    paddingBottom: "125px",
    fontSize: "45px",
    lineHeight: "54px",
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
    objectFit: "cover",
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
