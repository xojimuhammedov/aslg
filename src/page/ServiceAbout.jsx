import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { serviceData } from "../data";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function ServiceAbout() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const serviceAbout = serviceData?.find((item) => item?.id === Number(id));
  return (
    <>
      <Box backgroundImage={`url(${serviceAbout.image})`} {...css.service}>
        <Navbar />
        <Box className="container">
          <Heading {...css.title}>
            {serviceAbout[`title_${i18n?.language}`]}
          </Heading>
        </Box>
      </Box>
      <Box p={"48px 0"} className="container">
        <Heading {...css.name}>
          {serviceAbout[`name_${i18n?.language}`]}
        </Heading>
        <Text
          {...css.text}
          dangerouslySetInnerHTML={{
            __html: serviceAbout[`text_${i18n?.language}`],
          }}
        />
      </Box>
    </>
  );
}

export default ServiceAbout;

const css = {
  service: {
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
    height: "80vh",

    _before: {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(6, 46, 57, 0.5)",
    },
  },
  title: {
    color: "#fff",
    position: "relative",
    zIndex: "3 !important",
    textAlign: "center",
    marginTop: "125px",
    fontSize: "45px",
    lineHeight: "54px",
  },
  name: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#062e39",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    color: "#111",
    lineHeight: "26px",
    marginBottom: "10px",
  },
};
