import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box {...css.navbar}>
      <Box className="container">
        <Flex {...css.navbarMenu}>
          <Box {...css.left}>
            <Image
              {...css.image}
              src={
                "https://themejunction.net/html/logiland/demo/assets/images/logo/logo.png"
              }
              alt="ASLG Logo"
            />
          </Box>
          <Box width={"100%"}>
            <Flex {...css.top}>
              <Text {...css.date}>Mon - Sat: 8 am - 5 pm, Sunday: Closed</Text>
            </Flex>
            <Flex {...css.bottom}>
              <Link {...css.link} href="/">
                Home
              </Link>
              <Link {...css.link} href="/about">
                About
              </Link>
              <Link {...css.link} href="/services">
                Services
              </Link>
              <Link {...css.link} href="/contact">
                Contact
              </Link>
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
    width: "200px",
  },
  navbar: {
    position: "relative",
    zIndex: "9",
    paddingTop: "20px",
  },
  top: {
    backgroundColor: "#062E39",
    width: "100%",
    padding: "10px 0",
    borderRadius: "0 5px 0 0",
  },
  navbarMenu: {
    backgroundColor: "#fff",
    borderRadius: "5px",
  },
  date: {
    color: "#fff",
    paddingLeft: "40px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 20px",
  },
  bottom: {
    padding: "10px 0",
    gap: "25px",
  },
  link: {
    color: "#062e39",
    lineHeight: "26px",
    fontSize: "16px",
    fontWeight: "500",
  },
};
