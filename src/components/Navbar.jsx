import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Language from "./Language";

function Navbar() {
  const { t } = useTranslation();
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex justifyContent={"space-between"} align={"center"}>
          <Link to={"/"}>
            <Heading as={"h3"}>FLEXILOADS</Heading>
          </Link>
          <Flex align={"center"} gap={"32px"}>
            <Link to={"/"}>
              <Text {...css.link}>About</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Services</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Tariffs</Text>
            </Link>
            <Link to={"/"}>
              <Text {...css.link}>Contact</Text>
            </Link>
            <Language />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  navbar: {
    padding: "36px 0",
  },
};
