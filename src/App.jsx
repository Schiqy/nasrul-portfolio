
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approach from "./components/Approach";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <About />
      </main>
    </div>
  );
}

export default App;
