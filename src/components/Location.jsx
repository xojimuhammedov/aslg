import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Link,
  Image,
} from "@chakra-ui/react";

import LocationIcon from "../assets/location.svg";
import EmailIcon from "../assets/mail-open.svg";
import CallIcon from "../assets/call.svg";

function Location() {
  return (
    <Box p={"36px 0"} position={"relative"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.358490222487!2d69.17986998518067!3d41.28515389500681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8980da899b57%3A0xf96b53f14dac6e55!2sFarkhad%20Bazaar!5e0!3m2!1sen!2s!4v1731828545864!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        className="location-map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Box {...css.content}>
        <Accordion defaultValue={[0]}>
          <AccordionItem m={"15px 0"} value={"a"}>
            <AccordionButton {...css.title}>Location</AccordionButton>
            <AccordionPanel {...css.text}>
              <Flex flexDirection={"column"}>
                <Link {...css.link} href="/">
                  <Image src={LocationIcon} alt="Location" />
                  244, First Floor, Angeles
                </Link>
                <Link {...css.link} href="/about">
                  <Image src={CallIcon} alt="Call" />
                  (880)1247536548
                </Link>
                <Link {...css.link} href="/services">
                  <Image src={EmailIcon} alt="Email" />
                  info@example.com
                </Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Location;

const css = {
  content: {
    maxWidth: "415px",
    margin: "0 auto",
    backgroundColor: "#062e39",
    padding: "35px 50px 20px",
    position: "absolute",
    top: "50%",
    right: "16%",
    width: "100%",
    zIndex: 3,
    transform: "translateY(-50%)",
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "32px",
    cursor: "pointer",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
  },
  link: {
    color: "#fff",
    lineHeight: "26px",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};
