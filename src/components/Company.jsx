import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Company() {
  return (
    <Box p={"120px 0"}>
      <Box className="container">
        <Flex>
          <Box w={"50%"}>
            <Heading {...css.title}>Transportation Company</Heading>
            <Heading {...css.name}>
              We Provide Full Range Global Logistics
            </Heading>
            <Text {...css.text}>
              Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a
              lobortis lectus, id volutpat magna. Morbi consequat porttitor
              fermentum. Nulla vestibulum tincidunt viverra. Vestibulum accumsan
            </Text>
            <Heading {...css.serviceName}>Worldwide Service</Heading>
            <Text {...css.texts}>
              Lorem ipsum is simply velit anod ipas aliquet enean quis.
            </Text>
            <Heading {...css.serviceName}>Certified & Awward Winner</Heading>
            <Text {...css.texts}>
              Lorem ipsum is simply velit anod ipas aliquet enean quis.
            </Text>
          </Box>
          <Box {...css.right}>
            <Box {...css.box}>
              <Image
                src="https://themejunction.net/html/logiland/demo/assets/images/about/ab-1.jpg"
                {...css.image}
              />
            </Box>
            <Image
              src="https://themejunction.net/html/logiland/demo/assets/images/about/ab-2.jpg"
              {...css.images}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Company;

const css = {
  title: {
    fontSize: "22px",
    color: "#062e39",
    lineHeight: "36px",
  },
  serviceName: {
    fontSize: "22px",
    color: "#062e39",
    lineHeight: "36px",
    marginTop: "20px",
  },
  name: {
    fontSize: "55px",
    color: "#062e39",
    lineHeight: "66px",
    fontWeight: "700",
  },
  text: {
    color: "#7c858c",
    lineHeight: "26px",
    width: "570px",
    marginTop: "20px",
  },
  texts: {
    color: "#7c858c",
    lineHeight: "26px",
    width: "250px",
  },
  box: {
    position: "absolute",
    right: "0",
    top: "0",
    transition: "0.4s",
    width: "calc(100% - 225px)",

    _before: {
      content: "''",
      position: "absolute",
      top: "25%",
      left: "20%",
      width: "59%",
      height: "53%",
      transition: "0.4s",
      zIndex: 10,
      maxWidth: "250px",
      maxHeight: "350px",
      border: "2px dashed #ddd",
      transform: "scale(1)",
    },
  },
  image: {
    position: "relative",
    zIndex: "3 !important",
  },
  images: {
    position: "relative",
    zIndex: "3 !important",
    width: "60%",
    marginTop: "240px",
  },
  right: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "50%",
  },
};
