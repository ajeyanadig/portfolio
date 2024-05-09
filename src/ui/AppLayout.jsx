import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

function AppLayout() {
  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr] px-12 ">
        <Header />
        <main className="overflow-x-scroll text-neutral-200">
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

export default AppLayout;
