import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "Enterprise software",
    description:
      "Purpose-built business systems designed around complex workflows, internal processes and organizational requirements.",
  },
  {
    number: "02",
    title: "Internal platforms",
    description:
      "Secure platforms that connect teams, information and workflows while reducing dependence on fragmented tools.",
  },
  {
    number: "03",
    title: "Customer portals",
    description:
      "Modern self-service experiences that allow customers and partners to access services, information and support.",
  },
  {
    number: "04",
    title: "Systems integration",
    description:
      "Connect existing business applications and data sources so critical information can move reliably across the organization.",
  },
  {
    number: "05",
    title: "Workflow automation",
    description:
      "Replace repetitive manual processes with reliable digital workflows that improve efficiency and visibility.",
  },
  {
    number: "06",
    title: "Cloud infrastructure",
    description:
      "Scalable cloud environments designed for performance, availability, security and long-term growth.",
  },
];

const challenges = [
  {
    title: "Disconnected systems",
    description:
      "Different departments often operate with different tools, databases and processes.",
  },
  {
    title: "Manual operations",
    description:
      "Repetitive work consumes valuable time and creates opportunities for errors.",
  },
  {
    title: "Limited visibility",
    description:
      "Decision-makers struggle when important information is spread across disconnected systems.",
  },
  {
    title: "Legacy technology",
    description:
      "Older platforms can become expensive to maintain and difficult to adapt to changing business needs.",
  },
];

const outcomes = [
  "Connected business operations",
  "Reduced manual processes",
  "Improved data visibility",
  "Better customer experiences",
  "Scalable infrastructure",
  "Stronger operational control",
];

export default function EnterprisePage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="
            pointer-events-none
            absolute
            -right-64
            -top-72
            h-[900px]
            w-[900px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.20)_0%,rgba(255,128,181,0.11)_38%,rgba(255,179,71,0.06)_55%,transparent_72%)]
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-80
            -left-60
            h-[600px]
            w-[600px]
            rounded-full
            bg-[radial-gradient(circle,rgba(0,212,255,0.07),transparent_70%)]
            blur-[90px]
          "
        />

        <Container>
          <div className="relative py-28 lg:py-36">
            <div className="max-w-[980px]">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#F6F9FC]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#425466]
                "
              >
                Solutions · Enterprise
              </span>

              <h1
                className="
                  mt-8
                  max-w-[960px]
                  text-[52px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  sm:text-[64px]
                  lg:text-[82px]
                "
              >
                Technology for
                <br />
                organizations that
                <br />
                <span className="gradient-text">
                  are built to grow.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-[740px]
                  text-[19px]
                  leading-[1.65]
                  text-[#425466]

                  md:text-[21px]
                "
              >
                Kurarin builds software, infrastructure and digital
                systems that help established organizations modernize
                operations, connect their teams and scale with confidence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Discuss your organization"
                  href="/contact"
                />

                <a
                  href="#capabilities"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#E6EBF1]
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#0A2540]
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-[#D5DAE0]
                  "
                >
                  Explore capabilities
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* ENTERPRISE CHALLENGE */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#635BFF]
                "
              >
                The enterprise challenge
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[54px]
                "
              >
                Complexity
                <br />
                shouldn't slow
                <br />
                you down.
              </h2>
            </div>

            <div>
              <p
                className="
                  max-w-[720px]
                  text-[20px]
                  leading-[1.65]
                  text-[#425466]
                "
              >
                As organizations grow, their technology environments
                naturally become more complicated. New departments,
                processes, customers and systems are added over time.
              </p>

              <p
                className="
                  mt-6
                  max-w-[720px]
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                The result can be fragmented systems, manual processes,
                duplicated information and technology that no longer
                reflects the way the organization operates.
              </p>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {challenges.map((item) => (
                  <div
                    key={item.title}
                    className="
                      rounded-[22px]
                      border
                      border-[#E6EBF1]
                      bg-white
                      p-6
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-[#0A2540]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-[1.7]
                        text-[#6B7C93]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* CAPABILITIES */}
      {/* ===================================================== */}

      <section
        id="capabilities"
        className="py-24 lg:py-32"
      >
        <Container>
          <div className="max-w-[760px]">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              What we build
            </p>

            <h2
              className="
                mt-6
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[58px]
              "
            >
              The technology layer
              <br />
              behind your business.
            </h2>

            <p
              className="
                mt-6
                max-w-[650px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              From a single internal platform to an interconnected
              enterprise environment, we design and build around the
              systems your organization actually needs.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  rounded-[26px]
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D9D5FF]
                  hover:shadow-[0_24px_70px_rgba(10,37,64,0.07)]
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#635BFF]
                    "
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F6F9FC]
                      text-[#635BFF]
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

                <h3
                  className="
                    mt-10
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A2540]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-[1.75]
                    text-[#6B7C93]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* DARK SYSTEMS SECTION */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[650px]
            w-[650px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.35),transparent_68%)]
            blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(255,128,181,0.18),transparent_70%)]
            blur-[80px]
          "
        />

        <Container>
          <div className="relative">
            <div className="max-w-[760px]">
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#A8A3FF]
                "
              >
                Connected systems
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-white

                  md:text-[58px]
                "
              >
                Make your technology
                <br />
                work as one system.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[650px]
                  text-lg
                  leading-[1.7]
                  text-white/55
                "
              >
                Your CRM shouldn't exist in isolation. Neither should
                finance, operations, customer service or internal
                platforms. We help connect the technology that keeps your
                organization moving.
              </p>
            </div>

            {/* System diagram */}

            <div className="relative mx-auto mt-20 max-w-[1050px]">
              <div
                className="
                  grid
                  gap-4

                  md:grid-cols-3
                "
              >
                <SystemCard
                  title="Customers"
                  items={[
                    "Customer portals",
                    "Self-service",
                    "Communication",
                  ]}
                />

                <SystemCard
                  featured
                  title="Kurarin platform layer"
                  items={[
                    "Business logic",
                    "Automation",
                    "Data",
                  ]}
                />

                <SystemCard
                  title="Operations"
                  items={[
                    "Internal systems",
                    "Finance",
                    "Reporting",
                  ]}
                />
              </div>

              <div
                className="
                  mt-4
                  grid
                  gap-4

                  md:grid-cols-2
                "
              >
                <SystemCard
                  title="Data & intelligence"
                  items={[
                    "Analytics",
                    "Dashboards",
                    "Decision support",
                  ]}
                />

                <SystemCard
                  title="Infrastructure"
                  items={[
                    "Cloud",
                    "Security",
                    "Reliability",
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* APPROACH */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#635BFF]
                "
              >
                Our approach
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[54px]
                "
              >
                Technology should
                <br />
                serve the business.
              </h2>
            </div>

            <div className="space-y-12">
              <Approach
                number="01"
                title="Understand"
                description="We start by understanding your organization, existing systems, workflows and the problems technology needs to solve."
              />

              <Approach
                number="02"
                title="Design"
                description="We translate those requirements into an architecture and experience that makes sense for the people who will actually use it."
              />

              <Approach
                number="03"
                title="Build"
                description="Our team develops the software, integrations and infrastructure required to turn the solution into a working system."
              />

              <Approach
                number="04"
                title="Evolve"
                description="Technology doesn't stop at launch. We build systems that can adapt as your organization, customers and requirements change."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* OUTCOMES */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#635BFF]
                "
              >
                The outcome
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[54px]
                "
              >
                Built for the
                <br />
                long term.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E6EBF1]
                    bg-white
                    p-5
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#635BFF]/10
                      text-xs
                      font-semibold
                      text-[#635BFF]
                    "
                  >
                    ✓
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#0A2540]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.14)_0%,rgba(255,128,181,0.08)_42%,transparent_70%)]
            blur-[90px]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-[850px] text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              Enterprise technology
            </p>

            <h2
              className="
                mt-6
                text-[42px]
                font-semibold
                leading-[1]
                tracking-[-0.055em]
                text-[#0A2540]

                md:text-[64px]
              "
            >
              Modernize the systems
              <br />
              behind your business.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[650px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              Tell us where your organization is today and where you
              want it to go. We'll help you determine what technology
              should come next.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                text="Talk to Kurarin"
                href="/contact"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

/* ========================================================= */
/* SYSTEM CARD */
/* ========================================================= */

function SystemCard({
  title,
  items,
  featured = false,
}: {
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`
        rounded-[24px]
        border
        p-7
        ${
          featured
            ? "border-[#635BFF]/30 bg-[#635BFF]/10"
            : "border-white/10 bg-white/[0.04]"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        <span
          className={`
            h-2
            w-2
            rounded-full
            ${featured ? "bg-[#A8A3FF]" : "bg-white/25"}
          `}
        />
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <span className="h-px w-4 bg-white/20" />

            <span className="text-sm text-white/45">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================= */
/* APPROACH */
/* ========================================================= */

function Approach({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-[70px_1fr]">
      <span
        className="
          text-sm
          font-semibold
          text-[#635BFF]
        "
      >
        {number}
      </span>

      <div>
        <h3
          className="
            text-2xl
            font-semibold
            tracking-tight
            text-[#0A2540]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            max-w-[620px]
            text-lg
            leading-[1.7]
            text-[#6B7C93]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}