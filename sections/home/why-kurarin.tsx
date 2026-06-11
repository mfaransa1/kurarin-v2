import Container from "@/components/container";

const principles = [
  {
    title: "Built for scale",
    description:
      "Systems designed to grow alongside your organization without sacrificing performance.",
  },
  {
    title: "Security first",
    description:
      "Every platform is built with modern security standards and best practices from day one.",
  },
  {
    title: "Long-term partnership",
    description:
      "We focus on sustainable solutions and ongoing support rather than short-term projects.",
  },
  {
    title: "Fast execution",
    description:
      "Lean processes and experienced teams help move ideas from concept to launch quickly.",
  },
];

export default function WhyKurarin() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-[720px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#635BFF]">
            Why Kurarin
          </p>

          <h2
            className="
              mt-6
              text-[40px]
              font-semibold
              leading-[1]
              tracking-[-0.04em]

              md:text-[56px]
            "
          >
            Built to support ambitious organizations.
          </h2>
        </div>

        <div
          className="
            mt-20
            grid
            gap-12

            md:grid-cols-2
          "
        >
          {principles.map((item) => (
            <div key={item.title}>
              <h3
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#0A2540]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[460px]
                  text-lg
                  leading-relaxed
                  text-[#425466]
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