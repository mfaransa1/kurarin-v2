import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "Workflow automation",
    description:
      "Replace repetitive manual processes with reliable workflows that move information and tasks automatically.",
  },
  {
    number: "02",
    title: "System integrations",
    description:
      "Connect the tools your organization already uses so information can move between systems without unnecessary manual work.",
  },
  {
    number: "03",
    title: "Approvals & notifications",
    description:
      "Automate approvals, alerts, reminders and escalations so important actions don't get lost in email or spreadsheets.",
  },
  {
    number: "04",
    title: "Document automation",
    description:
      "Generate, process and route documents automatically, reducing administrative work and improving consistency.",
  },
  {
    number: "05",
    title: "Automated reporting",
    description:
      "Collect operational data automatically and turn it into timely reports and dashboards for your teams.",
  },
  {
    number: "06",
    title: "AI-powered workflows",
    description:
      "Combine automation with intelligent systems to classify information, extract data and assist teams with repetitive decisions.",
  },
];

const projects = [
  {
    category: "Automation",
    title: "Business Workflow Platform",
    description:
      "A connected workflow system designed to reduce repetitive administrative work and give teams better visibility across operations.",
    href: "/work",
  },
  {
    category: "AI",
    title: "Project Juliana",
    description:
      "An intelligent conversational system demonstrating how AI can become part of a practical, human-centered digital workflow.",
    href: "/work/project-juliana",
  },
  {
    category: "Integrations",
    title: "Connected Operations",
    description:
      "Integrated business processes that allow information to move between systems without unnecessary manual intervention.",
    href: "/work",
  },
];

export default function AutomationPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Automation"
        title="Make your business move without the manual work."
        description="We design automated workflows that connect your systems, eliminate repetitive tasks and give your team more time to focus on work that actually matters."
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