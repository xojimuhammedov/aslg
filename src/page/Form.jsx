import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  return (
    <Box pb={{ base: "36px" }}>
      <Box {...css.form} className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{
            base: "36px",
            lg: "84px",
          }}>
          <Box>
            <Heading {...css.title}>{t("Get in touch")}</Heading>
            <input
              className="form-input"
              type="text"
              placeholder={t("Ваше имя")}
            />
            <input
              className="form-input"
              type="text"
              placeholder={t("Country")}
            />
            <input className="form-input" type="text" placeholder={t("City")} />
            <input
              className="form-input"
              type="email"
              placeholder={t("E-mail")}
            />
            <input
              className="form-input"
              type="tell"
              placeholder={t("Ваш телефон")}
            />
            <textarea
              placeholder={t("Let’s talk about your idea")}
              name=""
              className="form-text"
              id=""></textarea>
            <Button {...css.button}>{t("Рассчитать")}</Button>
          </Box>
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.6019897284!2d76.94493577598072!3d43.264902471123165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e9be6e57019%3A0x108e2a6fe0c45cff!2sZhetysu!5e1!3m2!1sen!2s!4v1737521055654!5m2!1sen!2s"
            className="form-map"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Flex>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  form: {
    background: "#F6F6F6",
    borderRadius: "10px",
    padding: {
      base: "10px",
      lg: "40px",
    },
  },
  button: {
    background: "#0563AB",
    borderRadius: "18px",
    color: "white",
    height: "45px",
    border: "2px solid #0563AB",
    width: "100%",
    lineHeight: "normal",
    fontFamily: "Inter",
    marginTop: "25px",

    _hover: {
      background: "#0563AB",
    },
  },
  title: {
    fontSize: {
      base: "35px",
      lg: "46px",
    },
    lineHeight: "normal",
    letterSpacing: "0.46px",
    color: "#000000",
    fontWeight: "600",
  },
  text: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
    fontWeight: "400",
    letterSpacing: "0.14px",
  },
};


