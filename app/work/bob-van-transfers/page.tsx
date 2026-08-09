import Link from "next/link";
import Container from "@/components/container";
import ProjectPreview from "@/components/project-preview";
import Reveal from "@/components/reveal";

export default function BobVanTransfersPage() {
  const challenges = [
    {
      number: "01",
      title: "Communicate the services",
      description:
        "Customers needed to quickly understand what BoB Van Transfers offers and which service was right for their journey.",
    },
    {
      number: "02",
      title: "Build trust",
      description:
        "Transport is a trust-driven purchase. The website needed to communicate professionalism and reliability from the first interaction.",
    },
    {
      number: "03",
      title: "Prioritise mobile",
      description:
        "Travellers are often searching for transport while on the move, making a responsive and easy-to-navigate experience essential.",
    },
    {
      number: "04",
      title: "Create clear actions",
      description:
        "The experience needed to move visitors naturally from discovering a service to getting in touch or making an enquiry.",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Service discovery",
      description:
        "Clear service categories and content help visitors quickly understand airport transfers, hotel transfers and chauffeur services.",
    },
    {
      number: "02",
      title: "Responsive experience",
      description:
        "The experience adapts across phones, tablets and desktops so customers can access the platform wherever they are.",
    },
    {
      number: "03",
      title: "Conversion-focused journeys",
      description:
        "Calls to action and contact pathways are positioned around the moments where customers are ready to take action.",
    },
    {
      number: "04",
      title: "Commercial presentation",
      description:
        "The visual system presents the business as a professional transport provider rather than simply listing available vehicles.",
    },
  ];

  const services = [
    "Digital strategy",
    "UX / UI design",
    "Responsive web development",
    "Content structure",
    "Conversion-focused design",
    "Deployment & optimisation",
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient purple glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[750px]
            w-[750px]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[15%]
            top-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#FF80B5]/[0.025]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10">
            {/* Back link */}

            <Reveal y={15}>
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

            {/* Project information */}

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
              {/* Main project intro */}

              <Reveal>
                <div>
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
                      BoB Van Transfers
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
                    A better digital
                    <br />
                    experience for
                    <br />
                    modern transport.
                  </h1>

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
                    We designed and developed a modern commercial web
                    platform for BoB Van Transfers, helping customers
                    discover, understand and enquire about airport transfers,
                    hotel transfers and chauffeur services in Nairobi.
                  </p>
                </div>
              </Reveal>

              {/* Project details */}

              <Reveal delay={0.15} y={25}>
                <div className="lg:pt-3">
                  <div className="border-t border-[#E6EBF1]">
                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Client
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          BoB Van Transfers
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
                          Transport
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
                        Strategy · UX/UI · Web Development · Responsive Design
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

      <Reveal y={50} delay={0.05}>
        <ProjectPreview
          url="https://bobvantransfers.co.ke"
          title="BoB Van Transfers — Live Website"
        />
      </Reveal>

      {/* ================================================== */}
      {/* OVERVIEW */}
      {/* ================================================== */}

      <section className="relative border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <Reveal>
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              {/* Label */}

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

              {/* Content */}

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
                  Turning a transport service into a stronger digital
                  experience.
                </h2>

                <div className="mt-8 max-w-[720px] space-y-6">
                  <p
                    className="
                      text-[17px]
                      leading-[1.8]
                      text-[#6B7C93]
                    "
                  >
                    BoB Van Transfers provides airport transfers, hotel
                    transfers and chauffeur-driven transport services in
                    Nairobi. The challenge was to create a digital presence
                    that communicated the business clearly while making it
                    easier for potential customers to understand the services
                    and take the next step.
                  </p>

                  <p
                    className="
                      text-[17px]
                      leading-[1.8]
                      text-[#6B7C93]
                    "
                  >
                    We approached the website as a commercial platform rather
                    than simply an online brochure. The experience was
                    designed around clarity, trust, mobile usability and clear
                    customer journeys.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* THE CHALLENGE */}
      {/* ================================================== */}

      <section className="bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Challenge heading */}

            <Reveal>
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
                    max-w-[420px]
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[50px]
                  "
                >
                  Make choosing transport feel simple.
                </h2>
              </div>
            </Reveal>

            {/* Challenge cards */}

            <div className="grid gap-10 md:grid-cols-2">
              {challenges.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.08} y={25}>
                  <div>
                    <span className="text-sm font-semibold text-[#635BFF]">
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
      {/* WHAT WE BUILT */}
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
                A digital platform designed around the customer journey.
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#E6EBF1] bg-[#E6EBF1] md:grid-cols-2">
            {features.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08} y={30}>
                <div
                  className="
                    h-full
                    bg-white
                    p-8

                    md:p-10

                    lg:p-12
                  "
                >
                  <span className="text-[12px] font-semibold text-[#635BFF]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#0A2540]">
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
      {/* TECHNOLOGY / SERVICES */}
      {/* ================================================== */}

      <section className="border-t border-[#E6EBF1] bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* Heading */}

            <Reveal>
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
                  From idea to live platform.
                </h2>
              </div>
            </Reveal>

            {/* Services */}

            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal key={service} delay={index * 0.07} y={20}>
                  <div className="border-t border-[#DDE3EA] pt-5">
                    <span className="text-[11px] font-medium text-[#6B7C93]">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-[17px] font-medium text-[#0A2540]">
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

      <section className="relative overflow-hidden border-t border-[#E6EBF1] py-28 md:py-36">
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

        <Container>
          <Reveal y={35}>
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
                See the platform
                <br />
                <span className="text-[#635BFF]">in action.</span>
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
                Explore the live BoB Van Transfers website and see how we
                translated a transport business into a modern digital
                experience.
              </p>

              <a
                href="https://bobvantransfers.co.ke"
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
                Visit BoB Van Transfers

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
          <Reveal y={25}>
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
                  SmartFix Interior.
                </h2>

                <p className="mt-4 max-w-[500px] text-[16px] leading-relaxed text-[#6B7C93]">
                  Bringing an interior business into the digital age.
                </p>
              </div>

              <Link
                href="/work/smartfix-interior"
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