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

function App() {
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
              {/* <Partner /> */}
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tariff" element={<TariffPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
