import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Telegram from "../assets/tg.svg";
import Twitter from "../assets/twitter-new.svg";
import Language from "./Language";
import { Link as ALink } from "react-router-dom";
import LogoIcon from "../assets/logos.jpg";

function Navbar() {
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex {...css.navbarMenu}>
          <Box {...css.left}>
            <ALink to="/">
              <Image {...css.image} src={LogoIcon} alt="ASLG Logo" />
            </ALink>
          </Box>
          <Box width={"100%"}>
            <Flex {...css.top}>
              <Text {...css.date}>Mon - Sat: 8 am - 5 pm, Sunday: Closed</Text>
              <Flex gap={"8px"} align={"center"} ml={"auto"}>
                <Link href="/" {...css.social}>
                  <Image src={Instagram} alt="Instagram" />
                </Link>
                <Link href="/" {...css.social}>
                  <Image src={Facebook} alt="Facebook" />
                </Link>
                <Link href="/" {...css.social}>
                  <Image src={Linkedin} alt="Linkedin" />
                </Link>
                <Link href="/" {...css.social}>
                  <Image src={Telegram} alt="Telegram" />
                </Link>
                <Link mr={"12px"} href="/" {...css.social}>
                  <Image src={Twitter} alt="Twitter" />
                </Link>
              </Flex>
            </Flex>
            <Flex {...css.bottom}>
              <Flex gap={"24px"} align={"center"}>
                <ALink to="/">
                  <Text {...css.link}>Home</Text>
                </ALink>
                <ALink to="/about">
                  <Text {...css.link}>About</Text>
                </ALink>
                <ALink to="/services">
                  <Text {...css.link}>Services</Text>
                </ALink>
                <ALink to="/contact">
                  <Text {...css.link}>Contact</Text>
                </ALink>
                <ALink to="/tariff">
                  <Text {...css.link}>Tariff</Text>
                </ALink>
              </Flex>
              <Language />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  image: {
    width: "150px",
    height: "120px",
    objectFit: "cover",
  },
  navbar: {
    position: "relative",
    zIndex: "9",
    paddingTop: "20px",
  },
  top: {
    backgroundColor: "#0062AD",
    width: "100%",
    padding: "10px 15px",
    borderRadius: "0 5px 0 0",
    alignItems: "center",
  },
  navbarMenu: {
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
  date: {
    color: "#fff",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "15px 20px",
  },
  bottom: {
    justifyContent: "space-between",
    padding: "20px 15px",
  },
  link: {
    color: "#062e39",
    lineHeight: "26px",
    fontSize: "16px",
    fontWeight: "500",
  },
};
