import "./App.css";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Location from "./components/Location";
import News from "./components/News";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Company />
      <Contact />
      <Blog />
      <Location />
      <News />
      <Footer />
    </>
  );
}

export default App;
