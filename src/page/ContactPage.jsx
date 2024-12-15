import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../assets/contact.png";
import { useTranslation } from "react-i18next";
import Form from "./Form";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box p={"30px 0"}>
        <Box className="container">
          <Image src={ContactBanner} />
          <Heading {...css.subname}>{t("Contact")}</Heading>
          <Flex align={"center"} justify={"space-between"}>
            <Heading {...css.title}>{t("Reach Out to Us Anytime")}</Heading>
            <Text {...css.subtext}>
              {t(
                "We’re Here to Help. Whether You Have Questions or Need Assistance, Our Team is Ready to Provide Support and Ensure a Smooth Experience."
              )}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Form />
    </>
  );
}

export default ContactPage;

const css = {
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
    marginTop: "60px",
  },
  title: {
    fontSize: "65px",
    lineHeight: "80px",
    fontWeight: "600",
    letterSpacing: "0.65px",
    color: "#000000",
    width: "546px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
    color: "#000000",
    letterSpacing: "0.18px",
    width: "400px",
  },
};
