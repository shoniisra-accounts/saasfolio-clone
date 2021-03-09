import CTA from "./components/sections/CTA";
import Details from "./components/sections/Details";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Problems from "./components/sections/Problems";
import ProductBenefits from "./components/sections/ProductBenefits";
import SolutionProblem from "./components/sections/SolutionProblem";
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
      <Pricing />
      <SolutionProblem />
      <Footer />
    </>
  );
}

export default App;
