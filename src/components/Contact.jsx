import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ContactImage from "../assets/contact.jpg";
import OneIcon from "../assets/1.svg";
import TwoIcon from "../assets/2.svg";

function Contact() {
  return (
    <Box {...css.contact}>
      <Box className="container">
        <SimpleGrid gap={"60px"} columns={2}>
          <Box {...css.left}>
            <Box {...css.top}>
              <Heading {...css.title}>
                We are the Future of Cargo & Logistics
              </Heading>
              <Text {...css.text}>
                Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla
                a lobortis lectus, id volutpat magna. Morbi consequat porttitor
              </Text>
            </Box>
            <Flex align={"center"} gap={"12px"}>
              <Flex {...css.item}>
                <Image {...css.image} src={OneIcon} alt="OneIcon" />
                <Heading {...css.subname}>Optimized Cost</Heading>
              </Flex>
              <Flex {...css.item}>
                <Image {...css.image} src={TwoIcon} alt="TwoIcon" />
                <Heading {...css.subname}>Delivery on Time</Heading>
              </Flex>
            </Flex>
          </Box>
          <Box {...css.right}>
            <Heading {...css.name}>Request a Quote</Heading>
            <label htmlFor="name">
              Your Name:
              <input type="text" id="name" placeholder="Name" />
            </label>
            <label htmlFor="email">
              Your email:
              <input type="email" id="email" placeholder="Email" />
            </label>
            <label htmlFor="phone">
              Your Phone:
              <input type="tell" id="phone" placeholder="Phone" />
            </label>
            <Button type="submit" {...css.button}>
              Submit
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  contact: {
    backgroundImage: `url(${ContactImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "110px",
    paddingBottom: "120px",
    position: "relative",

    _before: {
      width: "100%",
      position: "absolute",
      content: "''",
      height: "100%",
      left: 0,
      top: 0,
      background: "rgba(6, 46, 57, 0.7)",
    },
  },
  top: {
    marginBottom: "55px",
    maxWidth: "800px",
  },
  left: {
    position: "relative",
    zIndex: "3",
  },
  title: {
    fontSize: "55px",
    lineHeight: "65px",
    color: "#fff",
    fontWeight: "700",
    margin: "20px 0",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "26px",
  },
  right: {
    backgroundColor: "#062E39",
    borderRadius: "3px",
    padding: "50px 55px 60px",
    maxWidth: "486px",
    position: "relative",
    zIndex: "3",
  },
  name: {
    color: "#fff",
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "25px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#062E39",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "30px",
    transition: "all 0.3s",
  },
  item: {
    alignItems: "center",
    marginBottom: "20px",
    flexDirection: "column",
    borderRadius: "2px",
    padding: "25px 35px",
    maxWidth: "200px",
    backgroundColor: "#062E39",
    width: "100%",
  },
  image: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
  subname: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "15px",
    textAlign: "center",
  },
};
