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
              <Company />
              <Contact />
              <Blog />
              <Location />
              <News />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
