import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function Question() {
  const { t } = useTranslation();
  return (
    <Box {...css.about}>
      <Box className="container">
        <Heading {...css.subname}>{t("FAQs")}</Heading>
        <Flex align={"center"} justify={"space-between"}>
          <Heading {...css.title}>{t("Часто задаваемые вопросы")}</Heading>
          <Text {...css.subtext}>
            {t(
              "Изучите наш подробный раздел часто задаваемых вопросов, который ответит на все ваши вопросы и поможет вам спланировать приятное и незабываемое путешествие."
            )}
          </Text>
        </Flex>
        <Accordion mt={"60px"} defaultIndex={[0]} allowMultiple>
          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Как забронировать поездку с помощью вашей туристической службы?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel {...css.text} pb={4}>
              Вы можете забронировать поездку через наш веб-сайт, позвонив на
              нашу горячую линию обслуживания клиентов или посетив один из наших
              офисов. Просто выберите пункт назначения, даты поездки и
              предпочитаемые
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem {...css.items}>
            <AccordionButton p={"20px"}>
              <Box as="h2" {...css.name} flex="1" textAlign="left">
                Как забронировать поездку с помощью вашей туристической службы?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel {...css.text} pb={4}>
              Вы можете забронировать поездку через наш веб-сайт, позвонив на
              нашу горячую линию обслуживания клиентов или посетив один из наших
              офисов. Просто выберите пункт назначения, даты поездки и
              предпочитаемые
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Question;

const css = {
  about: {
    padding: "90px 0",
  },
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
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
  items: {
    border: "1.5px solid rgba(162, 162, 162, 0.60)",
    borderRadius: "10px",
    width: "1024px",
    margin: "24px 0",
  },
  name: {
    color: "#000000",
    fontSize: "24px",
    lineHeight: "normal",
    letterSpacing: "0.24px",
    fontWeight: "500",
  },
  text: {
    color: "#676767",
    fontSize: "20px",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    fontWeight: "400",
    width: "600px",
  },
};
