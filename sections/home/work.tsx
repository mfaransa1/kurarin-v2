import Container from "@/components/container";

const projects = [
  {
    title: "School Management Platform",
    category: "Education",
    description:
      "A complete digital ecosystem for admissions, finance, examinations and communication.",
  },
  {
    title: "Business Automation System",
    category: "Automation",
    description:
      "Workflow automation platform that reduced operational overhead and improved efficiency.",
  },
  {
    title: "Enterprise Client Portal",
    category: "Enterprise",
    description:
      "Secure customer portal built for self-service, reporting and account management.",
  },
];

export default function Work() {
  return (
    <section className="bg-[#F6F9FC] py-40">
      <Container>
        <div className="max-w-[720px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#635BFF]">
            Selected Work
          </p>

          <h2
            className="
              mt-6
              text-[40px]
              font-semibold
              tracking-[-0.04em]
              leading-[1]

              md:text-[56px]
            "
          >
            Built for impact.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-[#425466]
              max-w-[620px]
            "
          >
            We partner with organizations to build
            software systems that improve operations,
            customer experiences and business growth.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-3xl
                bg-white
                border
                border-[#E6EBF1]
                p-8

                md:p-12
              "
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-[#635BFF]">
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-3xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p
                    className="
                      text-lg
                      leading-relaxed
                      text-[#425466]
                    "
                  >
                    {project.description}
                  </p>

                  <button
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      text-[#635BFF]
                    "
                  >
                    View case study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
