import "./App.css";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import { Testers } from "./sections/Testers/Testers";
import Why from "./sections/Why/Why";
import Pricing from "./sections/Pricing/Pricing";
import Footer from "./sections/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Home />
      <Why />
      <About />
      <Testers />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
