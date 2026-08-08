import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "Cloud architecture",
    description:
      "Design reliable cloud environments around your applications, users, data and long-term growth.",
  },
  {
    number: "02",
    title: "Application deployment",
    description:
      "Deploy applications and services into production environments with repeatable and reliable processes.",
  },
  {
    number: "03",
    title: "Databases & storage",
    description:
      "Build secure, scalable data infrastructure for the applications and systems your organization depends on.",
  },
  {
    number: "04",
    title: "CI/CD & deployments",
    description:
      "Automate testing and deployment pipelines so your team can release improvements faster and with greater confidence.",
  },
  {
    number: "05",
    title: "Monitoring & reliability",
    description:
      "Monitor applications, infrastructure and performance so issues can be identified and addressed before they become major problems.",
  },
  {
    number: "06",
    title: "Security & backups",
    description:
      "Protect critical infrastructure and business data with sensible security controls, backups and recovery strategies.",
  },
];

const projects = [
  {
    category: "Cloud Infrastructure",
    title: "Production Application Infrastructure",
    description:
      "A reliable cloud environment designed to support modern applications, deployments, data and future growth.",
    href: "/work",
  },
  {
    category: "Digital Infrastructure",
    title: "Connected Business Platform",
    description:
      "Scalable infrastructure supporting a centralized business system and its users across multiple operational workflows.",
    href: "/work",
  },
  {
    category: "Deployment",
    title: "Modern Application Stack",
    description:
      "A streamlined deployment environment designed to make application releases more predictable and maintainable.",
    href: "/work",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Cloud Infrastructure"
        title="Infrastructure that keeps your software moving."
        description="We design, deploy and maintain reliable cloud infrastructure that gives your applications the performance, security and resilience they need to grow."
      />

      <ServiceCapabilities
        capabilities={capabilities}
      />

      <ServiceProcess />

      <ServiceWork projects={projects} />

      <ServiceCTA />
    </main>
  );
}