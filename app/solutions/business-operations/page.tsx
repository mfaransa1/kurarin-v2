import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "Business management systems",
    description:
      "Centralize the information, workflows and tools your teams need to manage day-to-day operations more effectively.",
  },
  {
    number: "02",
    title: "Internal platforms",
    description:
      "Build secure internal applications for teams, departments and organizations that need more than spreadsheets and disconnected tools.",
  },
  {
    number: "03",
    title: "Information management",
    description:
      "Make important business information easier to capture, organize, access and use across your organization.",
  },
  {
    number: "04",
    title: "Workflow optimization",
    description:
      "Identify operational bottlenecks and redesign the processes around them with better digital workflows.",
  },
];

const improvements = [
  "Fewer repetitive tasks",
  "Better visibility across operations",
  "Centralized business information",
  "Clearer workflows",
  "Faster decision-making",
  "More accountable processes",
];

export default function BusinessOperationsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="relative overflow-hidden">
        <div
          className="
            pointer-events-none
            absolute
            -right-56
            -top-64
            h-[800px]
            w-[800px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.15)_0%,rgba(255,128,181,0.08)_45%,transparent_72%)]
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
                Solutions · Business Operations
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
                Make your business
                <br />
                easier to run.
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
                Your teams shouldn't have to fight your systems to get
                work done. We build digital tools that bring your
                operations, information and workflows together.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Improve your operations"
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

      {/* PROBLEM */}

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
                Your people shouldn't be the glue holding your systems
                together.
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
                As organizations grow, operations often become a
                collection of spreadsheets, emails, messaging groups,
                documents and disconnected applications.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Employees spend time looking for information, entering
                the same data into different systems and manually
                coordinating processes that should happen automatically.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                We help turn those fragmented processes into structured
                digital systems that make everyday work simpler.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}

      <section
        id="capabilities"
        className="py-24 lg:py-32"
      >
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

                md:text-[56px]
              "
            >
              Systems that work the way your business works.
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
              Instead of forcing your organization into an off-the-shelf
              workflow, we can build around your actual processes.
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

      {/* OPERATIONS VISUAL */}

      <section className="overflow-hidden bg-[#0A2540] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
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
                Connected operations
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
                Information should move with the work.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[560px]
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                Good operational systems connect people, processes and
                information instead of creating another isolated tool.
              </p>
            </div>

            {/* System visual */}

            <div className="relative mx-auto w-full max-w-[620px]">
              <div
                className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Operations
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Connected business systems
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[#A8A3FF]" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["People", "24 active"],
                    ["Workflows", "18 running"],
                    ["Systems", "07 connected"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-4
                      "
                    >
                      <p className="text-xs text-white/40">
                        {title}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      Workflow activity
                    </span>

                    <span className="text-xs text-[#A8A3FF]">
                      Live
                    </span>
                  </div>

                  <div className="mt-5 flex items-end gap-2">
                    {[35, 55, 42, 72, 58, 82, 68, 91, 74, 88].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-[#635BFF]/50"
                          style={{ height: `${height}px` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OUTCOMES */}

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
                Give your team
                <br />
                room to work.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {improvements.map((item) => (
                <div
                  key={item}
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
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}

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
              Better operations
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
              Make the work
              <br />
              work better.
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
              Let's identify the operational friction holding your
              organization back and build something better around it.
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