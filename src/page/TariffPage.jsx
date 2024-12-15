import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ContactBanner from "../assets/contact.png";
import { useTranslation } from "react-i18next";
import TarifForm from "./TarifForm";

function TariffPage() {
  const { t } = useTranslation();
  return (
    <>
      <Box p={"30px 0"}>
        <Box className="container">
          <Image src={ContactBanner} />
          <Heading {...css.subname}>{t("Tariff")}</Heading>
          <Flex align={"center"} justify={"space-between"}>
            <Heading {...css.title}>{t("Flexible Pricing Options")}</Heading>
            <Text {...css.subtext}>
              {t(
                "We Simplify Logistic Shipping, Making It Easier and More Straightforward. By Combining Exceptional Service with Advanced Technology, We Ensure Efficiency in Every Step"
              )}
            </Text>
          </Flex>
        </Box>
      </Box>
      <TarifForm />
    </>
  );
}

export default TariffPage;

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
    width: "560px",
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
