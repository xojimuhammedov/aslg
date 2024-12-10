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

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Statistic />
      <Advantages />
      <Services />
      <Question />
      <Partner />
      <Footer />
    </>
  );
}

export default App;
