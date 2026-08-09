import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "Digital customer journeys",
    description:
      "Design connected experiences that make it easier for customers to discover, choose, purchase and interact with your organization.",
  },
  {
    number: "02",
    title: "Customer portals",
    description:
      "Give customers secure, convenient access to services, information, documents, bookings and account activity.",
  },
  {
    number: "03",
    title: "Web experiences",
    description:
      "Create fast, responsive digital experiences that communicate your value clearly and turn attention into meaningful action.",
  },
  {
    number: "04",
    title: "Self-service systems",
    description:
      "Reduce unnecessary back-and-forth by allowing customers to complete common tasks themselves, whenever and wherever they need.",
  },
];

const experiencePoints = [
  "Clearer customer journeys",
  "Faster access to services",
  "Reduced support friction",
  "Better customer communication",
  "More digital self-service",
  "Consistent experiences across channels",
];

const journey = [
  {
    step: "01",
    title: "Discover",
    description: "Customers find your organization and understand what you offer.",
  },
  {
    step: "02",
    title: "Engage",
    description: "They interact with a digital experience designed around their needs.",
  },
  {
    step: "03",
    title: "Act",
    description: "They can complete the task they came to accomplish without unnecessary friction.",
  },
  {
    step: "04",
    title: "Return",
    description: "A useful experience gives customers a reason to come back.",
  },
];

export default function CustomerExperiencesPage() {
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
            -right-56
            -top-64
            h-[800px]
            w-[800px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.16)_0%,rgba(255,128,181,0.09)_40%,rgba(255,179,71,0.05)_55%,transparent_72%)]
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
                Solutions · Customer Experiences
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
                Make every interaction
                <br />
                feel effortless.
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
                Your customers shouldn't have to work to do business with
                you. We build digital experiences that make finding,
                accessing and using your services simpler.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Improve your customer experience"
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
      {/* THE PROBLEM */}
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
                Customers remember
                <br />
                friction.
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
                A customer may never see your internal systems, but they
                experience the consequences of them every time they
                interact with your organization.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Confusing websites, slow responses, complicated booking
                processes, repetitive forms and disconnected communication
                all create unnecessary friction.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                We design the digital layer between your organization and
                its customers so that every important interaction feels
                intentional.
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
              Digital experiences
              <br />
              people actually want to use.
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
              From a high-performing website to a complete customer
              platform, we design experiences around what your customers
              are trying to accomplish.
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
      {/* CUSTOMER JOURNEY */}
      {/* ===================================================== */}

      <section className="overflow-hidden bg-[#0A2540] py-24 lg:py-32">
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
                The experience
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
                Every step should
                <br />
                have a purpose.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[500px]
                  text-lg
                  leading-relaxed
                  text-white/60
                "
              >
                We think beyond individual screens. The real product is
                the complete journey a customer takes with your
                organization.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {journey.map((item) => (
                <div
                  key={item.step}
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                    transition-all
                    duration-300
                    hover:bg-white/[0.07]
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#A8A3FF]
                    "
                  >
                    {item.step}
                  </span>

                  <h3
                    className="
                      mt-8
                      text-2xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-[1.7]
                      text-white/50
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
      {/* REAL-WORLD EXAMPLE */}
      {/* ===================================================== */}

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
                Built for real businesses
              </p>

              <h2
                className="
                  mt-6
                  max-w-[650px]
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[56px]
                "
              >
                Your digital experience should reflect how your customers
                actually live.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-lg
                  leading-[1.7]
                  text-[#425466]
                "
              >
                Consider a customer arranging an airport transfer. They
                don't want to understand your internal operations. They
                want to book, receive confirmation, communicate with the
                provider and get where they're going.
              </p>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                The technology behind that experience can be complex.
                The experience itself shouldn't be.
              </p>

              <div className="mt-8">
                <a
                  href="/work"
                  className="
                    text-sm
                    font-semibold
                    text-[#635BFF]
                    transition-colors
                    hover:text-[#4F46E5]
                  "
                >
                  Explore our work →
                </a>
              </div>
            </div>

            {/* Experience card */}

            <div className="relative">
              <div
                className="
                  absolute
                  -inset-8
                  rounded-full
                  bg-[radial-gradient(circle,rgba(99,91,255,0.13),transparent_65%)]
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#E6EBF1]
                  bg-white
                  shadow-[0_30px_80px_rgba(10,37,64,0.08)]
                "
              >
                <div className="border-b border-[#E6EBF1] px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#635BFF]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF80B5]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FFB347]" />
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6B7C93]">
                    Customer portal
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A2540]">
                    Your journey starts here.
                  </h3>

                  <div className="mt-8 space-y-3">
                    {[
                      ["Booking", "Completed"],
                      ["Confirmation", "Sent"],
                      ["Driver", "Assigned"],
                    ].map(([label, status]) => (
                      <div
                        key={label}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          bg-[#F6F9FC]
                          px-4
                          py-4
                        "
                      >
                        <span className="text-sm font-medium text-[#0A2540]">
                          {label}
                        </span>

                        <span className="text-xs font-semibold text-[#635BFF]">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-6
                      rounded-xl
                      bg-[#635BFF]
                      px-5
                      py-4
                      text-center
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    View booking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* OUTCOMES */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
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
                Make it easier
                <br />
                to choose you.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {experiencePoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E6EBF1]
                    bg-white
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
              Customer experience
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
              Build experiences
              <br />
              worth returning to.
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
              Tell us what your customers experience today. We'll help
              you design what they should experience tomorrow.
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