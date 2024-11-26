import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { serviceData } from "../data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Services() {
  const { t, i18n } = useTranslation();
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>{t("Logistic & Transport")}</Heading>
        <SimpleGrid mt={"48px"} columns={3} gap={"24px"}>
          {serviceData.map((item, index) => (
            <Link key={index} to={`/service-about/${item.id}`}>
              <Box backgroundImage={`url(${item.image})`} {...css.box}>
                <Box {...css.content}>
                  <Heading {...css.name}>
                    {item[`title_${i18n?.language}`]}
                  </Heading>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  title: {
    fontSize: "55px",
    fontWeight: "700",
    lineHeight: "65px",
    color: "#1670BB",
    textAlign: "center",
  },
  box: {
    // backgroundImage: `url(${ServiceOne})`,
    position: "relative",
    overflow: "hidden",
    borderRadius: "3px",
    minHeight: "422px",
    display: "flex",
    alignItems: "end",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    _before: {
      background: "rgba(6, 46, 57, 0.5)",
      borderRadius: "8px 8px 0 0",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: "0",
      bottom: "0",
      content: "''",
      transition: "all 400ms ease-out 0s",
    },
  },
  name: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "24px",
  },
  content: {
    padding: "35px 40px",
    transition: "0.4s",
    zIndex: "3",
  },
  text: {
    color: "#fff",
  },
};
