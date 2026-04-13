import GalaxyBackground from "./components/GalaxyBackground";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#050510] text-white">
      {/* Animated galaxy canvas — fixed behind everything */}
      <GalaxyBackground />

      {/* Fixed left sidebar */}
      <Sidebar />

      {/* Scrollable main content */}
      <main
        className="relative z-10 flex-1 ml-[100px] h-screen overflow-y-auto"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(34,211,238,0.2) transparent" }}
      >
        <About />
        <Projects />
        <Blog />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
