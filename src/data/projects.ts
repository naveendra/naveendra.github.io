export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  status: "template" | "production" | "open-source";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "clean-arch-template",
    title: "Clean Architecture .NET Template",
    description:
      "A production-ready .NET solution template implementing Clean Architecture with CQRS, Domain Events, and Repository pattern.",
    longDescription:
      "Designed as a reusable scaffold for enterprise .NET projects, this template enforces strict layer separation — Domain, Application, Infrastructure, and Presentation — with CQRS via MediatR, FluentValidation, and EF Core.",
    tags: [".NET 8", "CQRS", "MediatR", "EF Core", "Clean Architecture"],
    githubUrl: "https://github.com/naveendra",
    status: "template",
    highlights: [
      "Domain-driven layer separation",
      "CQRS with MediatR pipeline behaviors",
      "Generic repository with unit of work",
      "FluentValidation + global error handling",
    ],
  },
  {
    id: "enterprise-pos",
    title: "Enterprise POS Platform",
    description:
      "Scalable Point-of-Sale system built with ASP.NET Core and Angular, deployed across multiple business units.",
    longDescription:
      "Full-stack enterprise POS with JWT + RBAC security, optimized SQL transaction handling, and modular Angular frontend.",
    tags: ["ASP.NET Core", "Angular", "SQL Server", "JWT", "RBAC"],
    githubUrl: "https://github.com/naveendra",
    status: "production",
    highlights: [
      "High-volume transaction handling",
      "Secure JWT & role-based access control",
      "Modular Angular component library",
      "Multi-region deployment support",
    ],
  },
  {
    id: "sfa-offline-first",
    title: "Sales Force Automation — Offline-First",
    description:
      "Led design and delivery of 14+ enterprise SFA systems across multiple regions with offline-first capabilities.",
    longDescription:
      "Architected a sync framework enabling field agents to work fully offline and synchronize on connectivity, powering real-time dashboards and reporting.",
    tags: [".NET", "Sync Framework", "SQLite", "REST API", "SignalR"],
    githubUrl: "https://github.com/naveendra",
    status: "production",
    highlights: [
      "Offline-first architecture with Sync Framework",
      "Real-time data sync across distributed devices",
      "SignalR-powered live reporting dashboards",
      "Deployed in 14+ regional enterprise installations",
    ],
  },
  {
    id: "erp-integration",
    title: "ERP Integration Platform (SAP & M3)",
    description:
      "Integration middleware connecting enterprise systems with SAP and M3 ERP via API pipelines.",
    longDescription:
      "Custom middleware layer orchestrating bi-directional data flow between internal systems and SAP/M3 ERP, reducing manual data entry and increasing consistency.",
    tags: ["SAP", "M3 ERP", "ASP.NET Core", "REST", "Azure Service Bus"],
    githubUrl: "https://github.com/naveendra",
    status: "production",
    highlights: [
      "Bi-directional ERP data pipelines",
      "Azure Service Bus for async messaging",
      "Reduced manual operations by 60%",
      "Data consistency across 5+ integrated systems",
    ],
  },
];
