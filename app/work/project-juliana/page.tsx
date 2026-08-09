import Link from "next/link";
import Container from "@/components/container";
import Reveal from "@/components/reveal";

const capabilities = [
  {
    number: "01",
    title: "AI mental wellness companion",
    description:
      "A conversational AI experience designed to provide a supportive first layer of interaction when someone feels overwhelmed, stressed, lonely or simply needs a space to reflect.",
  },
  {
    number: "02",
    title: "Emotion awareness",
    description:
      "The system analyses conversational signals to identify basic emotional states and adapt its responses to the context of the conversation.",
  },
  {
    number: "03",
    title: "Crisis awareness",
    description:
      "A dedicated safety layer looks for high-risk expressions and helps direct users toward appropriate human support and emergency resources when necessary.",
  },
  {
    number: "04",
    title: "Private journaling",
    description:
      "Users can maintain personal journals alongside their conversations, creating a private space for reflection and tracking their experiences over time.",
  },
  {
    number: "05",
    title: "Mindfulness & self-help",
    description:
      "Mindfulness exercises and self-assessment tools complement the conversational experience and encourage users to develop healthier reflection habits.",
  },
  {
    number: "06",
    title: "Local context",
    description:
      "The platform is being explored with Kenyan expressions, Sheng and eventually additional local languages so users can communicate naturally rather than relying only on formal English.",
  },
];

const principles = [
  {
    title: "Support, not diagnosis",
    description:
      "Juliana is designed to support and guide users, not diagnose mental-health conditions or present itself as a replacement for a qualified professional.",
  },
  {
    title: "Privacy by design",
    description:
      "Conversations, journals and account information require appropriate access controls because sensitive personal information deserves careful handling.",
  },
  {
    title: "Human escalation",
    description:
      "When a situation appears to require more than an AI companion can safely provide, the product is designed to encourage connection with appropriate human support.",
  },
  {
    title: "Built for real people",
    description:
      "The experience is being designed around the way people actually communicate, including informal language and local cultural context.",
  },
];

export default function ProjectJulianaPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Main purple glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[780px]
            w-[780px]
            animate-[pulse_9s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.065]
            blur-[150px]
          "
        />

        {/* Pink secondary glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[18%]
            top-[15%]
            h-[320px]
            w-[320px]
            animate-[pulse_11s_ease-in-out_infinite]
            rounded-full
            bg-[#FF80B5]/[0.035]
            blur-[110px]
          "
        />

        <Container>
          <div className="relative z-10">
            {/* Back */}

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

            <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:gap-20">
              {/* Hero copy */}

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
                      Project Juliana
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
                      In development
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <h1
                    className="
                      mt-7
                      max-w-[900px]
                      text-[50px]
                      font-semibold
                      leading-[0.93]
                      tracking-[-0.065em]
                      text-[#0A2540]

                      sm:text-[60px]

                      md:text-[76px]

                      lg:text-[88px]
                    "
                  >
                    Technology
                    <br />
                    with humanity
                    <br />
                    at the centre.
                  </h1>
                </Reveal>

                <Reveal delay={300}>
                  <p
                    className="
                      mt-8
                      max-w-[700px]
                      text-[18px]
                      leading-[1.75]
                      text-[#6B7C93]

                      md:text-[20px]
                    "
                  >
                    Project Juliana is a digital mental wellness companion
                    being developed to make basic mental-health support more
                    accessible, private and locally relevant.
                  </p>
                </Reveal>

                <Reveal delay={400}>
                  <p
                    className="
                      mt-5
                      max-w-[650px]
                      text-[15px]
                      leading-[1.75]
                      text-[#6B7C93]
                    "
                  >
                    It combines conversational AI, emotion awareness,
                    journaling, mindfulness tools and crisis-aware safety
                    mechanisms into one evolving platform.
                  </p>
                </Reveal>
              </div>

              {/* Project details */}

              <Reveal direction="right" delay={300}>
                <div className="lg:pt-3">
                  <div className="border-t border-[#E6EBF1]">
                    <div className="border-b border-[#E6EBF1] py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Product
                      </p>

                      <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                        Digital Mental Wellness Companion
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Technology
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          AI · NLP · Web
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Focus
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Mental Wellness
                        </p>
                      </div>
                    </div>

                    <div className="py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Status
                      </p>

                      <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                        Active product development
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
              {/* Purple glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[450px]
                  w-[450px]
                  animate-[pulse_8s_ease-in-out_infinite]
                  rounded-full
                  bg-[#635BFF]/[0.09]
                  blur-[120px]
                "
              />

              {/* Pink glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -left-32
                  h-[400px]
                  w-[400px]
                  animate-[pulse_10s_ease-in-out_infinite]
                  rounded-full
                  bg-[#FF80B5]/[0.045]
                  blur-[110px]
                "
              />

              <div className="relative p-5 md:p-10 lg:p-16">
                {/* Application window */}

                <div
                  className="
                    mx-auto
                    max-w-[1050px]
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#E6EBF1]
                    bg-white
                    shadow-[0_30px_100px_rgba(10,37,64,0.08)]
                  "
                >
                  {/* Top bar */}

                  <div className="flex h-14 items-center justify-between border-b border-[#E6EBF1] px-5 md:px-7">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[#635BFF]
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        J
                      </div>

                      <span className="text-sm font-semibold text-[#0A2540]">
                        Juliana
                      </span>
                    </div>

                    <div className="hidden items-center gap-5 sm:flex">
                      <span className="text-xs text-[#6B7C93]">
                        Journal
                      </span>

                      <span className="text-xs text-[#6B7C93]">
                        Wellness
                      </span>

                      <span className="text-xs text-[#6B7C93]">
                        Profile
                      </span>

                      <div className="h-7 w-7 rounded-full bg-[#F6F9FC]" />
                    </div>
                  </div>

                  {/* Application */}

                  <div className="grid min-h-[540px] lg:grid-cols-[220px_1fr]">
                    {/* Sidebar */}

                    <div className="hidden border-r border-[#E6EBF1] bg-[#FBFCFE] p-6 lg:block">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Your space
                      </p>

                      <div className="mt-7 space-y-2">
                        <div className="flex items-center gap-3 rounded-xl bg-[#635BFF]/10 px-3 py-3">
                          <span className="text-xs text-[#635BFF]">✦</span>

                          <span className="text-xs font-medium text-[#635BFF]">
                            Conversation
                          </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl px-3 py-3">
                          <span className="text-xs text-[#6B7C93]">□</span>

                          <span className="text-xs text-[#6B7C93]">
                            Journal
                          </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl px-3 py-3">
                          <span className="text-xs text-[#6B7C93]">◌</span>

                          <span className="text-xs text-[#6B7C93]">
                            Wellness
                          </span>
                        </div>
                      </div>

                      <div className="mt-12 rounded-2xl bg-[#F6F9FC] p-4">
                        <p className="text-xs font-semibold text-[#0A2540]">
                          Take a moment
                        </p>

                        <p className="mt-2 text-[11px] leading-relaxed text-[#6B7C93]">
                          A few minutes of reflection can help you understand
                          how you're feeling.
                        </p>

                        <div className="mt-4 h-8 rounded-lg bg-white" />
                      </div>
                    </div>

                    {/* Chat */}

                    <div className="flex flex-col">
                      {/* Chat header */}

                      <div className="border-b border-[#E6EBF1] px-6 py-5 md:px-8">
                        <p className="text-xs text-[#6B7C93]">
                          Your conversation
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-[#0A2540]">
                            How are you feeling?
                          </h3>

                          <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                        </div>
                      </div>

                      {/* Messages */}

                      <div className="flex-1 space-y-5 px-6 py-8 md:px-10 md:py-10">
                        {/* User */}

                        <div className="ml-auto max-w-[78%]">
                          <div
                            className="
                              rounded-2xl
                              rounded-br-md
                              bg-[#F6F9FC]
                              p-4
                              text-sm
                              leading-relaxed
                              text-[#425466]
                            "
                          >
                            I've been feeling overwhelmed lately. There's a
                            lot going on and I don't really know where to
                            start.
                          </div>
                        </div>

                        {/* Juliana */}

                        <div className="flex max-w-[85%] gap-3">
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#635BFF]
                              text-[11px]
                              font-semibold
                              text-white
                            "
                          >
                            J
                          </div>

                          <div>
                            <div
                              className="
                                rounded-2xl
                                rounded-bl-md
                                bg-[#635BFF]
                                p-4
                                text-sm
                                leading-relaxed
                                text-white
                              "
                            >
                              <p>
                                That sounds like a lot to carry at once. You
                                don't have to figure everything out right now.
                              </p>

                              <p className="mt-3">
                                If you'd like, we can take it one thing at a
                                time. What's been weighing on you the most?
                              </p>
                            </div>

                            <p className="mt-2 text-[10px] text-[#6B7C93]">
                              Juliana · conversational support
                            </p>
                          </div>
                        </div>

                        {/* User */}

                        <div className="ml-auto max-w-[70%]">
                          <div
                            className="
                              rounded-2xl
                              rounded-br-md
                              bg-[#F6F9FC]
                              p-4
                              text-sm
                              leading-relaxed
                              text-[#425466]
                            "
                          >
                            Mostly work. I haven't really had a chance to
                            switch off.
                          </div>
                        </div>

                        {/* Typing */}

                        <div className="flex items-center gap-2 pl-11 pt-1">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#635BFF]/40" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#635BFF]/60 [animation-delay:150ms]" />
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#635BFF] [animation-delay:300ms]" />
                        </div>
                      </div>

                      {/* Input */}

                      <div className="border-t border-[#E6EBF1] p-5 md:p-6">
                        <div className="flex items-center gap-3 rounded-xl border border-[#E6EBF1] bg-[#FBFCFE] px-4 py-3">
                          <span className="flex-1 text-xs text-[#A0ACB8]">
                            Write what's on your mind...
                          </span>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#635BFF] text-xs text-white">
                            ↑
                          </span>
                        </div>

                        <p className="mt-3 text-center text-[9px] text-[#A0ACB8]">
                          Juliana is a digital wellness companion, not a
                          replacement for professional care.
                        </p>
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
      {/* PRODUCT STORY */}
      {/* ================================================== */}

      <section className="border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
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
                The idea
              </span>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div>
                <h2
                  className="
                    max-w-[820px]
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[56px]
                  "
                >
                  Mental wellness support should feel accessible.
                </h2>

                <div className="mt-8 max-w-[720px] space-y-6">
                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    For many people, the first step toward seeking support can
                    be difficult. Professional care may not always be
                    immediately accessible, and some people simply need
                    somewhere to begin expressing what they're experiencing.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    Juliana explores the idea of an approachable digital first
                    layer — a private conversational environment where someone
                    can pause, reflect and receive supportive guidance.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    The product isn't intended to replace therapists,
                    psychologists or psychiatrists. Instead, it is being
                    designed to help people take an initial step and recognise
                    when additional human support may be appropriate.
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
            -right-48
            top-1/3
            h-[600px]
            w-[600px]
            animate-[pulse_10s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.045]
            blur-[140px]
          "
        />

        <Container>
          <div className="relative z-10">
            <Reveal>
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
                  What we're building
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
                  More than a chatbot.
                </h2>

                <p className="mt-6 max-w-[650px] text-[17px] leading-[1.75] text-[#6B7C93]">
                  Juliana brings several complementary experiences together
                  around one central idea: making digital mental wellness
                  support more accessible without losing sight of safety,
                  privacy and human connection.
                </p>
              </div>
            </Reveal>

            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#E6EBF1] bg-[#E6EBF1] md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, index) => (
                <Reveal key={item.number} delay={index * 80}>
                  <div
                    className="
                      group
                      h-full
                      bg-white
                      p-8
                      transition-all
                      duration-500

                      md:p-10

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

                    <p className="mt-4 text-[15px] leading-[1.75] text-[#6B7C93]">
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
      {/* LOCALISATION */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-24">
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
                  Built for context
                </span>

                <h2
                  className="
                    mt-5
                    max-w-[700px]
                    text-[40px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[56px]
                  "
                >
                  People shouldn't have to change how they speak to be
                  understood.
                </h2>

                <div className="mt-8 max-w-[650px] space-y-5">
                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    One of Juliana's core areas of exploration is
                    localisation. Mental-health conversations don't always
                    happen in polished, formal English.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    The project is being explored around Kenyan expressions,
                    Sheng and eventually additional local languages so that
                    people can communicate naturally and still be understood
                    within the right context.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#E6EBF1]
                  bg-[#F6F9FC]
                  p-8

                  md:p-12
                "
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-[220px]
                    w-[220px]
                    rounded-full
                    bg-[#635BFF]/10
                    blur-[80px]
                  "
                />

                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                    Conversation can be personal
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white p-4 shadow-sm">
                      <p className="text-sm leading-relaxed text-[#425466]">
                        "Leo nimekuwa tu nimechoka sana na mambo yote."
                      </p>
                    </div>

                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#635BFF] p-4">
                      <p className="text-sm leading-relaxed text-white">
                        "Sounds like things have been feeling really heavy
                        lately. We can take it one step at a time."
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#E6EBF1] pt-6">
                    <p className="text-[11px] leading-relaxed text-[#6B7C93]">
                      Exploring culturally relevant conversational AI without
                      forcing users into a single communication style.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* RESPONSIBLE AI */}
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
            animate-[pulse_9s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/20
            blur-[150px]
          "
        />

        <Container>
          <div className="relative z-10">
            <Reveal>
              <div className="max-w-[850px]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Responsible technology
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
                  "
                >
                  The technology matters.
                  <br />
                  <span className="text-[#A8A3FF]">
                    The responsibility matters more.
                  </span>
                </h2>

                <p className="mt-8 max-w-[700px] text-[17px] leading-[1.8] text-white/60">
                  Mental-health technology requires a different level of care.
                  Juliana is being designed around clear boundaries, privacy,
                  safety mechanisms and human escalation rather than pretending
                  that an AI system can replace professional care.
                </p>
              </div>
            </Reveal>

            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div
                    className="
                      h-full
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      p-8
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:bg-white/[0.06]

                      md:p-10
                    "
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.75] text-white/50">
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
      {/* VISION */}
      {/* ================================================== */}

      <section className="py-28 md:py-36 lg:py-44">
        <Container>
          <Reveal>
            <div className="max-w-[950px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Where it's going
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

                  lg:text-[76px]
                "
              >
                From a conversation
                <br />
                to a complete wellness
                <br />
                <span className="text-[#635BFF]">
                  support ecosystem.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-[700px]
                  text-[17px]
                  leading-[1.8]
                  text-[#6B7C93]
                "
              >
                The longer-term vision extends beyond the chatbot itself:
                personalised wellness journeys, stronger local-language
                understanding, richer self-help tools, professional resource
                directories and appropriate pathways for connecting people
                with real mental-health professionals.
              </p>
            </div>
          </Reveal>
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
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[120px]
          "
        />

        <Container>
          <Reveal>
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
                Project Juliana
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
                Technology should help
                <br />
                people feel
                <br />
                <span className="text-[#635BFF]">
                  less alone.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[17px]
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Juliana is an ongoing exploration of what responsible,
                locally relevant AI can look like when technology is designed
                around human wellbeing.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    group
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
                  Talk to us about a project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/work"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#E6EBF1]
                    px-6
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-[#425466]
                    transition-all
                    duration-300
                    hover:border-[#635BFF]
                    hover:text-[#635BFF]
                  "
                >
                  View more work
                </Link>
              </div>
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
                  BoB Van Transfers.
                </h2>

                <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-[#6B7C93]">
                  A modern commercial web platform designed around transport,
                  transfers and customer experience.
                </p>
              </div>

              <Link
                href="/work/bob-van-transfers"
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