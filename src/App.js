import "./App.css";
import CTA from "./components/sections/CTA";
import Details from "./components/sections/Details";
import Hero from "./components/sections/Hero";
import Problems from "./components/sections/Problems";
import ProductBenefits from "./components/sections/ProductBenefits";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <Problems />
      <Details />
      <CTA />
      <Testimonials />
      <ProductBenefits />
    </>
  );
}

export default App;
