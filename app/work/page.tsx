import Container from "@/components/container";
import Link from "next/link";

const projects = [
  {
    number: "01",
    client: "Project Juliana",
    title: "Building technology with humanity in mind.",
    description:
      "An AI-powered mental wellness platform combining conversational support, emotion and crisis awareness, private journaling, mindfulness and self-assessment.",
    category: "AI · Mental Wellness · Product",
    status: "In development",
    href: "/work/project-juliana",
    featured: true,
  },
  {
    number: "02",
    client: "BoB Van Transfers",
    title: "A better digital experience for modern transport.",
    description:
      "A modern digital platform for a Nairobi-based transport company, helping customers discover airport transfers, hotel transfers and chauffeured transportation services.",
    category: "Transport · Web Platform",
    status: "Live",
    href: "/work/bob-van-transfers",
    featured: true,
  },
  {
    number: "03",
    client: "SmartFix Interior",
    title: "A digital presence built around the work.",
    description:
      "A visually focused website designed to showcase SmartFix Interior's services, work and brand while creating a stronger digital experience for prospective customers.",
    category: "Interior Design · Web",
    status: "Live",
    href: "/work/smartfix-interior",
    featured: true,
  },
  {
    number: "04",
    client: "WAA SACCO",
    title: "Bringing chama financial operations into one system.",
    description:
      "A custom software platform designed to centralize member management, contributions, financial records and administrative workflows for a Nairobi-based SACCO.",
    category: "FinTech · Business Systems",
    status: "Completed",
    href: "/work/waa-sacco",
    featured: true,
  },
  {
    number: "05",
    client: "Jobugi LMS",
    title: "A connected learning environment for a private school.",
    description:
      "A learning management system built to bring educational content, student access, teacher workflows and academic activities into a centralized digital environment.",
    category: "Education · LMS",
    status: "Completed",
    href: "/work/jobugi-lms",
    featured: true,
  },
];

export default function WorkPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
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
            top-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#FF80B5]/[0.025]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[920px]">
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
                Selected work
              </span>
            </div>

            <h1
              className="
                mt-7
                text-[50px]
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[60px]
                md:text-[76px]
                lg:text-[88px]
              "
            >
              Technology built
              <br />
              for the real world.
            </h1>

            <p
              className="
                mt-8
                max-w-[700px]
                text-[18px]
                leading-[1.7]
                text-[#6B7C93]

                md:text-[20px]
              "
            >
              We design and build software, digital platforms and business
              systems around real problems, real organizations and the people
              who use them.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PROJECTS */}
      {/* ================================================== */}

      <section className="relative py-28 md:py-36 lg:py-44">
        <Container>
          <div className="mb-16">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              Our projects
            </span>

            <h2
              className="
                mt-5
                text-[38px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[52px]
              "
            >
              Work that solves
              <br />
              real problems.
            </h2>
          </div>

          <div className="border-t border-[#E6EBF1]">
            {projects.map((project) => (
              <Link
                key={project.number}
                href={project.href}
                className="
                  group
                  block
                  border-b
                  border-[#E6EBF1]
                  py-12
                  transition-all
                  duration-300

                  md:py-16
                  lg:py-20
                "
              >
                <div
                  className="
                    grid
                    gap-10

                    lg:grid-cols-[80px_1fr_1fr_40px]
                    lg:items-start
                    lg:gap-12
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      text-[12px]
                      font-medium
                      tracking-[0.05em]
                      text-[#6B7C93]
                      transition-colors
                      duration-300
                      group-hover:text-[#635BFF]
                    "
                  >
                    {project.number}
                  </span>

                  {/* Client / Title */}

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-[12px]
                          font-semibold
                          uppercase
                          tracking-[0.1em]
                          text-[#635BFF]
                        "
                      >
                        {project.client}
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
                        {project.status}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-4
                        max-w-[560px]
                        text-[30px]
                        font-semibold
                        leading-[1.05]
                        tracking-[-0.04em]
                        text-[#0A2540]
                        transition-transform
                        duration-300

                        md:text-[40px]

                        group-hover:translate-x-1
                      "
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <div>
                    <p
                      className="
                        max-w-[500px]
                        text-[16px]
                        leading-[1.7]
                        text-[#6B7C93]

                        md:text-[17px]
                      "
                    >
                      {project.description}
                    </p>

                    <p
                      className="
                        mt-6
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.1em]
                        text-[#6B7C93]
                      "
                    >
                      {project.category}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      hidden
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E6EBF1]
                      text-[#425466]
                      transition-all
                      duration-300

                      lg:flex

                      group-hover:border-[#635BFF]
                      group-hover:bg-[#635BFF]
                      group-hover:text-white
                    "
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PROJECT JULIANA FEATURE */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-[#635BFF]/[0.06]
            blur-[130px]
          "
        />

        <Container>
          <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            {/* Content */}

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
                  Project Juliana
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-[#E6EBF1]
                    bg-white
                    px-3
                    py-1
                    text-[10px]
                    font-medium
                    text-[#6B7C93]
                  "
                >
                  In development
                </span>
              </div>

              <h2
                className="
                  mt-6
                  max-w-[700px]
                  text-[42px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  md:text-[60px]
                "
              >
                Building technology
                <br />
                with humanity in mind.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[17px]
                  leading-[1.75]
                  text-[#6B7C93]
                "
              >
                Project Juliana is a digital mental wellness companion
                designed to make basic mental health support more accessible,
                private and locally relevant.
              </p>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[15px]
                  leading-[1.75]
                  text-[#6B7C93]
                "
              >
                The platform combines an AI mental health companion,
                emotion and crisis awareness, private journaling, mindfulness
                and self-assessment tools. We're also exploring how Kenyan
                expressions, Sheng and local context can make the experience
                more natural and accessible.
              </p>

              <Link
                href="/work/project-juliana"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#635BFF]
                "
              >
                Explore Project Juliana

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Visual */}

            <div className="relative">
              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#E6EBF1]
                  bg-white
                  shadow-[0_30px_100px_rgba(10,37,64,0.06)]
                "
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[#635BFF]/10
                    blur-[80px]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    h-[240px]
                    w-[240px]
                    rounded-full
                    bg-[#FF80B5]/10
                    blur-[80px]
                  "
                />

                <div className="absolute inset-8 flex flex-col justify-between md:inset-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#635BFF]
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        J
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#0A2540]">
                          Juliana
                        </p>

                        <p className="text-[11px] text-[#6B7C93]">
                          Mental wellness companion
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="
                        ml-auto
                        max-w-[80%]
                        rounded-2xl
                        rounded-br-md
                        bg-[#F6F9FC]
                        p-4
                        text-sm
                        leading-relaxed
                        text-[#425466]
                      "
                    >
                      I've been feeling overwhelmed lately.
                    </div>

                    <div
                      className="
                        max-w-[85%]
                        rounded-2xl
                        rounded-bl-md
                        bg-[#635BFF]
                        p-4
                        text-sm
                        leading-relaxed
                        text-white
                      "
                    >
                      I'm here to listen. Would you like to tell me a little
                      more about what's been happening?
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="h-2 w-2 rounded-full bg-[#635BFF]/40" />
                      <span className="h-2 w-2 rounded-full bg-[#635BFF]/60" />
                      <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* WHAT THESE PROJECTS REPRESENT */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
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
                What we build
              </span>

              <h2
                className="
                  mt-5
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[54px]
                "
              >
                Different problems.
                <br />
                One approach.
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              <Capability
                title="Digital products"
                description="From early-stage ideas to working platforms, we turn concepts into useful digital products."
              />

              <Capability
                title="Business systems"
                description="We build software around the workflows that keep organizations running."
              />

              <Capability
                title="AI & intelligent systems"
                description="We explore practical applications of AI where it can create meaningful value."
              />

              <Capability
                title="Web experiences"
                description="High-quality websites and digital experiences designed around users and business goals."
              />

              <Capability
                title="Education technology"
                description="Learning platforms and school systems that connect students, educators and institutions."
              />

              <Capability
                title="Financial technology"
                description="Purpose-built systems for managing members, financial activity and organizational operations."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
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
              Have an idea?
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
              Your project could be
              <br />
              <span className="text-[#635BFF]">next.</span>
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
              Whether you're starting something new or improving an existing
              system, we'd like to hear what you're working on.
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

/* ================================================== */
/* CAPABILITY */
/* ================================================== */

function Capability({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mb-4 h-px w-8 bg-[#635BFF]" />

      <h3
        className="
          text-xl
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
          text-[15px]
          leading-[1.7]
          text-[#6B7C93]
        "
      >
        {description}
      </p>
    </div>
  );
}