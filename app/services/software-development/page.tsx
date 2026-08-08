import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "Custom web applications",
    description:
      "Powerful web applications designed around your workflows, users and business requirements.",
  },
  {
    number: "02",
    title: "Business management systems",
    description:
      "Centralized platforms that bring operations, information and teams together in one place.",
  },
  {
    number: "03",
    title: "Customer portals",
    description:
      "Secure digital experiences that allow customers and partners to access information and services themselves.",
  },
  {
    number: "04",
    title: "APIs & integrations",
    description:
      "Connect the software you already use and create reliable data flows between systems.",
  },
  {
    number: "05",
    title: "Internal tools",
    description:
      "Purpose-built tools that eliminate inefficient spreadsheets, manual processes and disconnected workflows.",
  },
  {
    number: "06",
    title: "Legacy modernization",
    description:
      "Improve aging systems and processes without unnecessarily replacing everything from scratch.",
  },
];

const projects = [
  {
    category: "AI · Healthcare",
    title: "Project Juliana",
    description:
      "An intelligent conversational platform designed to provide accessible, human-centered support through technology.",
    href: "/work/project-juliana",
  },
  {
    category: "Business Systems",
    title: "Business Management Platform",
    description:
      "A centralized digital system designed to simplify operations, information management and reporting.",
    href: "/work",
  },
  {
    category: "Digital Infrastructure",
    title: "Client Portal",
    description:
      "A secure digital environment designed to improve communication, access and customer self-service.",
    href: "/work",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Software Development"
        title="Software built around your business."
        description="We design and build custom software that turns complex processes into simple, reliable digital experiences — from internal systems to customer-facing platforms."
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