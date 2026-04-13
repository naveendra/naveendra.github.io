import type { JSX } from "react";

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-6">

        <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Senior Software Engineer
          </h3>
          <p className="text-gray-400">Softgravitas IT Solutions</p>
          <p className="mt-2 text-gray-300">
            Designed POS systems, implemented RBAC, and built scalable APIs.
          </p>
        </div>

      </div>
    </section>
  );
}