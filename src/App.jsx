import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import News from "./components/News";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Contact />
      <Blog />
      <News />
    </>
  );
}

export default App;
