import ServiceHero from "@/components/services/service-hero";
import ServiceCapabilities from "@/components/services/service-capabilities";
import ServiceProcess from "@/components/services/service-process";
import ServiceWork from "@/components/services/service-work";
import ServiceCTA from "@/components/services/service-cta";

const capabilities = [
  {
    number: "01",
    title: "Product strategy",
    description:
      "Turn an idea into a clear product direction by defining the users, problems, features and technical requirements that matter.",
  },
  {
    number: "02",
    title: "UX & interface design",
    description:
      "Create thoughtful digital experiences that make complex products feel simple, intuitive and enjoyable to use.",
  },
  {
    number: "03",
    title: "MVP development",
    description:
      "Build focused first versions that allow you to validate an idea, reach users and learn before investing heavily.",
  },
  {
    number: "04",
    title: "Web applications",
    description:
      "Develop polished, scalable applications that combine strong user experiences with reliable technical foundations.",
  },
  {
    number: "05",
    title: "Digital platforms",
    description:
      "Build products that connect users, organizations, data and services through a single digital experience.",
  },
  {
    number: "06",
    title: "Product evolution",
    description:
      "Continue improving your product after launch with new capabilities, performance improvements and ongoing technical support.",
  },
];

const projects = [
  {
    category: "AI · Digital Product",
    title: "Project Juliana",
    description:
      "A human-centered conversational platform exploring how intelligent technology can create more accessible digital experiences.",
    href: "/work/project-juliana",
  },
  {
    category: "Digital Product",
    title: "Customer Experience Platform",
    description:
      "A modern digital environment designed to simplify how organizations interact with and serve their customers.",
    href: "/work",
  },
  {
    category: "Web Application",
    title: "Business Operations Platform",
    description:
      "A purpose-built application bringing essential business workflows and information into one connected experience.",
    href: "/work",
  },
];

export default function DigitalProductsPage() {
  return (
    <main>
      <ServiceHero
        eyebrow="Digital Products"
        title="Turn ideas into products people use."
        description="We help organizations turn promising ideas into useful digital products — from early concepts and MVPs to polished platforms built for long-term growth."
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