import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
} from "@chakra-ui/react";

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3...", disabled: true },
];

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
        <AccordionRoot collapsible defaultValue={["b"]}>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              m={"15px 0"}
              value={item.value}
              disabled={item.disabled}>
              <AccordionItemTrigger {...css.title}>
                {item.title}
              </AccordionItemTrigger>
              <AccordionItemContent {...css.text}>
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
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
};
