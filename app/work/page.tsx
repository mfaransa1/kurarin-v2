import Container from "@/components/container";
import Link from "next/link";

const projects = [
  {
    number: "01",
    client: "BoB Van Transfers",
    title: "A better digital experience for modern transport.",
    description:
      "A digital platform for a Nairobi-based transport company, designed to make airport transfers, hotel transfers and chauffeur services easier to discover and book.",
    category: "Transport · Digital Platform",
    status: "Live",
    href: "#",
    featured: true,
  },
  {
    number: "02",
    client: "SmartFix Interior",
    title: "Bringing an interior business into the digital age.",
    description:
      "A modern digital presence designed to communicate SmartFix Interior's work, services and brand while creating a stronger experience for prospective customers.",
    category: "Interior Design · Digital Experience",
    status: "Live",
    href: "#",
    featured: true,
  },
  {
    number: "03",
    client: "Project Juliana",
    title: "A more human way to access mental-health support.",
    description:
      "An AI-powered conversational product we're developing to create a more accessible and private first point of interaction for people seeking mental-health support.",
    category: "AI · Conversational Technology",
    status: "In development",
    href: "#",
    featured: true,
  },
  {
    number: "04",
    client: "School Management Platform",
    title: "One connected system for school operations.",
    description:
      "A software platform concept bringing admissions, finance, examinations, communication and day-to-day school operations into one connected environment.",
    category: "Education · Software",
    status: "Development",
    href: "#",
    featured: false,
  },
  {
    number: "05",
    client: "Business Automation System",
    title: "Turning repetitive work into connected workflows.",
    description:
      "An automation system designed to reduce manual operational processes, connect business data and help teams spend more time on meaningful work.",
    category: "Automation · Business Systems",
    status: "Development",
    href: "#",
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient glow */}

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
                Selected work
              </span>
            </div>

            {/* Heading */}

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
              Software built
              <br />
              for the real world.
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
              From business platforms and automation systems to emerging
              digital products, we build technology around real problems,
              real people and real organizations.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FEATURED WORK */}
      {/* ================================================== */}

      <section className="relative py-28 md:py-36 lg:py-44">
        <Container>
          <div className="mb-16 flex items-end justify-between gap-8">
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
                Projects
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
                Selected work.
              </h2>
            </div>
          </div>

          {/* Project list */}

          <div className="border-t border-[#E6EBF1]">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
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
      {/* JULIANA FEATURE */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        {/* Purple ambient glow */}

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
                Project Juliana is an AI-powered mental-health chatbot we're
                currently developing. The goal is to create a conversational
                experience that makes it easier for people to begin seeking
                support in a private, accessible and approachable way.
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
                It's an ongoing product exploration at the intersection of
                artificial intelligence, conversational design and human
                wellbeing.
              </p>
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
                {/* Ambient gradient */}

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

                {/* Chat interface concept */}

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
                          Conversational support
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
      {/* MORE WORK */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="max-w-[650px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              More work
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
              More systems.
              <br />
              More possibilities.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <Link
                  key={project.number}
                  href={project.href}
                  className="
                    group
                    rounded-3xl
                    border
                    border-[#E6EBF1]
                    bg-white
                    p-8
                    transition-all
                    duration-300

                    md:p-10

                    hover:-translate-y-1
                    hover:border-[#D8DCE5]
                    hover:shadow-[0_20px_60px_rgba(10,37,64,0.05)]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[12px]
                        font-medium
                        text-[#6B7C93]
                      "
                    >
                      {project.number}
                    </span>

                    <span
                      className="
                        text-[#6B7C93]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>

                  <p
                    className="
                      mt-12
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#635BFF]
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[27px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#0A2540]
                    "
                  >
                    {project.client}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-[1.7]
                      text-[#6B7C93]
                    "
                  >
                    {project.description}
                  </p>
                </Link>
              ))}
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