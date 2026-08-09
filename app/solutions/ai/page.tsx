import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "AI assistants",
    description:
      "Build intelligent interfaces that understand context, respond naturally and help people complete meaningful tasks.",
  },
  {
    number: "02",
    title: "Intelligent workflows",
    description:
      "Combine automation with AI so systems can interpret information, make decisions and trigger the appropriate next step.",
  },
  {
    number: "03",
    title: "AI-powered analysis",
    description:
      "Turn large amounts of information into useful classifications, summaries, recommendations and actionable insights.",
  },
  {
    number: "04",
    title: "Human-in-the-loop systems",
    description:
      "Design AI systems that know when to automate and when a human should review, intervene or make the final decision.",
  },
];

const principles = [
  {
    title: "Useful before impressive",
    description:
      "AI should solve a real problem rather than exist simply because it is fashionable.",
  },
  {
    title: "Human oversight",
    description:
      "Important decisions should have appropriate human review instead of blindly trusting automated outputs.",
  },
  {
    title: "Privacy-conscious",
    description:
      "Sensitive information should be handled intentionally with appropriate access controls and data practices.",
  },
  {
    title: "Designed for reality",
    description:
      "Systems should work with the language, workflows, constraints and environments of the people actually using them.",
  },
];

const julianaFeatures = [
  "AI mental wellness companion",
  "Emotion and crisis awareness",
  "Private journaling",
  "Mindfulness and self-help tools",
  "Mental health assessments",
  "Local context and language exploration",
];

const systemLayers = [
  {
    number: "01",
    title: "Understand",
    description:
      "Interpret the user's input, context or incoming information.",
  },
  {
    number: "02",
    title: "Reason",
    description:
      "Apply models, rules and domain-specific logic to determine an appropriate response.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Return useful information, recommendations or actions through the right interface.",
  },
  {
    number: "04",
    title: "Escalate",
    description:
      "Recognise situations where a human or another system should take over.",
  },
];

export default function IntelligentSystemsPage() {
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
            h-[850px]
            w-[850px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.18)_0%,rgba(255,128,181,0.10)_40%,rgba(255,179,71,0.06)_55%,transparent_72%)]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative py-28 lg:py-36">
            <div className="max-w-[940px]">
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
                Solutions · Intelligent Systems
              </span>

              <h1
                className="
                  mt-8
                  max-w-[920px]
                  text-[52px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  sm:text-[64px]
                  lg:text-[82px]
                "
              >
                Build systems that
                <br />
                can think with you.
              </h1>

              <p
                className="
                  mt-8
                  max-w-[730px]
                  text-[19px]
                  leading-[1.65]
                  text-[#425466]

                  md:text-[21px]
                "
              >
                We combine AI, automation and software engineering to
                create systems that understand information, assist people
                and make complex workflows easier to manage.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Build an intelligent system"
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
      {/* WHAT INTELLIGENT SYSTEMS MEAN */}
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
                Beyond chatbots
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
                Intelligence should
                <br />
                lead to action.
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p
                className="
                  text-[20px]
                  leading-[1.65]
                  text-[#425466]
                "
              >
                We don't see AI as a feature that gets added to a product
                at the end. It can become part of how a system understands
                information, supports decisions and interacts with people.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                That might mean an AI assistant helping a customer,
                automatically classifying incoming information, detecting
                patterns or routing a complex task to the right person.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                The technology is only valuable when it improves the
                experience or outcome.
              </p>
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
          <div className="max-w-[720px]">
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
              Intelligent technology
              <br />
              with a purpose.
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
              We design AI-enabled systems around the problem first, then
              choose the technology that makes the solution useful,
              reliable and maintainable.
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
      {/* SYSTEM VISUAL */}
      {/* ===================================================== */}

      <section className="overflow-hidden bg-[#0A2540] py-24 lg:py-32">
        <Container>
          <div className="text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#A8A3FF]
              "
            >
              How intelligent systems work
            </p>

            <h2
              className="
                mx-auto
                mt-6
                max-w-[800px]
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-white

                md:text-[56px]
              "
            >
              Intelligence is a system,
              <br />
              not a single model.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[620px]
                text-lg
                leading-relaxed
                text-white/55
              "
            >
              Useful AI products combine models with application logic,
              data, interfaces, safeguards and human oversight.
            </p>
          </div>

          <div className="relative mx-auto mt-20 max-w-[1100px]">
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-[52px]
                hidden
                h-px
                bg-gradient-to-r
                from-[#635BFF]/20
                via-[#A8A3FF]
                to-[#FF80B5]/20

                md:block
              "
            />

            <div className="grid gap-5 md:grid-cols-4">
              {systemLayers.map((item) => (
                <div
                  key={item.number}
                  className="
                    relative
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                    text-center
                  "
                >
                  <div
                    className="
                      relative
                      mx-auto
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-[#0A2540]
                      text-sm
                      font-semibold
                      text-[#A8A3FF]
                    "
                  >
                    {item.number}
                  </div>

                  <h3
                    className="
                      mt-7
                      text-xl
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-white/45
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* PROJECT JULIANA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            -left-48
            top-1/2
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.10),transparent_68%)]
            blur-[80px]
          "
        />

        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#E6EBF1]
              bg-[#F6F9FC]
            "
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Copy */}

              <div className="p-8 md:p-12 lg:p-16">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#635BFF]/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#635BFF]
                  "
                >
                  Featured project
                </span>

                <h2
                  className="
                    mt-7
                    text-[40px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[56px]
                  "
                >
                  Project Juliana.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[600px]
                    text-lg
                    leading-[1.7]
                    text-[#425466]
                  "
                >
                  A digital mental wellness companion designed to make
                  basic mental health support more accessible, private
                  and locally relevant.
                </p>

                <p
                  className="
                    mt-5
                    max-w-[600px]
                    text-base
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  Juliana combines an AI mental health companion with
                  emotion and crisis awareness, private journaling,
                  mindfulness tools, assessments and exploration of local
                  language and cultural context.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {julianaFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-white
                        px-4
                        py-3
                      "
                    >
                      <span
                        className="
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-[#635BFF]
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          text-[#0A2540]
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="
                    mt-8
                    max-w-[600px]
                    text-sm
                    leading-relaxed
                    text-[#6B7C93]
                  "
                >
                  Juliana is designed as a support tool, not a replacement
                  for qualified mental health professionals or emergency
                  services.
                </p>
              </div>

              {/* Visual */}

              <div className="relative min-h-[520px] overflow-hidden bg-[#0A2540]">
                <div
                  className="
                    absolute
                    -right-32
                    -top-32
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(99,91,255,0.55),transparent_68%)]
                    blur-[50px]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-40
                    -left-24
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(255,128,181,0.28),transparent_70%)]
                    blur-[50px]
                  "
                />

                <div className="relative flex h-full items-center justify-center p-8">
                  <div
                    className="
                      w-full
                      max-w-[390px]
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.07]
                      shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-white/10
                        px-5
                        py-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#635BFF]
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        J
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Juliana
                        </p>

                        <p className="text-xs text-white/40">
                          Mental wellness companion
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 p-5">
                      <div className="max-w-[280px] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3">
                        <p className="text-sm leading-relaxed text-white/80">
                          I'm here to listen. What's been on your mind?
                        </p>
                      </div>

                      <div className="ml-auto max-w-[260px] rounded-2xl rounded-tr-md bg-[#635BFF] px-4 py-3">
                        <p className="text-sm leading-relaxed text-white">
                          I've been feeling overwhelmed lately.
                        </p>
                      </div>

                      <div className="max-w-[290px] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3">
                        <p className="text-sm leading-relaxed text-white/80">
                          That sounds difficult. We can take it one step
                          at a time.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#A8A3FF]">
                          Wellness check-in
                        </p>

                        <p className="mt-2 text-sm text-white/60">
                          Take a moment to reflect on how you're feeling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* PRINCIPLES */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="max-w-[720px]">
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

                md:text-[56px]
              "
            >
              Responsible intelligence
              <br />
              by design.
            </h2>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[26px]
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-8

                  md:p-10
                "
              >
                <h3
                  className="
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
                    max-w-[500px]
                    text-base
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
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[720px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.13)_0%,rgba(255,128,181,0.07)_45%,transparent_70%)]
            blur-[80px]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-[820px] text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              Intelligent systems
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
              Turn intelligence
              <br />
              into something useful.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[620px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              Have an idea for an AI-powered product or an existing
              workflow that could be smarter? Let's explore what is
              possible.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                text="Talk to us about AI"
                href="/contact"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}