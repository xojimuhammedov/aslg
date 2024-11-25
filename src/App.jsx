import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Location from "./components/Location";
import News from "./components/News";
import Services from "./components/Services";
import ContactPage from "./page/ContactPage";
import TariffPage from "./page/TarifPage";
import ServiceAbout from "./page/ServiceAbout";
import AboutPage from "./page/AboutPage";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Services />
              <Aside />
              <Company />
              <Contact />
              {/* <Blog /> */}
              <Location />
              <News />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tariff" element={<TariffPage />} />
        <Route path="/service-about/:id" element={<ServiceAbout />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
