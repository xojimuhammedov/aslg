import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import PartnerImage from "../assets/partner.png";
import Slider from "react-slick";

import LogoOne from "../assets/logo1.png";
import LogoTwo from "../assets/logo2.png";
import LogoThree from "../assets/logo3.png";
import LogoFour from "../assets/logo4.jpg";
import LogoFive from "../assets/logo5.png";
import LogoSix from "../assets/logo6.jpg";
import LogoSeven from "../assets/logo7.jpg";
import LogoEight from "../assets/logo8.png";
import LogoNine from "../assets/logo9.png";
import LogoTen from "../assets/logo10.jpg";
import LogoEleven from "../assets/logo11.jpg";

function Partner() {
  const { t } = useTranslation();
  var settings = {
    speed: 4000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Box
      id="partner"
      background={"#EFF8FF"}
      p={{ base: "36px 0", lg: "90px 0" }}>
      <Box className="container">
        <Heading {...css.title}>{t("Наши партнеры")}</Heading>
        <Slider {...settings}>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoOne} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoTwo} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoThree} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoFour} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoFive} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoSix} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoSeven} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoEight} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoNine} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoTen} />
          </Box>
          <Box {...css.item}>
            <Image {...css.icon} src={LogoEleven} />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Partner;

const css = {
  subname: {
    color: "#0563AB",
    fontSize: "22px",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "30px",
  },
  title: {
    fontSize: {
      base: "30px",
      lg: "60px",
    },
    fontWeight: "600",
    lineHeight: "normal",
    color: "#000",
    letterSpacing: "0.6px",
    textAlign: "center",
    marginBottom: "36px",
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    height: "160px",
    cursor: "pointer",
    transition: "0.3s",

    _hover: {
      transform: "scale(1.1)",
    },
  },
  icon: {
    width: "100%",
    height: "120px",
    objectFit: "contain",
  },
};
