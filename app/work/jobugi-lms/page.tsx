import Link from "next/link";
import Container from "@/components/container";
import Reveal from "@/components/reveal";

const capabilities = [
  {
    number: "01",
    title: "Learning management",
    description:
      "A central environment for organising learning materials, activities and digital classroom workflows.",
  },
  {
    number: "02",
    title: "Student experience",
    description:
      "A structured interface designed to give students a clearer way to access learning content and stay connected with their coursework.",
  },
  {
    number: "03",
    title: "Teacher workflows",
    description:
      "Tools designed around the everyday needs of teachers, from managing learning content to keeping track of student activity.",
  },
  {
    number: "04",
    title: "Centralised administration",
    description:
      "A connected platform that brings important academic processes into one manageable digital environment.",
  },
];

const platformFeatures = [
  "Course & subject management",
  "Student accounts",
  "Teacher accounts",
  "Learning materials",
  "Assignments & activities",
  "Academic workflows",
  "Role-based access",
  "Responsive interface",
];

export default function JobugiLMSPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient purple */}

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

        {/* Secondary glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[18%]
            top-[18%]
            h-[280px]
            w-[280px]
            animate-[pulse_10s_ease-in-out_infinite]
            rounded-full
            bg-[#FF80B5]/[0.03]
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
              {/* Heading */}

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
                      Jobugi LMS
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
                      Education
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
                    Bringing the
                    <br />
                    classroom
                    <br />
                    online.
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
                    Jobugi LMS is a learning management platform designed for
                    a private school, bringing students, teachers and learning
                    workflows into a connected digital environment.
                  </p>
                </Reveal>
              </div>

              {/* Details */}

              <Reveal direction="right" delay={300}>
                <div className="lg:pt-3">
                  <div className="border-t border-[#E6EBF1]">
                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Client
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Jobugi
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Sector
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Education
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Product
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          LMS Platform
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Users
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Students & Staff
                        </p>
                      </div>
                    </div>

                    <div className="py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Focus
                      </p>

                      <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                        Learning · Administration · Digital Classrooms
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
      {/* PRODUCT VISUAL */}
      {/* ================================================== */}

      <section className="relative px-4 pb-28 md:px-8 md:pb-36">
        <Container>
          <Reveal delay={150}>
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#E6EBF1]
                bg-[#F6F9FC]
                shadow-[0_30px_100px_rgba(10,37,64,0.06)]
              "
            >
              {/* Background glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[400px]
                  w-[400px]
                  animate-[pulse_8s_ease-in-out_infinite]
                  rounded-full
                  bg-[#635BFF]/[0.08]
                  blur-[100px]
                "
              />

              <div className="relative p-5 md:p-10 lg:p-14">
                {/* Browser chrome */}

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E6EBF1]
                    bg-white
                    shadow-[0_25px_80px_rgba(10,37,64,0.08)]
                  "
                >
                  {/* Top bar */}

                  <div className="flex h-12 items-center gap-2 border-b border-[#E6EBF1] px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />

                    <div className="ml-5 hidden h-6 max-w-[360px] flex-1 rounded-md bg-[#F6F9FC] sm:block" />
                  </div>

                  {/* Dashboard */}

                  <div className="grid min-h-[480px] lg:grid-cols-[190px_1fr]">
                    {/* Sidebar */}

                    <div className="hidden border-r border-[#E6EBF1] bg-[#FBFCFE] p-5 lg:block">
                      <div className="h-7 w-24 rounded-md bg-[#635BFF]/10" />

                      <div className="mt-10 space-y-4">
                        <div className="h-8 rounded-lg bg-[#635BFF]/10" />
                        <div className="h-8 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-8 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-8 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-8 rounded-lg bg-[#F6F9FC]" />
                      </div>
                    </div>

                    {/* Main content */}

                    <div className="p-6 md:p-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-3 w-20 rounded bg-[#E6EBF1]" />

                          <div className="mt-3 h-7 w-52 rounded bg-[#0A2540]/10" />
                        </div>

                        <div className="h-9 w-9 rounded-full bg-[#635BFF]/10" />
                      </div>

                      {/* Stats */}

                      <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                          ["Courses", "12"],
                          ["Students", "248"],
                          ["Activities", "36"],
                        ].map(([label, value], index) => (
                          <div
                            key={label}
                            className="
                              rounded-2xl
                              border
                              border-[#E6EBF1]
                              bg-white
                              p-5
                              transition-all
                              duration-500
                              hover:-translate-y-1
                              hover:shadow-[0_15px_40px_rgba(10,37,64,0.06)]
                            "
                            style={{
                              animationDelay: `${index * 150}ms`,
                            }}
                          >
                            <p className="text-xs text-[#6B7C93]">
                              {label}
                            </p>

                            <p className="mt-3 text-2xl font-semibold tracking-tight text-[#0A2540]">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Course list */}

                      <div className="mt-8">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-[#0A2540]">
                            Recent courses
                          </p>

                          <span className="text-xs text-[#635BFF]">
                            View all
                          </span>
                        </div>

                        <div className="mt-4 space-y-3">
                          {[
                            "Mathematics",
                            "English",
                            "Science",
                          ].map((course, index) => (
                            <div
                              key={course}
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                border
                                border-[#E6EBF1]
                                p-4
                                transition-all
                                duration-300
                                hover:translate-x-1
                              "
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-[#635BFF]/10
                                    text-xs
                                    font-semibold
                                    text-[#635BFF]
                                  "
                                >
                                  0{index + 1}
                                </div>

                                <p className="text-sm font-medium text-[#0A2540]">
                                  {course}
                                </p>
                              </div>

                              <span className="text-xs text-[#6B7C93]">
                                Active
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PROJECT */}
      {/* ================================================== */}

      <section className="border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal direction="left">
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
                  Education is more than content. It's a system of people,
                  processes and learning.
                </h2>

                <div className="mt-8 max-w-[720px] space-y-6">
                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    Jobugi LMS was approached as a product rather than simply
                    another school website. The platform needed to support
                    the different roles involved in learning while remaining
                    approachable enough for everyday use.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    That meant thinking about the experience from multiple
                    perspectives — students accessing learning, teachers
                    managing their work and administrators maintaining the
                    wider system.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CAPABILITIES */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
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
          <div className="relative z-10">
            <Reveal>
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
                  Platform capabilities
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
                  One platform.
                  <br />
                  Different experiences.
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
                          duration-300
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
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FEATURE GRID */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
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
                  Inside the platform
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
                  Built around the everyday school workflow.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {platformFeatures.map((feature, index) => (
                <Reveal key={feature} delay={index * 70}>
                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-t
                      border-[#E6EBF1]
                      py-5
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
                        bg-[#F6F9FC]
                        text-[10px]
                        font-semibold
                        text-[#635BFF]
                        transition-all
                        duration-300
                        group-hover:bg-[#635BFF]
                        group-hover:text-white
                      "
                    >
                      ✓
                    </span>

                    <span className="text-[15px] font-medium text-[#425466] transition-colors duration-300 group-hover:text-[#0A2540]">
                      {feature}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* STATEMENT */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36 lg:py-44">
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

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-[900px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                The idea
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
                Technology should make
                <br />
                learning{" "}
                <span className="text-[#A8A3FF]">
                  easier to organise.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-[650px]
                  text-[17px]
                  leading-[1.8]
                  text-white/60
                "
              >
                The value of an LMS isn't simply putting lessons online. It's
                creating a connected system that helps people find what they
                need, understand what comes next and keep the learning
                process moving.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden border-b border-[#E6EBF1] py-28 md:py-36">
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
                Education technology
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
                Better systems create
                <br />
                <span className="text-[#635BFF]">
                  better learning experiences.
                </span>
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
                Jobugi LMS is an example of how we approach software
                development around the real workflows of the people who use
                it.
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
                Build a system with us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* NEXT PROJECT */}
      {/* ================================================== */}

      <section className="py-20 md:py-28">
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
                  Project Juliana.
                </h2>

                <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-[#6B7C93]">
                  Exploring a more accessible, private and locally relevant
                  approach to digital mental wellness.
                </p>
              </div>

              <Link
                href="/work/project-juliana"
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