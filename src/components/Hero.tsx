import { motion } from "framer-motion";
import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-xl"
      >
        <h1 className="text-5xl font-bold">
          Naveendra Wattegedara 👋
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Senior Software Engineer | .NET Architect | ERP Integrations
        </p>

        <p className="mt-4 text-gray-400 max-w-xl">
          Building scalable enterprise systems, POS platforms, and offline-first
          architectures with 8+ years of experience.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a className="px-6 py-2 bg-blue-500 rounded-lg">Hire Me</a>
          <a className="px-6 py-2 border border-white/30 rounded-lg">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}