import type { JSX } from "react";

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Enterprise POS System</h3>
          <p className="text-gray-300 mt-2">
            Built scalable POS system with ASP.NET Core, Angular, and SQL Server.
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">SFA Platform</h3>
          <p className="text-gray-300 mt-2">
            Delivered 14+ SFA systems with offline-first architecture.
          </p>
        </div>

      </div>
    </section>
  );
}