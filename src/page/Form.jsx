import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box {...css.form} className="container">
        <Flex gap={"84px"}>
          <Box>
            <Heading {...css.title}>Get in touch </Heading>
            <Text {...css.text}>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </Text>
            <input
              className="form-input"
              type="text"
              placeholder="Contact name"
            />
            <input className="form-input" type="text" placeholder="Street" />
            <input className="form-input" type="text" placeholder="City" />
            <input className="form-input" type="email" placeholder="E-mail" />
            <input
              className="form-input"
              type="tell"
              placeholder="Contact Phone"
            />
            <textarea
              placeholder="Let’s talk about your idea"
              name=""
              className="form-text"
              id=""></textarea>
            <Button {...css.button}>{t("Рассчитать")}</Button>
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.641822092032!2d69.2459091758749!3d41.316654971308886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1733997308438!5m2!1sen!2s"
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
    padding: "40px",
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
    fontSize: "46px",
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
