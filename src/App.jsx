import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Benefits from "./sections/Benefits.jsx";
import Uses from "./sections/Uses.jsx";
import DemoForm from "./sections/DemoForm.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Benefits />
      <Uses />
      <DemoForm />
      <Footer />
    </div>
  );
}
