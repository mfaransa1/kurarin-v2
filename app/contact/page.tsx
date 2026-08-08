import Container from "@/components/container";
import Link from "next/link";

const projectTypes = [
  "Custom software",
  "Business automation",
  "Cloud infrastructure",
  "Digital product",
  "AI / intelligent systems",
  "Something else",
];

export default function ContactPage() {
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
            -right-64
            -top-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#635BFF]/[0.07]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[15%]
            top-[25%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[#FF80B5]/[0.035]
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
                Get in touch
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[900px]
                text-[52px]
                font-semibold
                leading-[0.94]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[62px]
                md:text-[78px]
                lg:text-[92px]
              "
            >
              Let's build
              <br />
              something useful.
            </h1>

            <p
              className="
                mt-9
                max-w-[680px]
                text-[18px]
                leading-[1.75]
                text-[#6B7C93]

                md:text-[20px]
              "
            >
              Tell us what you're trying to build, improve or solve. We'll
              learn about the problem, understand your goals and figure out
              whether we can help.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CONTACT AREA */}
      {/* ================================================== */}

      <section className="py-24 md:py-32 lg:py-36">
        <Container>
          <div
            className="
              grid
              gap-16

              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-24
            "
          >
            {/* ================================================== */}
            {/* CONTACT INFORMATION */}
            {/* ================================================== */}

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
                Start a conversation
              </span>

              <h2
                className="
                  mt-5
                  text-[36px]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#0A2540]

                  md:text-[46px]
                "
              >
                Have a project
                <br />
                in mind?
              </h2>

              <p
                className="
                  mt-6
                  max-w-[400px]
                  text-[16px]
                  leading-[1.75]
                  text-[#6B7C93]
                "
              >
                You don't need to have everything figured out before reaching
                out. A problem, an idea or even a rough concept is enough to
                start the conversation.
              </p>

              {/* Email */}

              <div className="mt-12">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#6B7C93]
                  "
                >
                  Email
                </span>

                <a
                  href="mailto:info@kurarinsolutions.co.ke"
                  className="
                    mt-3
                    block
                    text-[18px]
                    font-medium
                    text-[#0A2540]
                    transition-colors
                    hover:text-[#635BFF]
                  "
                >
                  info@kurarinsolutions.co.ke
                </a>
              </div>

              {/* Location */}

              <div className="mt-8">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#6B7C93]
                  "
                >
                  Based in
                </span>

                <p
                  className="
                    mt-3
                    text-[16px]
                    font-medium
                    text-[#0A2540]
                  "
                >
                  Nairobi, Kenya
                </p>
              </div>

              {/* Response */}

              <div className="mt-10 border-l-2 border-[#635BFF] pl-5">
                <p
                  className="
                    text-[14px]
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  We typically respond to new enquiries within one business
                  day.
                </p>
              </div>
            </div>

            {/* ================================================== */}
            {/* CONTACT FORM */}
            {/* ================================================== */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#E6EBF1]
                bg-white
                p-7
                shadow-[0_20px_80px_rgba(10,37,64,0.06)]

                md:p-10
              "
            >
              {/* Small gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-[#635BFF]/[0.045]
                  blur-[80px]
                "
              />

              <form className="relative z-10">
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F6F9FC]
                      px-4
                      py-3.5
                      text-[15px]
                      text-[#0A2540]
                      outline-none
                      transition-all
                      placeholder:text-[#A0AAB5]
                      focus:border-[#635BFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#635BFF]/10
                    "
                  />
                </div>

                {/* Email */}

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F6F9FC]
                      px-4
                      py-3.5
                      text-[15px]
                      text-[#0A2540]
                      outline-none
                      transition-all
                      placeholder:text-[#A0AAB5]
                      focus:border-[#635BFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#635BFF]/10
                    "
                  />
                </div>

                {/* Company */}

                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Company
                    <span className="ml-1 font-normal text-[#A0AAB5]">
                      (optional)
                    </span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F6F9FC]
                      px-4
                      py-3.5
                      text-[15px]
                      text-[#0A2540]
                      outline-none
                      transition-all
                      placeholder:text-[#A0AAB5]
                      focus:border-[#635BFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#635BFF]/10
                    "
                  />
                </div>

                {/* Project Type */}

                <div className="mt-6">
                  <label
                    htmlFor="project"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    What can we help with?
                  </label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    className="
                      mt-3
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F6F9FC]
                      px-4
                      py-3.5
                      text-[15px]
                      text-[#0A2540]
                      outline-none
                      transition-all
                      focus:border-[#635BFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#635BFF]/10
                    "
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Tell us about it
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, challenge or idea..."
                    className="
                      mt-3
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F6F9FC]
                      px-4
                      py-3.5
                      text-[15px]
                      leading-relaxed
                      text-[#0A2540]
                      outline-none
                      transition-all
                      placeholder:text-[#A0AAB5]
                      focus:border-[#635BFF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#635BFF]/10
                    "
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    group
                    mt-7
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#635BFF]
                    px-6
                    py-4
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_15px_35px_rgba(99,91,255,0.2)]
                  "
                >
                  Send enquiry

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>

                <p
                  className="
                    mt-4
                    text-center
                    text-[12px]
                    leading-relaxed
                    text-[#A0AAB5]
                  "
                >
                  By submitting this form, you agree to be contacted about
                  your enquiry.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* WHAT HAPPENS NEXT */}
      {/* ================================================== */}

      <section className="bg-[#F6F9FC] py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Heading */}

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
                What happens next
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
                Simple from
                <br />
                here.
              </h2>
            </div>

            {/* Steps */}

            <div className="border-t border-[#E6EBF1]">
              <div
                className="
                  grid
                  gap-5
                  border-b
                  border-[#E6EBF1]
                  py-8

                  md:grid-cols-[70px_1fr]
                  md:py-10
                "
              >
                <span className="text-[12px] font-medium text-[#635BFF]">
                  01
                </span>

                <div>
                  <h3 className="text-[21px] font-semibold text-[#0A2540]">
                    Tell us what you're working on.
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#6B7C93]">
                    Give us as much or as little context as you have. We'll
                    ask the right questions from there.
                  </p>
                </div>
              </div>

              <div
                className="
                  grid
                  gap-5
                  border-b
                  border-[#E6EBF1]
                  py-8

                  md:grid-cols-[70px_1fr]
                  md:py-10
                "
              >
                <span className="text-[12px] font-medium text-[#635BFF]">
                  02
                </span>

                <div>
                  <h3 className="text-[21px] font-semibold text-[#0A2540]">
                    We understand the problem.
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#6B7C93]">
                    We'll discuss your goals, constraints and requirements to
                    understand what needs to be solved.
                  </p>
                </div>
              </div>

              <div
                className="
                  grid
                  gap-5
                  border-b
                  border-[#E6EBF1]
                  py-8

                  md:grid-cols-[70px_1fr]
                  md:py-10
                "
              >
                <span className="text-[12px] font-medium text-[#635BFF]">
                  03
                </span>

                <div>
                  <h3 className="text-[21px] font-semibold text-[#0A2540]">
                    We figure out the right approach.
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#6B7C93]">
                    If we're a good fit, we'll recommend a practical path
                    forward and define the next steps together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FINAL CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden py-28 md:py-36">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#635BFF]/[0.045]
            blur-[120px]
          "
        />

        <Container>
          <div className="relative z-10 text-center">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B7C93]
              "
            >
              Prefer email?
            </span>

            <h2
              className="
                mx-auto
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
              Say hello directly.
            </h2>

            <a
              href="mailto:info@kurarinsolutions.co.ke"
              className="
                mt-7
                inline-block
                text-[18px]
                font-medium
                text-[#635BFF]
                underline
                decoration-[#635BFF]/30
                underline-offset-8
                transition-colors
                hover:text-[#0A2540]
              "
            >
              info@kurarinsolutions.co.ke
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}