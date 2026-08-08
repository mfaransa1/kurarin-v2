import Container from "@/components/container";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Digital transformation",
    description:
      "Move critical business processes from disconnected tools and manual workflows into cohesive digital systems designed around how your organization actually operates.",
    outcomes: [
      "Modernize legacy workflows",
      "Connect disconnected systems",
      "Centralize business operations",
    ],
  },
  {
    number: "02",
    title: "Business automation",
    description:
      "Eliminate repetitive work and reduce operational friction by turning manual processes into intelligent, reliable workflows.",
    outcomes: [
      "Automate repetitive processes",
      "Reduce operational overhead",
      "Improve consistency and accuracy",
    ],
  },
  {
    number: "03",
    title: "Custom business systems",
    description:
      "Build software around your organization's unique requirements instead of forcing your operations into the limitations of off-the-shelf platforms.",
    outcomes: [
      "Internal business platforms",
      "Management systems",
      "Custom operational tools",
    ],
  },
  {
    number: "04",
    title: "Customer & partner platforms",
    description:
      "Create digital experiences that give customers, partners and teams a better way to interact with your organization.",
    outcomes: [
      "Customer portals",
      "Partner platforms",
      "Self-service experiences",
    ],
  },
  {
    number: "05",
    title: "Data & decision systems",
    description:
      "Turn scattered business information into useful visibility through centralized data, reporting and systems that help teams make better decisions.",
    outcomes: [
      "Business intelligence",
      "Operational dashboards",
      "Reporting systems",
    ],
  },
  {
    number: "06",
    title: "AI-powered solutions",
    description:
      "Apply artificial intelligence where it can create genuine value—from intelligent assistants and knowledge systems to automated decision support and workflow augmentation.",
    outcomes: [
      "AI assistants",
      "Intelligent workflows",
      "Knowledge systems",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the problem, not the technology. We learn how your organization works, where friction exists and what outcome matters most.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate the problem into a practical solution architecture, experience and implementation plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team turns the solution into reliable software and infrastructure, working iteratively so progress remains visible.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Launch is not the finish line. We help improve, maintain and extend the system as your organization grows.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient gradients */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[760px]
            w-[760px]
            rounded-full
            bg-[#635BFF]/[0.065]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[35%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#FF80B5]/[0.03]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[1000px]">
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
                Solutions
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[950px]
                text-[52px]
                font-semibold
                leading-[0.94]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[62px]
                md:text-[78px]
                lg:text-[92px]
              "
            >
              Technology that
              <br />
              solves real problems.
            </h1>

            {/* Intro */}

            <p
              className="
                mt-9
                max-w-[720px]
                text-[18px]
                leading-[1.75]
                text-[#6B7C93]

                md:text-[20px]
              "
            >
              Every organization has different challenges. We design and
              engineer digital solutions around the way your business works,
              helping teams operate more efficiently and create better
              experiences.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* INTRO / PHILOSOPHY */}
      {/* ================================================== */}

      <section className="py-28 md:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* Label */}

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
                The idea
              </span>
            </div>

            {/* Content */}

            <div className="max-w-[780px]">
              <h2
                className="
                  text-[38px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#0A2540]

                  md:text-[52px]
                "
              >
                Your business shouldn't have to adapt to your software.
              </h2>

              <div className="mt-8 space-y-6">
                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  Off-the-shelf software can be useful, but there are moments
                  when your organization needs something more specific.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  That's where Kurarin comes in. We combine software
                  engineering, automation, cloud infrastructure, data and
                  emerging technologies to create systems around your actual
                  needs.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  The goal isn't to add more technology. It's to use the right
                  technology to make something better.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* SOLUTION AREAS */}
      {/* ================================================== */}

      <section className="bg-[#F6F9FC] py-28 md:py-36 lg:py-44">
        <Container>
          <div className="max-w-[760px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              How we help
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
              Solutions for the
              <br />
              way businesses work.
            </h2>

            <p
              className="
                mt-7
                max-w-[650px]
                text-[17px]
                leading-[1.75]
                text-[#6B7C93]
              "
            >
              From transforming internal operations to creating entirely new
              digital products, we focus on the problems technology can help
              solve.
            </p>
          </div>

          {/* Solution list */}

          <div className="mt-20 border-t border-[#DDE3EA]">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="
                  grid
                  gap-10
                  border-b
                  border-[#DDE3EA]
                  py-12

                  md:grid-cols-[70px_1fr_0.8fr]
                  md:gap-12
                  md:py-16
                "
              >
                {/* Number */}

                <span
                  className="
                    text-[12px]
                    font-medium
                    tracking-[0.05em]
                    text-[#635BFF]
                  "
                >
                  {solution.number}
                </span>

                {/* Main */}

                <div>
                  <h3
                    className="
                      text-[28px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#0A2540]

                      md:text-[34px]
                    "
                  >
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[600px]
                      text-[16px]
                      leading-[1.75]
                      text-[#6B7C93]
                    "
                  >
                    {solution.description}
                  </p>
                </div>

                {/* Outcomes */}

                <div>
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#9AA6B2]
                    "
                  >
                    Typical outcomes
                  </span>

                  <div className="mt-5 space-y-3">
                    {solution.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="
                          flex
                          items-start
                          gap-3
                          text-[14px]
                          text-[#425466]
                        "
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#635BFF]" />

                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FEATURE / AI */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36 lg:py-44">
        {/* Gradient atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#635BFF]/20
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-64
            left-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FF80B5]/10
            blur-[130px]
          "
        />

        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
            {/* Label */}

            <div>
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                "
              >
                Emerging technology
              </span>

              <div className="mt-8">
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-[12px]
                    font-medium
                    text-white/70
                  "
                >
                  AI & Intelligent Systems
                </span>
              </div>
            </div>

            {/* Content */}

            <div className="max-w-[780px]">
              <h2
                className="
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-white

                  md:text-[58px]
                "
              >
                Make AI useful,
                <br />
                not just impressive.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-[17px]
                  leading-[1.8]
                  text-white/55
                "
              >
                AI should solve a meaningful problem. We explore practical
                applications of artificial intelligence including intelligent
                assistants, knowledge systems, workflow automation and
                decision-support tools.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-white
                "
              >
                Explore an AI project

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* APPROACH */}
      {/* ================================================== */}

      <section className="py-28 md:py-36 lg:py-44">
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
              Our approach
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
              From problem
              <br />
              to possibility.
            </h2>
          </div>

          <div className="mt-20 border-t border-[#E6EBF1]">
            {approach.map((item) => (
              <div
                key={item.number}
                className="
                  grid
                  gap-6
                  border-b
                  border-[#E6EBF1]
                  py-10

                  md:grid-cols-[70px_220px_1fr]
                  md:items-start
                  md:gap-10
                  md:py-14
                "
              >
                <span className="text-[12px] font-medium text-[#635BFF]">
                  {item.number}
                </span>

                <h3
                  className="
                    text-[24px]
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A2540]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    max-w-[600px]
                    text-[16px]
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

      {/* ================================================== */}
      {/* WHO THIS IS FOR */}
      {/* ================================================== */}

      <section className="bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
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
                Who we work with
              </span>

              <h2
                className="
                  mt-5
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[52px]
                "
              >
                Organizations
                <br />
                with something
                <br />
                to solve.
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p
                className="
                  text-[18px]
                  leading-[1.75]
                  text-[#425466]
                "
              >
                We work with growing businesses, established organizations,
                founders and teams that need technology to solve a real
                operational or customer problem.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="border-t border-[#DDE3EA] pt-6">
                  <h3 className="text-[20px] font-semibold text-[#0A2540]">
                    Growing businesses
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6B7C93]">
                    Build the systems and infrastructure needed to scale
                    without adding unnecessary complexity.
                  </p>
                </div>

                <div className="border-t border-[#DDE3EA] pt-6">
                  <h3 className="text-[20px] font-semibold text-[#0A2540]">
                    Established organizations
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6B7C93]">
                    Modernize operations, connect systems and improve digital
                    experiences.
                  </p>
                </div>

                <div className="border-t border-[#DDE3EA] pt-6">
                  <h3 className="text-[20px] font-semibold text-[#0A2540]">
                    Founders & innovators
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6B7C93]">
                    Turn an early idea into a working product that can be
                    tested, refined and grown.
                  </p>
                </div>

                <div className="border-t border-[#DDE3EA] pt-6">
                  <h3 className="text-[20px] font-semibold text-[#0A2540]">
                    Internal teams
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6B7C93]">
                    Extend engineering capabilities when an important project
                    requires additional expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden py-28 md:py-36 lg:py-44">
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
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-48
            left-[20%]
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
              Have a problem to solve?
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
                lg:text-[72px]
              "
            >
              Let's figure out
              <br />
              what's possible.
            </h2>

            <p
              className="
                mt-7
                max-w-[600px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              Tell us what you're trying to improve, build or solve. We'll
              help you work out the technology required to move forward.
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

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}