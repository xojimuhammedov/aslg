import { Box, Button, Flex, Link, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink } from "react-router-dom";
import MenuButton from "../assets/MenuButton";
import { useTranslation } from "react-i18next";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  return (
    <>
      <Button {...css.button} onClick={onOpen}>
        <MenuButton />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.menuList}>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              pt={"48px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"36px"}>
              <Alink onClick={onClose} to="/">
                <Text {...css.link}>{t("Главная")}</Text>
              </Alink>
              <Link onClick={onClose} {...css.link} href="/">
                {t("About")}
              </Link>
              <Link onClick={onClose} {...css.link} href="#service">
                {t("Services")}
              </Link>
              <Alink onClick={onClose} to="/tariff">
                <Text {...css.link}>{t("Tariff")}</Text>
              </Alink>
              <Alink onClick={onClose} to="/contact">
                <Text {...css.link}>{t("Contact")}</Text>
              </Alink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarMenu;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  menuList: {
    borderRadius: "0",
    margin: "0",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent",
    width: "55px",
    display: {
      base: "block",
      md: "none",
    },
  },
};
