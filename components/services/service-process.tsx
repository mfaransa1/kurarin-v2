import Container from "@/components/container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your organization, users, workflows and the problem we're solving before writing a line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn requirements into a clear product architecture, user experience and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team develops the system in focused iterations, keeping you involved throughout the process.",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description:
      "We deploy, monitor and improve the system as your organization grows and your needs change.",
  },
];

export default function ServiceProcess() {
  return (
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
              How we work
            </p>

            <h2
              className="
                mt-6
                max-w-[460px]
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[52px]
              "
            >
              From idea to infrastructure.
            </h2>
          </div>

          <div className="border-t border-[#E6EBF1]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  grid
                  gap-5
                  border-b
                  border-[#E6EBF1]
                  py-8

                  sm:grid-cols-[70px_190px_1fr]
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#635BFF]
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A2540]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    max-w-[460px]
                    text-[15px]
                    leading-relaxed
                    text-[#6B7C93]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}