import Container from "@/components/container";

const principles = [
  {
    number: "01",
    title: "Understand the problem first.",
    description:
      "We start with the business problem, not the technology. Understanding how your organization works helps us build solutions that actually fit.",
  },
  {
    number: "02",
    title: "Build for what comes next.",
    description:
      "The systems we build are designed with growth in mind — flexible enough to evolve as your organization, customers and requirements change.",
  },
  {
    number: "03",
    title: "Keep complexity under control.",
    description:
      "Good technology should make things simpler. We focus on clear architecture, thoughtful interfaces and systems that are easy to understand and maintain.",
  },
  {
    number: "04",
    title: "Stay involved beyond launch.",
    description:
      "Launching a product is only the beginning. We build long-term relationships and remain available to improve, support and evolve what we create.",
  },
];

export default function WhyKurarin() {
  return (
    <section className="w-full bg-white py-28 lg:py-36">
      <Container>
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7c93]">
                Why Kurarin
              </span>
            </div>
          </div>

          <div>
            <h2
              className="
                max-w-[760px]
                text-[40px]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0A2540]

                md:text-[54px]
                lg:text-[60px]
              "
            >
              We build technology
              <span className="text-[#635BFF]">
                {" "}
                with intention.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[18px]
                leading-[1.7]
                text-[#425466]
              "
            >
              Technology is only useful when it solves the right problem.
              Our approach combines business understanding, thoughtful
              engineering and long-term thinking.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-24 border-t border-[#e6ebf1]">
          {principles.map((item) => (
            <div
              key={item.number}
              className="
                grid
                gap-6
                border-b
                border-[#e6ebf1]
                py-10

                md:grid-cols-[80px_1fr_1.2fr]
                md:items-start
                md:gap-10
                md:py-12
              "
            >
              {/* Number */}
              <span
                className="
                  text-[13px]
                  font-medium
                  tracking-[0.04em]
                  text-[#635BFF]
                "
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className="
                  max-w-[420px]
                  text-[24px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-[#0A2540]

                  md:text-[28px]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-[560px]
                  text-[16px]
                  leading-[1.7]
                  text-[#6b7c93]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}