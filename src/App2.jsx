import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <div className=" grid h-full grid-rows-[auto_1fr_auto] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  px-12 text-neutral-200">
        <div>
          <Navbar />
        </div>
        <main>
          <Intro />
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
