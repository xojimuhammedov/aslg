import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Question from "./components/Question";
import Services from "./components/Services";
import Statistic from "./components/Statistic";
import ContactPage from "./page/ContactPage";
import TariffPage from "./page/TariffPage";
import VacancyPage from "./page/VacancyPage";
import CompanyPage from "./page/CompanyPage";
import { Link, Image } from "@chakra-ui/react";
import Whatsapp from "./assets/Whatsapp";
import CallIcon from './assets/call-icon.png'

function App() {
  const handleCall = () => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion("tel:77753378595");
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Statistic />
              <Advantages />
              <Services />
              <Question />
              <Partner />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tariff" element={<TariffPage />} />
        <Route path="/vacancy" element={<VacancyPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <Footer />
      <Link {...css.call} onClick={handleCall} target="_blank" href={"tel:+77753378595"}>
         <Image w={'50px'} src={CallIcon} />
      </Link>
      <Link {...css.link} target="_blank" href="https://wa.me/+77753378595">
        <Whatsapp />
      </Link>
    </>
  );
}

export default App;

const css = {
  link: {
    position: "fixed",
    zIndex: "9999",
    top: "88%",
    left: {
      base: "85%",
      md: "93%",
    },
  },
  call:{
    position: "fixed",
    zIndex: "9999",
    top: "80%",
    left: {
      base: "85%",
      md: "93%",
    },
  }
};
