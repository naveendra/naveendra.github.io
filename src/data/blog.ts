export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  githubUrl?: string;
  readingTime: string;
  series?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "clean-arch-layers",
    title: "Clean Architecture: Breaking Down the Layers",
    date: "2026-04-10",
    summary:
      "A deep dive into how Domain, Application, Infrastructure, and Presentation layers communicate without coupling — and why it matters for long-lived enterprise software.",
    tags: ["Clean Architecture", ".NET", "Architecture"],
    githubUrl: "https://github.com/naveendra",
    readingTime: "8 min",
    series: "Clean Architecture Series",
  },
  {
    id: "cqrs-mediatr",
    title: "CQRS with MediatR: Commands, Queries & Pipeline Behaviors",
    date: "2026-04-07",
    summary:
      "How I wire up CQRS in .NET using MediatR, with pipeline behaviors for logging, validation, and performance monitoring — all without touching business logic.",
    tags: ["CQRS", "MediatR", ".NET 8", "Architecture"],
    githubUrl: "https://github.com/naveendra",
    readingTime: "10 min",
    series: "Clean Architecture Series",
  },
  {
    id: "offline-first-sync",
    title: "Offline-First Systems: Designing for Disconnected Reality",
    date: "2026-03-28",
    summary:
      "Lessons from building 14+ offline-capable SFA systems: conflict resolution strategies, sync protocols, and the engineering tradeoffs no one talks about.",
    tags: ["Offline-First", "Sync", "Architecture", "Mobile"],
    readingTime: "12 min",
  },
  {
    id: "domain-events",
    title: "Domain Events & the Art of Decoupled Side Effects",
    date: "2026-03-15",
    summary:
      "Why domain events are the cleanest way to handle side effects in DDD — and how to implement them in .NET without turning your aggregates into event buses.",
    tags: ["DDD", "Domain Events", ".NET", "Clean Architecture"],
    githubUrl: "https://github.com/naveendra",
    readingTime: "9 min",
    series: "Clean Architecture Series",
  },
];
