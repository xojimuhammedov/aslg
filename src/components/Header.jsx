import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import HeaderBanner from "../assets/banner.png";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

function Header() {
  const { t } = useTranslation();

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeCountry(item) {
    setCountry(item);
  }
  function changeLocation(item) {
    setLocation(item);
  }

  const handleClear = () => {
    setNameValue("");
    setNumberValue("");
    setTextValue("");
    setCountry("");
    setLocation("");
  };


  const handleSubmit = async () => {
    if (!nameValue || !country || !location || !textValue || !numberValue) {
      toast.error(t("Iltimos, barcha maydonlarni to‘ldiring!"));
      return;
    }
    const webhookUrl = 'https://aslg.bitrix24.kz/rest/87/4u6erbzb8yic845a/crm.lead.add';

    const payload = {
      fields: {
        NAME: nameValue, // kerakli bo'lishi mumkin
        UfCrm1741934391679: country, // Откуда
        UfCrm1741934398438: location, // Куда
        UfCrm1745944160728: textValue, // Описание груза
        LAST_NAME: numberValue,
        Id: 87
      }
    };

    try {
      const response = await axios.post(webhookUrl, payload);
      console.log('Success:', response.data);
      toast.success(t("Ваше сообщение успешно отправлено!"));
      handleClear();
    } catch (error) {
      console.error('Error sending to Bitrix24:', error);
    }
  };


  return (
    <Box pb={{ base: "36px", lg: "90px" }}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          gap={{
            base: "36px",
            lg: "109px",
          }}>
          <Image {...css.images} src={HeaderBanner} alt="HeaderBanner" />
          <Box>
            <Heading {...css.title}>
              {t("Доставка любых возможностей с одним грузом за раз")}
            </Heading>

            <Heading {...css.name}>
              {t("Рассчитайте стоимость доставки")}
            </Heading>
            <SimpleGrid mt={"15px"} columns={{ base: 1, lg: 2 }} gap={"20px"}>
              <Input
                value={country}
                onChange={(e) => changeCountry(e.target.value)}
                {...css.input}
                placeholder={t("Откуда")}
                required
              />
              <Input
                value={location}
                onChange={(e) => changeLocation(e.target.value)}
                {...css.input}
                placeholder={t("Куда")}
                required
              />
            </SimpleGrid>
            <Input
              mt={"15px"}
              value={textValue}
              onChange={(e) => changeText(e.target.value)}
              required
              {...css.input}
              placeholder={t("Описание груза (вес, объем)")}
            />
            <SimpleGrid mt={"15px"} columns={{ base: 1, lg: 2 }} gap={"20px"}>
              <Input
                value={nameValue}
                onChange={(e) => changeName(e.target.value)}
                {...css.input}
                placeholder={t("Ваше имя")}
                required
              />
              <Input
                value={numberValue}
                onChange={(e) => changeNumber(e.target.value)}
                {...css.input}
                placeholder={t("Ваш телефон")}
                required
              />
            </SimpleGrid>
            <Button type="submit" onClick={handleSubmit} {...css.button}>
              {t("Рассчитать")}
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    fontSize: {
      base: "40px",
      lg: "68px",
    },
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  image: {
    cursor: "pointer",
  },
  name: {
    fontSize: {
      base: "22px",
      lg: "25px",
    },
    lineHeight: "normal",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
    marginTop: "30px",
  },
  input: {
    border: "1px solid #9C9C9C",
    borderRadius: "18px",
    height: "45px",
  },
  button: {
    background: "#0563AB",
    borderRadius: "18px",
    color: "white",
    height: "45px",
    border: "2px solid #0563AB",
    width: "100%",
    lineHeight: "normal",
    fontFamily: "Inter",
    marginTop: "25px",

    _hover: {
      background: "#0563AB",
    },
  },
  images: {
    height: {
      base: "450px",
      lg: "720px",
    },
    width: {
      base: "100%",
      lg: "650px",
    },
    objectFit: "cover",
    borderRadius: "10px",
  },
};
