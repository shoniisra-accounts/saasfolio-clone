import "./App.css";
import CTA from "./components/sections/CTA";
import Details from "./components/sections/Details";
import Hero from "./components/sections/Hero";
import Problems from "./components/sections/Problems";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <Problems />
      <Details />
      <CTA />
      <Testimonials />
    </>
  );
}

export default App;
