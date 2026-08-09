import Link from "next/link";
import Container from "@/components/container";
import ProjectPreview from "@/components/project-preview";
import Reveal from "@/components/reveal";

const capabilities = [
  {
    number: "01",
    title: "Brand presentation",
    description:
      "A refined digital environment designed to communicate the quality, personality and professionalism behind SmartFix Interior.",
  },
  {
    number: "02",
    title: "Service discovery",
    description:
      "Services are organised into clear sections so prospective clients can quickly understand what SmartFix offers.",
  },
  {
    number: "03",
    title: "Visual storytelling",
    description:
      "The experience gives the work and interior solutions room to speak through strong visual hierarchy and presentation.",
  },
  {
    number: "04",
    title: "Customer enquiries",
    description:
      "Clear calls to action make it easier for interested visitors to move from exploring the work to starting a conversation.",
  },
];

const services = [
  "Digital strategy",
  "UX / UI design",
  "Responsive web development",
  "Service architecture",
  "Visual content presentation",
  "Deployment & optimisation",
];

export default function SmartFixInteriorPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Purple ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[750px]
            w-[750px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[140px]
          "
        />

        {/* Pink ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[18%]
            h-[300px]
            w-[300px]
            animate-[pulse_10s_ease-in-out_infinite]
            rounded-full
            bg-[#FF80B5]/[0.035]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10">
            <Reveal direction="left">
              <Link
                href="/work"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-medium
                  text-[#6B7C93]
                  transition-colors
                  hover:text-[#635BFF]
                "
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Back to work
              </Link>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
              {/* Main heading */}

              <div>
                <Reveal delay={100}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#635BFF]
                      "
                    >
                      SmartFix Interior
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#F6F9FC]
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        text-[#6B7C93]
                      "
                    >
                      Live
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <h1
                    className="
                      mt-7
                      max-w-[850px]
                      text-[50px]
                      font-semibold
                      leading-[0.94]
                      tracking-[-0.06em]
                      text-[#0A2540]

                      sm:text-[60px]

                      md:text-[76px]

                      lg:text-[88px]
                    "
                  >
                    Bringing an
                    <br />
                    interior business
                    <br />
                    into the digital age.
                  </h1>
                </Reveal>

                <Reveal delay={300}>
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
                    We designed and developed a modern digital presence for
                    SmartFix Interior, giving the business a stronger way to
                    showcase its work, communicate its services and connect
                    with prospective customers.
                  </p>
                </Reveal>
              </div>

              {/* Project details */}

              <Reveal direction="right" delay={300}>
                <div className="lg:pt-3">
                  <div className="border-t border-[#E6EBF1]">
                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Client
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          SmartFix Interior
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Location
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Industry
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Interior Design
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Type
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Commercial Website
                        </p>
                      </div>
                    </div>

                    <div className="py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Services
                      </p>

                      <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                        Strategy · UX/UI · Web Development · Digital
                        Presentation
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* LIVE WEBSITE */}
      {/* ================================================== */}

      <Reveal delay={100}>
        <ProjectPreview
          url="https://smartfixinterior.co.ke"
          title="SmartFix Interior — Live Website"
        />
      </Reveal>

      {/* ================================================== */}
      {/* PROJECT INTRO */}
      {/* ================================================== */}

      <section className="relative border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal direction="left">
              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#635BFF]
                  "
                >
                  The project
                </span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div>
                <h2
                  className="
                    max-w-[800px]
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[54px]
                  "
                >
                  When the work is visual, the digital experience should be
                  too.
                </h2>

                <div className="mt-8 max-w-[720px] space-y-6">
                  <p
                    className="
                      text-[17px]
                      leading-[1.8]
                      text-[#6B7C93]
                    "
                  >
                    SmartFix Interior needed a digital presence that could
                    communicate more than a list of services. Interior work
                    is inherently visual, so the website needed to create an
                    immediate sense of quality while making the business easy
                    to understand and contact.
                  </p>

                  <p
                    className="
                      text-[17px]
                      leading-[1.8]
                      text-[#6B7C93]
                    "
                  >
                    We approached the project around visual hierarchy,
                    simplicity and trust — creating an experience where
                    potential clients can discover the business, understand
                    its offering and take the next step naturally.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CHALLENGE */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        {/* Decorative gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -left-48
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-[#635BFF]/[0.045]
            blur-[130px]
          "
        />

        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal direction="left">
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
                  The challenge
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[440px]
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[50px]
                  "
                >
                  Make the quality visible before the conversation starts.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Present the brand",
                  description:
                    "Create an online presence that feels professional and aligned with the quality of the interior work.",
                },
                {
                  number: "02",
                  title: "Explain the offering",
                  description:
                    "Structure the services clearly so visitors can understand what SmartFix Interior can help them with.",
                },
                {
                  number: "03",
                  title: "Lead with visual impact",
                  description:
                    "Use composition, spacing and visual hierarchy to make the experience feel considered rather than generic.",
                },
                {
                  number: "04",
                  title: "Encourage enquiries",
                  description:
                    "Give prospective customers clear and natural pathways to move from browsing to getting in touch.",
                },
              ].map((item, index) => (
                <Reveal key={item.number} delay={index * 100}>
                  <div className="group border-t border-[#DDE3EA] pt-6">
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#635BFF]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {item.number}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0A2540]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-[1.75] text-[#6B7C93]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CAPABILITIES */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <Reveal>
            <div className="max-w-[720px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#635BFF]
                "
              >
                What we built
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
                A digital experience designed to let the work speak.
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#E6EBF1] bg-[#E6EBF1] md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.number} delay={index * 100}>
                <div
                  className="
                    group
                    h-full
                    bg-white
                    p-8
                    transition-all
                    duration-500

                    md:p-10

                    lg:p-12

                    hover:bg-[#FBFCFE]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#635BFF]">
                      {item.number}
                    </span>

                    <span
                      className="
                        text-[#D1D8E0]
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        group-hover:text-[#635BFF]
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#0A2540]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[440px] text-[16px] leading-[1.75] text-[#6B7C93]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* VISUAL STATEMENT */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36 lg:py-44">
        {/* Moving gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-60
            -left-40
            h-[500px]
            w-[500px]
            animate-[pulse_10s_ease-in-out_infinite]
            rounded-full
            bg-[#FF80B5]/10
            blur-[130px]
          "
        />

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-[900px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/50
                "
              >
                Design philosophy
              </span>

              <h2
                className="
                  mt-7
                  text-[44px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-white

                  md:text-[64px]

                  lg:text-[76px]
                "
              >
                Good digital design
                <br />
                should make{" "}
                <span className="text-[#A8A3FF]">
                  good work
                </span>{" "}
                easier to see.
              </h2>

              <p
                className="
                  mt-8
                  max-w-[620px]
                  text-[17px]
                  leading-[1.8]
                  text-white/60
                "
              >
                The goal wasn't to overwhelm visitors with technology. It
                was to create enough structure, visual confidence and clarity
                for the quality of SmartFix Interior's work to come through.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* OUR ROLE */}
      {/* ================================================== */}

      <section className="border-b border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal direction="left">
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
                  Our role
                </span>

                <h2
                  className="
                    mt-5
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[50px]
                  "
                >
                  From concept to live experience.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service} delay={index * 80}>
                  <div
                    className="
                      group
                      border-t
                      border-[#E6EBF1]
                      pt-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#6B7C93]">
                        0{index + 1}
                      </span>

                      <span
                        className="
                          text-[#D1D8E0]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-4 text-[17px] font-medium text-[#0A2540]">
                      {service}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* LIVE SITE CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden py-28 md:py-36">
        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[550px]
            w-[550px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[120px]
          "
        />

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-[820px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Visit the project
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
                "
              >
                See the experience
                <br />
                <span className="text-[#635BFF]">for yourself.</span>
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
                Explore the live SmartFix Interior website and see how we
                translated an interior business into a polished digital
                experience.
              </p>

              <a
                href="https://smartfixinterior.co.ke"
                target="_blank"
                rel="noopener noreferrer"
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
                Visit SmartFix Interior

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* NEXT PROJECT */}
      {/* ================================================== */}

      <section className="border-t border-[#E6EBF1] py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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
                  Next project
                </span>

                <h2
                  className="
                    mt-4
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[52px]
                  "
                >
                  WAA SACCO.
                </h2>

                <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-[#6B7C93]">
                  Software designed to bring structure and simplicity to
                  chama operations.
                </p>
              </div>

              <Link
                href="/work/waa-sacco"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-[#635BFF]
                "
              >
                View project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}