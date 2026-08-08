import Container from "@/components/container";
import Button from "@/components/button";

export default function ProjectJulianaPage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">
        {/* Ambient gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[700px]
            w-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.16)_0%,rgba(255,128,181,0.10)_42%,transparent_70%)]
            blur-[80px]
          "
        />

        <Container>
          <div
            className="
              relative
              grid
              min-h-[760px]
              items-center
              gap-16
              py-24

              lg:grid-cols-[0.95fr_1.05fr]
              lg:py-32
            "
          >
            {/* Hero copy */}

            <div className="max-w-[650px]">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#E6EBF1]
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#425466]
                  shadow-sm
                "
              >
                Kurarin Product · Digital Mental Wellness
              </div>

              <h1
                className="
                  mt-8
                  text-[52px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  sm:text-[64px]
                  lg:text-[76px]
                "
              >
                A more human way
                <br />
                to access wellness support.
              </h1>

              <p
                className="
                  mt-8
                  max-w-[580px]
                  text-[19px]
                  leading-[1.65]
                  text-[#425466]

                  md:text-[21px]
                "
              >
                Project Juliana is a digital mental wellness companion
                designed to make basic mental health support more
                accessible, private and locally relevant.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Talk to us about Juliana"
                  href="/contact"
                />

                <a
                  href="#overview"
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
                  Explore the project
                </a>
              </div>
            </div>

            {/* Juliana visual */}

            <div className="relative hidden h-[560px] lg:block">
              {/* Background glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[360px]
                  w-[360px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#635BFF]/10
                  blur-[100px]
                "
              />

              {/* Main conversation card */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[28px]
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-6
                  shadow-[0_35px_100px_rgba(10,37,64,0.12)]
                "
              >
                {/* Header */}

                <div className="flex items-center justify-between">
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

                      <div className="mt-0.5 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                        <span className="text-[11px] text-[#6B7C93]">
                          Here to listen
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-[#E6EBF1]" />
                </div>

                {/* Conversation */}

                <div className="mt-8 space-y-5">
                  <div className="max-w-[280px] rounded-2xl rounded-tl-sm bg-[#F6F9FC] p-4">
                    <p className="text-sm leading-relaxed text-[#425466]">
                      Hey. I'm here with you. What's been on your mind?
                    </p>
                  </div>

                  <div className="ml-auto max-w-[280px] rounded-2xl rounded-tr-sm bg-[#635BFF] p-4">
                    <p className="text-sm leading-relaxed text-white">
                      I've just been feeling overwhelmed lately.
                    </p>
                  </div>

                  <div className="max-w-[300px] rounded-2xl rounded-tl-sm bg-[#F6F9FC] p-4">
                    <p className="text-sm leading-relaxed text-[#425466]">
                      That sounds like a lot to carry. We can take it one
                      step at a time.
                    </p>
                  </div>
                </div>

                {/* Input */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-[#E6EBF1]
                    px-4
                    py-3
                  "
                >
                  <span className="text-xs text-[#A0ACB8]">
                    Write something...
                  </span>

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#635BFF]
                      text-xs
                      text-white
                    "
                  >
                    ↑
                  </div>
                </div>
              </div>

              {/* Floating emotion card */}

              <div
                className="
                  absolute
                  -left-2
                  bottom-12
                  w-[180px]
                  rounded-2xl
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-4
                  shadow-[0_20px_60px_rgba(10,37,64,0.10)]
                "
              >
                <p className="text-[11px] font-medium text-[#6B7C93]">
                  Emotional awareness
                </p>

                <p className="mt-2 text-sm font-semibold text-[#0A2540]">
                  Reflective
                </p>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#F1F3F5]">
                  <div className="h-full w-[68%] rounded-full bg-[#635BFF]" />
                </div>
              </div>

              {/* Floating privacy card */}

              <div
                className="
                  absolute
                  -right-4
                  top-16
                  rounded-2xl
                  border
                  border-[#E6EBF1]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_20px_60px_rgba(10,37,64,0.10)]
                "
              >
                <p className="text-[11px] font-medium text-[#6B7C93]">
                  Privacy
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">🔒</span>

                  <span className="text-sm font-semibold text-[#0A2540]">
                    Privacy by design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* OVERVIEW */}
      {/* ===================================================== */}

      <section
        id="overview"
        className="bg-[#F6F9FC] py-24 lg:py-32"
      >
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
                The challenge
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
                Support isn't always available when people need it.
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
                Mental wellness support can be difficult to access.
                Cost, availability, stigma, location and simply not
                knowing where to begin can all become barriers.
              </p>

              <p
                className="
                  mt-6
                  text-[18px]
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Juliana explores what happens when technology becomes a
                private first layer of support — something a person can
                interact with when they're stressed, overwhelmed,
                lonely, or simply need a safe space to reflect.
              </p>

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-6
                "
              >
                <p className="text-sm font-semibold text-[#0A2540]">
                  An important boundary
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[#6B7C93]
                  "
                >
                  Juliana is not designed to replace therapists or
                  psychiatrists, and it does not diagnose mental health
                  conditions. Its role is to support, guide, encourage
                  reflection, recognise situations that may require
                  additional help and connect people with appropriate
                  human resources.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* FEATURES */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-[680px]">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              The platform
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
              More than a conversation.
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
              Juliana brings several complementary tools together into
              one private digital wellness experience.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {/* AI */}

            <FeatureCard
              number="01"
              title="AI Mental Wellness Companion"
              description="A conversational interface designed around mental-wellness-related intents, allowing users to express what they're experiencing in a natural way."
            />

            {/* Emotion */}

            <FeatureCard
              number="02"
              title="Emotion & Crisis Awareness"
              description="The system can analyse conversational signals and identify situations that may require additional attention, including high-risk expressions that should lead toward appropriate human help."
            />

            {/* Journaling */}

            <FeatureCard
              number="03"
              title="Private Journaling"
              description="A personal space where users can record thoughts and experiences privately, allowing reflection to exist alongside conversations with Juliana."
            />

            {/* Mindfulness */}

            <FeatureCard
              number="04"
              title="Mindfulness & Self-Help"
              description="Mindfulness exercises and self-assessment tools give users additional ways to reflect and develop healthier everyday habits."
            />
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* LOCALIZATION */}
      {/* ===================================================== */}

      <section className="overflow-hidden bg-[#0A2540] py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
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
                Built for context
              </p>

              <h2
                className="
                  mt-6
                  max-w-[650px]
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-white

                  md:text-[60px]
                "
              >
                You shouldn't have to translate how you feel.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[600px]
                  text-lg
                  leading-relaxed
                  text-white/65
                "
              >
                Juliana is being explored with local context in mind.
                That includes experimenting with Kenyan expressions,
                Sheng and eventually additional local languages.
              </p>

              <p
                className="
                  mt-5
                  max-w-[600px]
                  text-lg
                  leading-relaxed
                  text-white/65
                "
              >
                The goal is simple: people should be able to communicate
                naturally rather than feeling that they need perfect
                formal language before technology can understand them.
              </p>
            </div>

            {/* Language visual */}

            <div className="relative mx-auto h-[360px] w-full max-w-[480px]">
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[280px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#635BFF]/20
                  blur-[80px]
                "
              />

              <div
                className="
                  absolute
                  left-8
                  top-10
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-5
                  py-4
                  text-sm
                  text-white/80
                "
              >
                Kenyan expressions
              </div>

              <div
                className="
                  absolute
                  right-4
                  top-28
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-5
                  py-4
                  text-sm
                  text-white/80
                "
              >
                Sheng
              </div>

              <div
                className="
                  absolute
                  bottom-14
                  left-20
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-5
                  py-4
                  text-sm
                  text-white/80
                "
              >
                Local languages
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  right-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-5
                  py-4
                  text-sm
                  text-white/80
                "
              >
                Natural expression
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* PRIVACY & SAFETY */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
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
                Safety & privacy
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
                Trust isn't a feature. It's the foundation.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <SafetyCard
                title="Privacy by design"
                description="User accounts, journals and conversations require appropriate access controls, with sensitive credentials kept out of the application code."
              />

              <SafetyCard
                title="Crisis awareness"
                description="High-risk expressions can trigger a safety-oriented response that encourages appropriate immediate human support rather than attempting to handle a crisis alone."
              />

              <SafetyCard
                title="Responsible AI"
                description="Juliana is designed as a support tool, not a replacement for qualified mental health professionals or a diagnostic system."
              />

              <SafetyCard
                title="Human connection"
                description="The long-term vision includes helping users find appropriate professional and community resources when additional support is needed."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* FUTURE */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-[850px] text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              What's next
            </p>

            <h2
              className="
                mt-6
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[60px]
              "
            >
              The chatbot is only the beginning.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[650px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              The vision for Juliana is a broader digital wellness
              platform that grows around the person rather than around
              a single conversation.
            </p>
          </div>

          <div
            className="
              mx-auto
              mt-16
              grid
              max-w-[900px]
              gap-4

              sm:grid-cols-2
            "
          >
            {[
              "Personalised wellness journeys",
              "Expanded local-language support",
              "Professional resource directories",
              "Privacy-conscious analytics",
              "More sophisticated emotional awareness",
              "Connections to mental health professionals",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-[#E6EBF1]
                  bg-white
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#635BFF]/10 text-xs font-semibold text-[#635BFF]">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-[#0A2540]">
                    {item}
                  </span>
                </div>
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
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.12)_0%,rgba(255,128,181,0.06)_45%,transparent_70%)]
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
              Project Juliana
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
              Technology should help people feel less alone.
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
              Juliana is an ongoing exploration of what responsible,
              locally relevant digital mental wellness support can look
              like.
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

/* ========================================================= */
/* Feature Card */
/* ========================================================= */

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-[#E6EBF1]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(10,37,64,0.06)]

        md:p-10
      "
    >
      <span className="text-sm font-semibold text-[#635BFF]">
        {number}
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
        {title}
      </h3>

      <p
        className="
          mt-4
          text-[16px]
          leading-relaxed
          text-[#6B7C93]
        "
      >
        {description}
      </p>
    </div>
  );
}

/* ========================================================= */
/* Safety Card */
/* ========================================================= */

function SafetyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-[22px]
        border
        border-[#E6EBF1]
        p-7
      "
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF]/10 text-sm text-[#635BFF]">
          ✓
        </span>

        <h3
          className="
            text-lg
            font-semibold
            tracking-[-0.02em]
            text-[#0A2540]
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          mt-4
          text-sm
          leading-relaxed
          text-[#6B7C93]
        "
      >
        {description}
      </p>
    </div>
  );
}