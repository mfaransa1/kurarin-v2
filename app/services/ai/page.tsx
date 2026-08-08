import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "AI assistants",
    description:
      "Intelligent assistants that help customers and teams find information, complete tasks and interact with your systems.",
  },
  {
    number: "02",
    title: "AI chatbots",
    description:
      "Conversational experiences designed around real use cases rather than generic question-and-answer interfaces.",
  },
  {
    number: "03",
    title: "Knowledge systems",
    description:
      "Turn organizational documents and information into searchable, intelligent knowledge systems that people can actually use.",
  },
  {
    number: "04",
    title: "Document intelligence",
    description:
      "Extract, classify and organize information from documents to reduce manual processing and improve operational efficiency.",
  },
  {
    number: "05",
    title: "AI-powered workflows",
    description:
      "Combine artificial intelligence with business automation to handle repetitive decisions, classification and information processing.",
  },
  {
    number: "06",
    title: "AI integrations",
    description:
      "Connect intelligent capabilities to your existing applications, databases and business systems through practical integrations.",
  },
];

const projects = [
  {
    category: "AI · Intelligent Systems",
    title: "Project Juliana",
    description:
      "A digital mental wellness companion combining conversational AI, journaling, mindfulness, emotional awareness and crisis support in a private, locally relevant experience.",
    href: "/work/project-juliana",
  },
  {
    category: "AI · Knowledge",
    title: "Intelligent Knowledge Assistant",
    description:
      "A conversational knowledge interface designed to help teams find and interact with information more efficiently.",
    href: "/work",
  },
  {
    category: "AI · Automation",
    title: "Intelligent Workflow",
    description:
      "An AI-assisted workflow designed to classify information, reduce repetitive work and help teams act faster.",
    href: "/work",
  },
];

export default function AIPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="AI & Intelligent Systems"
        title="Practical intelligence for real problems."
        description="We build intelligent systems that combine AI with software, data and automation to solve meaningful problems for organizations and the people they serve."
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