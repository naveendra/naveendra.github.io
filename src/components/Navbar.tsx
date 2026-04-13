import type { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Naveendra</h1>
        <div className="space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}