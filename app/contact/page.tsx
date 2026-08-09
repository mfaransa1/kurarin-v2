"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/container";

const projectTypes = [
  "Custom software",
  "Business automation",
  "Cloud infrastructure",
  "Digital product",
  "AI / intelligent systems",
  "Something else",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      project: String(formData.get("project") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry. Please try again."
      );
    }
  }

  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative pt-16 md:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-[950px]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
                Get in touch
              </span>
            </div>

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
      {/* CONTACT */}
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
            {/* INFORMATION */}
            {/* ================================================== */}

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
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

              <p className="mt-6 max-w-[400px] text-[16px] leading-[1.75] text-[#6B7C93]">
                You don't need to have everything figured out before reaching
                out. A problem, an idea or even a rough concept is enough to
                start the conversation.
              </p>

              {/* Email */}

              <div className="mt-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
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
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                  Based in
                </span>

                <p className="mt-3 text-[16px] font-medium text-[#0A2540]">
                  Nairobi, Kenya
                </p>
              </div>

              {/* Response */}

              <div className="mt-10 border-l-2 border-[#635BFF] pl-5">
                <p className="text-[14px] leading-[1.7] text-[#6B7C93]">
                  We typically respond to new enquiries within one business
                  day.
                </p>
              </div>
            </div>

            {/* ================================================== */}
            {/* FORM */}
            {/* ================================================== */}

            <div
              className="
                relative
                rounded-[24px]
                border
                border-[#E6EBF1]
                bg-white
                p-7

                md:p-10
              "
            >
              {status === "success" ? (
                <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F6F9FC]
                      text-[22px]
                      text-[#635BFF]
                    "
                  >
                    ✓
                  </div>

                  <h3
                    className="
                      mt-6
                      text-[30px]
                      font-semibold
                      tracking-[-0.04em]
                      text-[#0A2540]
                    "
                  >
                    Message received.
                  </h3>

                  <p className="mt-4 max-w-[430px] text-[16px] leading-[1.7] text-[#6B7C93]">
                    Thanks for reaching out to Kurarin Solutions. We'll
                    review your enquiry and get back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="
                      mt-8
                      text-[14px]
                      font-semibold
                      text-[#635BFF]
                      underline
                      underline-offset-4
                    "
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Honeypot */}

                  <div
                    className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Website</label>

                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="text-[13px] font-semibold text-[#0A2540]"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Kaosongo Doe"
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
                      "
                    />
                  </div>

                  {/* Email */}

                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="text-[13px] font-semibold text-[#0A2540]"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="kasongo@company.com"
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
                      "
                    />
                  </div>

                  {/* Company */}

                  <div className="mt-6">
                    <label
                      htmlFor="company"
                      className="text-[13px] font-semibold text-[#0A2540]"
                    >
                      Company{" "}
                      <span className="font-normal text-[#A0AAB5]">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
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
                      "
                    />
                  </div>

                  {/* Project */}

                  <div className="mt-6">
                    <label
                      htmlFor="project"
                      className="text-[13px] font-semibold text-[#0A2540]"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="project"
                      name="project"
                      required
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
                      className="text-[13px] font-semibold text-[#0A2540]"
                    >
                      Tell us about it
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
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
                      "
                    />
                  </div>

                  {/* Error */}

                  {status === "error" && (
                    <div
                      className="
                        mt-6
                        rounded-xl
                        border
                        border-red-200
                        bg-red-50
                        px-4
                        py-3
                        text-[13px]
                        leading-relaxed
                        text-red-700
                      "
                    >
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={status === "sending"}
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
                      hover:bg-[#554CF0]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {status === "sending" ? (
                      <>
                        <span
                          className="
                            h-4
                            w-4
                            animate-spin
                            rounded-full
                            border-2
                            border-white/30
                            border-t-white
                          "
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        Send enquiry

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[12px] leading-relaxed text-[#A0AAB5]">
                    By submitting this form, you agree to be contacted about
                    your enquiry.
                  </p>
                </form>
              )}
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
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
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

            <div className="border-t border-[#E6EBF1]">
              {[
                {
                  number: "01",
                  title: "Tell us what you're working on.",
                  description:
                    "Give us as much or as little context as you have. We'll ask the right questions from there.",
                },
                {
                  number: "02",
                  title: "We understand the problem.",
                  description:
                    "We'll discuss your goals, constraints and requirements to understand what needs to be solved.",
                },
                {
                  number: "03",
                  title: "We figure out the right approach.",
                  description:
                    "If we're a good fit, we'll recommend a practical path forward and define the next steps together.",
                },
              ].map((step) => (
                <div
                  key={step.number}
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
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-[21px] font-semibold text-[#0A2540]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#6B7C93]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FINAL CTA */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
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