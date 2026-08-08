import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "Business management systems",
    description:
      "Centralize the information, workflows and processes your organization relies on every day.",
  },
  {
    number: "02",
    title: "CRM & client management",
    description:
      "Give your teams a complete view of customers, interactions, opportunities and ongoing relationships.",
  },
  {
    number: "03",
    title: "Finance & billing systems",
    description:
      "Simplify invoicing, payments, financial records and reporting with systems built around your operations.",
  },
  {
    number: "04",
    title: "Inventory & operations",
    description:
      "Track stock, assets, orders and operational activity through a single connected platform.",
  },
  {
    number: "05",
    title: "Reporting & dashboards",
    description:
      "Turn operational data into clear dashboards that help teams understand what is happening and make better decisions.",
  },
  {
    number: "06",
    title: "Client & staff portals",
    description:
      "Create secure spaces where employees, customers and partners can access the information and services they need.",
  },
];

const projects = [
  {
    category: "Business Systems",
    title: "Business Management Platform",
    description:
      "A centralized platform bringing core business operations, information and reporting into one connected environment.",
    href: "/work",
  },
  {
    category: "Education",
    title: "School Management Platform",
    description:
      "A digital ecosystem connecting admissions, finance, examinations, communication and day-to-day school operations.",
    href: "/work",
  },
  {
    category: "Enterprise",
    title: "Client Portal",
    description:
      "A secure self-service environment designed to give customers faster access to information, services and account activity.",
    href: "/work",
  },
];

export default function BusinessSystemsPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Business Systems"
        title="Bring your business together."
        description="We build connected business systems that bring people, processes and information into one reliable digital environment."
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