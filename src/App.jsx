import "./App.css";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
