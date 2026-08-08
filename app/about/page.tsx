import Container from "@/components/container";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Solve the problem first.",
    description:
      "Technology is a means, not the destination. We start by understanding the problem, the people affected by it and what a successful outcome actually looks like.",
  },
  {
    number: "02",
    title: "Keep complexity useful.",
    description:
      "Good engineering does not mean making things complicated. We aim for systems that are powerful underneath but clear and intuitive for the people using them.",
  },
  {
    number: "03",
    title: "Build for what's next.",
    description:
      "The software we build should not become a limitation as an organization grows. We think about maintainability, scalability and future possibilities from the beginning.",
  },
  {
    number: "04",
    title: "Technology should feel human.",
    description:
      "The best digital experiences disappear into the background. They make difficult things easier, workflows clearer and useful capabilities more accessible.",
  },
];

const capabilities = [
  "Software engineering",
  "Product development",
  "Cloud infrastructure",
  "Automation",
  "Artificial intelligence",
  "Digital experiences",
];

export default function AboutPage() {
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
            right-[10%]
            top-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#FF80B5]/[0.025]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[950px]">
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
                About Kurarin
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[950px]
                text-[50px]
                font-semibold
                leading-[0.94]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[60px]
                md:text-[76px]
                lg:text-[90px]
              "
            >
              Building technology
              <br />
              that moves things forward.
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
              Kurarin Solutions is a technology company focused on building
              software, digital products and systems that help organizations
              work better, serve people better and create new possibilities.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* WHO WE ARE */}
      {/* ================================================== */}

      <section className="py-28 md:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
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
                Who we are
              </span>
            </div>

            {/* Content */}

            <div className="max-w-[760px]">
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
                A technology company built around curiosity, engineering and
                useful ideas.
              </h2>

              <div className="mt-8 space-y-6">
                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  We believe technology has the power to fundamentally change
                  how organizations operate and how people interact with
                  services. But technology on its own is not enough.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  The real opportunity lies in understanding a problem deeply,
                  then using engineering, design and emerging technologies to
                  create something genuinely useful.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  That's the kind of company we're building at Kurarin.
                  Sometimes that means creating software for an established
                  organization. Sometimes it means automating a process that
                  should never have been manual. And sometimes it means
                  exploring an entirely new product idea.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* STORY BEHIND THE NAME */}
      {/* ================================================== */}

      <section className="relative overflow-hidden py-28 md:py-36 lg:py-44">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Name */}

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
                The name
              </span>

              <div className="mt-8">
                <span
                  className="
                    text-[64px]
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[#635BFF]

                    md:text-[80px]
                  "
                >
                  Kura
                </span>

                <span
                  className="
                    text-[64px]
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[#0A2540]

                    md:text-[80px]
                  "
                >
                  rin
                </span>
              </div>

              <div className="mt-6 h-px w-20 bg-[#635BFF]" />
            </div>

            {/* Story */}

            <div className="max-w-[760px]">
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
                A name built around
                <br />
                knowledge and character.
              </h2>

              <div className="mt-8 space-y-6">
                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  The name{" "}
                  <strong className="font-semibold text-[#0A2540]">
                    Kurarin
                  </strong>{" "}
                  was inspired by two Japanese elements:{" "}
                  <em>Kura</em> and <em>Rin</em>.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  <strong className="font-semibold text-[#0A2540]">
                    Kura
                  </strong>{" "}
                  can refer to a storehouse, repository or place where
                  valuable things are kept. It represents the idea of
                  gathering and preserving knowledge, resources and
                  experience.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  <strong className="font-semibold text-[#0A2540]">
                    Rin
                  </strong>{" "}
                  can convey qualities such as dignity, strength, refinement
                  and composure. It represents the character we want our work
                  to carry: thoughtful, dependable and built with purpose.
                </p>

                <p
                  className="
                    text-[17px]
                    leading-[1.8]
                    text-[#6B7C93]
                  "
                >
                  Together,{" "}
                  <strong className="font-semibold text-[#0A2540]">
                    Kurarin
                  </strong>{" "}
                  represents our philosophy of gathering knowledge,
                  transforming ideas through technology and delivering
                  solutions that create lasting value.
                </p>
              </div>

              {/* Tagline */}

              <div
                className="
                  mt-10
                  border-l-2
                  border-[#635BFF]
                  pl-6
                "
              >
                <p
                  className="
                    text-[18px]
                    font-semibold
                    tracking-[-0.02em]
                    text-[#0A2540]

                    md:text-[20px]
                  "
                >
                  Storing Knowledge, Delivering Solutions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* VISION STATEMENT */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36 lg:py-44">
        {/* Gradient atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#635BFF]/20
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-64
            left-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FF80B5]/10
            blur-[130px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[1000px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/50
              "
            >
              Our direction
            </span>

            <h2
              className="
                mt-6
                max-w-[950px]
                text-[42px]
                font-semibold
                leading-[1]
                tracking-[-0.055em]
                text-white

                md:text-[60px]
                lg:text-[72px]
              "
            >
              We want to build technology that is not only powerful, but
              meaningful.
            </h2>

            <p
              className="
                mt-8
                max-w-[700px]
                text-[17px]
                leading-[1.8]
                text-white/60

                md:text-[19px]
              "
            >
              Our long-term ambition is to create a technology company that
              builds useful products, solves difficult problems and contributes
              meaningful ideas to the digital ecosystem around us.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PRINCIPLES */}
      {/* ================================================== */}

      <section className="py-28 md:py-36 lg:py-44">
        <Container>
          <div className="max-w-[700px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              What we believe
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
              Principles that
              <br />
              guide the work.
            </h2>
          </div>

          <div className="mt-20 border-t border-[#E6EBF1]">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="
                  grid
                  gap-8
                  border-b
                  border-[#E6EBF1]
                  py-12

                  md:grid-cols-[80px_1fr_1fr]
                  md:py-16
                  md:gap-12
                "
              >
                <span
                  className="
                    text-[12px]
                    font-medium
                    tracking-[0.05em]
                    text-[#635BFF]
                  "
                >
                  {principle.number}
                </span>

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
                  {principle.title}
                </h3>

                <p
                  className="
                    max-w-[500px]
                    text-[16px]
                    leading-[1.75]
                    text-[#6B7C93]
                  "
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* WHAT WE BUILD */}
      {/* ================================================== */}

      <section className="bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
                From ideas
                <br />
                to infrastructure.
              </h2>
            </div>

            <div className="grid border-t border-[#E6EBF1] sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="
                    border-b
                    border-[#E6EBF1]
                    py-7
                    text-[16px]
                    font-medium
                    text-[#425466]
                  "
                >
                  <span className="mr-4 text-[11px] text-[#635BFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {capability}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* KURARIN TODAY */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="max-w-[800px]">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              Where we are going
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
              We're still building.
              <br />
              That's the point.
            </h2>

            <div className="mt-8 space-y-6">
              <p
                className="
                  text-[17px]
                  leading-[1.8]
                  text-[#6B7C93]
                "
              >
                Kurarin is intentionally being built with a long-term view.
                We're developing our capabilities, working with organizations,
                experimenting with new technologies and creating products of
                our own.
              </p>

              <p
                className="
                  text-[17px]
                  leading-[1.8]
                  text-[#6B7C93]
                "
              >
                Some of our work is already serving real businesses. Other
                ideas are still being researched and developed. We see both as
                part of the same journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden border-t border-[#E6EBF1] py-28 md:py-36">
        {/* Ambient gradients */}

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
            left-[25%]
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
              Work with us
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
              Let's build what's
              <br />
              <span className="text-[#635BFF]">next.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[580px]
                text-[17px]
                leading-[1.7]
                text-[#6B7C93]
              "
            >
              Whether you have a defined project, an operational problem or
              simply an idea you want to explore, we'd like to hear about it.
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