import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "Legacy modernization",
    description:
      "Replace outdated systems and fragmented tools with modern digital infrastructure that is easier to maintain, extend and scale.",
  },
  {
    number: "02",
    title: "Process digitization",
    description:
      "Turn manual, paper-based and disconnected processes into structured digital workflows that your teams can actually use.",
  },
  {
    number: "03",
    title: "System integration",
    description:
      "Connect the platforms your organization already relies on so information can move between systems without unnecessary manual work.",
  },
  {
    number: "04",
    title: "Digital infrastructure",
    description:
      "Build the technical foundations required to support modern applications, data, cloud environments and connected business systems.",
  },
];

const outcomes = [
  "Less manual work",
  "Better access to information",
  "Connected business systems",
  "More reliable operations",
  "Improved customer experiences",
  "Infrastructure ready for growth",
];

export default function DigitalTransformationPage() {
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
            -right-52
            -top-64
            h-[800px]
            w-[800px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.16)_0%,rgba(255,128,181,0.08)_45%,transparent_72%)]
            blur-[90px]
          "
        />

        <Container>
          <div className="relative py-28 lg:py-36">
            <div className="max-w-[900px]">
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
                Solutions · Digital Transformation
              </span>

              <h1
                className="
                  mt-8
                  max-w-[900px]
                  text-[52px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  sm:text-[64px]
                  lg:text-[82px]
                "
              >
                Move your organization
                <br />
                into the digital age.
              </h1>

              <p
                className="
                  mt-8
                  max-w-[720px]
                  text-[19px]
                  leading-[1.65]
                  text-[#425466]

                  md:text-[21px]
                "
              >
                Digital transformation isn't about replacing everything
                with technology. It's about removing friction, connecting
                systems and giving your organization better ways to work.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Discuss your transformation"
                  href="/contact"
                />

                <a
                  href="#approach"
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
                  See how we approach it
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* PROBLEM */}
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
                The problem
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[52px]
                "
              >
                Technology should remove complexity, not create more of it.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p
                className="
                  text-[20px]
                  leading-[1.65]
                  text-[#425466]
                "
              >
                Many organizations don't have a technology problem.
                They have a disconnected-technology problem.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Information lives in spreadsheets. Teams repeatedly enter
                the same data. Customers interact through outdated
                channels. Different systems don't communicate. Critical
                processes depend on people remembering what to do next.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Transformation starts by understanding those problems
                before deciding what technology belongs in the solution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* CAPABILITIES */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-[700px]">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              What we do
            </p>

            <h2
              className="
                mt-6
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[56px]
              "
            >
              Transformation with a practical purpose.
            </h2>

            <p
              className="
                mt-6
                max-w-[620px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              We focus on the parts of your organization where technology
              can create measurable improvements.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="
                  rounded-[26px]
                  border
                  border-[#E6EBF1]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(10,37,64,0.06)]

                  md:p-10
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#635BFF]
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-[#0A2540]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[16px]
                    leading-[1.7]
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
      {/* APPROACH */}
      {/* ===================================================== */}

      <section
        id="approach"
        className="bg-[#0A2540] py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#A8A3FF]
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
                  text-white

                  md:text-[56px]
                "
              >
                Transform without losing sight of the business.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <Step
                number="01"
                title="Map"
                description="Understand your existing systems, workflows, people and bottlenecks."
              />

              <Step
                number="02"
                title="Prioritize"
                description="Identify where technology can create the greatest operational or customer impact."
              />

              <Step
                number="03"
                title="Build"
                description="Introduce the right systems, integrations and digital workflows without unnecessary complexity."
              />

              <Step
                number="04"
                title="Evolve"
                description="Measure what changes, learn from it and continue improving as your organization grows."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* OUTCOMES */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
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

                  md:text-[52px]
                "
              >
                Better systems.
                <br />
                Better work.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E6EBF1]
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
                    {outcome}
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

      <section className="relative overflow-hidden bg-[#F6F9FC] py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.12)_0%,rgba(255,128,181,0.07)_45%,transparent_70%)]
            blur-[80px]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-[800px] text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              Ready when you are
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
              Your next chapter
              <br />
              starts with a conversation.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[600px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              Tell us where your organization is today and where you
              want it to go.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                text="Start a conversation"
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
/* Step */
/* ========================================================= */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-[#A8A3FF]">
        {number}
      </span>

      <h3
        className="
          mt-5
          text-2xl
          font-semibold
          tracking-[-0.025em]
          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-[15px]
          leading-[1.7]
          text-white/55
        "
      >
        {description}
      </p>
    </div>
  );
}