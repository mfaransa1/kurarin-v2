import Container from "@/components/container";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "We design and build custom software around the way your organization actually operates — from internal systems to customer-facing platforms.",
    capabilities: [
      "Web applications",
      "Enterprise systems",
      "Client portals",
      "Internal platforms",
      "APIs & integrations",
    ],
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "We turn repetitive manual processes into connected digital workflows that save time, reduce errors and give your team room to focus on higher-value work.",
    capabilities: [
      "Workflow automation",
      "Internal tools",
      "Data processing",
      "Notifications",
      "System integrations",
    ],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "We build and manage the technical foundation behind reliable digital products, with infrastructure designed for security, performance and growth.",
    capabilities: [
      "Cloud deployment",
      "Infrastructure setup",
      "Database architecture",
      "Monitoring",
      "Performance & reliability",
    ],
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "We help turn ideas into useful digital products — from early concepts and MVPs to mature platforms that serve real customers.",
    capabilities: [
      "Product strategy",
      "UX & UI",
      "MVP development",
      "Web products",
      "Product iteration",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your organization, users, processes and the problem we're actually trying to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate the problem into a clear technical and product direction before writing unnecessary code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team develops, tests and iterates on the solution in focused stages so you can see progress throughout the process.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Launch isn't the end. We monitor, refine and improve the system as your organization and requirements evolve.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -right-64
            -top-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[15%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#FF80B5]/[0.025]
            blur-[110px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[900px]">
            {/* Eyebrow */}

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                What we do
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[900px]
                text-[48px]
                font-semibold
                leading-[0.96]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[58px]
                md:text-[72px]
                lg:text-[88px]
              "
            >
              Technology built
              <br />
              around your business.
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[680px]
                text-[18px]
                leading-[1.7]
                text-[#6B7C93]

                md:text-[20px]
              "
            >
              We design, build and improve the software systems, digital
              products and infrastructure that help organizations operate
              better and grow with confidence.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#635BFF]
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(99,91,255,0.2)]
                "
              >
                Start a project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#capabilities"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#E6EBF1]
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#425466]
                  transition-all
                  duration-300
                  hover:border-[#635BFF]
                  hover:text-[#635BFF]
                "
              >
                Explore capabilities
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CAPABILITIES */}
      {/* ================================================== */}

      <section
        id="capabilities"
        className="relative py-28 md:py-36 lg:py-44"
      >
        <Container>
          <div className="max-w-[680px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              Capabilities
            </span>

            <h2
              className="
                mt-5
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[56px]
              "
            >
              Built around real
              <br />
              business problems.
            </h2>

            <p
              className="
                mt-6
                max-w-[600px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              Technology is only useful when it solves something. Our work
              starts with your organization, not with a predetermined stack
              or template.
            </p>
          </div>

          {/* Service rows */}

          <div className="mt-20">
            {services.map((service) => (
              <div
                key={service.number}
                className="
                  group
                  border-t
                  border-[#E6EBF1]
                  py-12

                  md:py-16
                  lg:py-20
                "
              >
                <div
                  className="
                    grid
                    gap-8

                    lg:grid-cols-[80px_1.15fr_1fr]
                    lg:gap-12
                  "
                >
                  {/* Number */}

                  <div
                    className="
                      text-[13px]
                      font-medium
                      tracking-[0.05em]
                      text-[#6B7C93]
                      transition-colors
                      duration-300
                      group-hover:text-[#635BFF]
                    "
                  >
                    {service.number}
                  </div>

                  {/* Title */}

                  <div>
                    <h3
                      className="
                        max-w-[500px]
                        text-[32px]
                        font-semibold
                        leading-[1]
                        tracking-[-0.04em]
                        text-[#0A2540]

                        md:text-[42px]
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <div>
                    <p
                      className="
                        max-w-[520px]
                        text-[16px]
                        leading-[1.7]
                        text-[#6B7C93]

                        md:text-[17px]
                      "
                    >
                      {service.description}
                    </p>

                    {/* Capabilities */}

                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                      {service.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="
                            text-[12px]
                            font-medium
                            text-[#425466]
                          "
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="border-t border-[#E6EBF1]" />
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PROCESS */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="max-w-[720px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              How we work
            </span>

            <h2
              className="
                mt-5
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[56px]
              "
            >
              Clear thinking.
              <br />
              Focused execution.
            </h2>

            <p
              className="
                mt-6
                max-w-[600px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              Good software starts with understanding the problem. Our
              process keeps the work focused, transparent and connected to
              measurable outcomes.
            </p>
          </div>

          {/* Process */}

          <div
            className="
              mt-20
              grid
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#E6EBF1]
              bg-[#E6EBF1]

              md:grid-cols-2
            "
          >
            {process.map((step) => (
              <div
                key={step.number}
                className="
                  bg-white
                  p-8

                  md:p-10
                  lg:p-12
                "
              >
                <div
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.08em]
                    text-[#635BFF]
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-5
                    text-[25px]
                    font-semibold
                    tracking-[-0.03em]
                    text-[#0A2540]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[460px]
                    text-[15px]
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* TECHNOLOGY */}
      {/* ================================================== */}

      <section className="relative overflow-hidden py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
            <div>
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Technology
              </span>

              <h2
                className="
                  mt-5
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[56px]
                "
              >
                Modern tools.
                <br />
                Practical engineering.
              </h2>
            </div>

            <p
              className="
                max-w-[560px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              We choose technologies based on the problem, the environment
              and the long-term needs of the product — not because they're
              fashionable.
            </p>
          </div>

          {/* Technology list */}

          <div
            className="
              mt-16
              grid
              border-t
              border-[#E6EBF1]

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Cloud infrastructure",
              "APIs & integrations",
            ].map((technology) => (
              <div
                key={technology}
                className="
                  border-b
                  border-[#E6EBF1]
                  py-7
                  text-[15px]
                  font-medium
                  text-[#425466]
                "
              >
                {technology}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden border-t border-[#E6EBF1] py-28 md:py-36">
        {/* Ambient gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            left-[30%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#FF80B5]/[0.025]
            blur-[110px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[850px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              Have a project in mind?
            </span>

            <h2
              className="
                mt-6
                text-[44px]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#0A2540]

                md:text-[64px]
                lg:text-[76px]
              "
            >
              Let's build something
              <br />
              <span className="text-[#635BFF]">useful.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[560px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              Tell us what you're trying to build, improve or automate and
              let's explore what we can create together.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#635BFF]
                px-6
                py-3.5
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(99,91,255,0.2)]
              "
            >
              Start a conversation

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}