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
      "A workflow automation platform designed to reduce operational overhead and improve efficiency.",
  },
  {
    title: "Enterprise Client Portal",
    category: "Enterprise",
    description:
      "A secure customer portal designed for self-service, reporting and account management.",
  },
  {
    title: "BoB Van Transfers",
    category: "Transportation • Digital Platform",
    description:
      "A modern digital platform for airport transfers, hotel transportation and chauffeured travel services.",
  },
  {
    title: "SmartFix Interiors",
    category: "Interior Design • Digital Presence",
    description:
      "A digital experience designed to showcase interior solutions, communicate services and connect the business with customers.",
  },
  {
    title: "Project Juliana",
    category: "Digital Product",
    description:
      "Project description coming soon.",
  },
];

export default function Work() {
  return (
    <section className="w-full bg-[#f6f9fc] py-28 lg:py-36">
      <Container>
        {/* Section Header */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7c93]">
              Selected Work
            </span>
          </div>

          <h2
            className="
              mt-6
              text-[40px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-[#0A2540]

              md:text-[56px]
            "
          >
            Built for impact.
          </h2>

          <p
            className="
              mt-6
              max-w-[620px]
              text-lg
              leading-[1.7]
              text-[#425466]
            "
          >
            We partner with organizations to build software systems and
            digital experiences that improve operations, customer
            experiences and business growth.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group
                rounded-3xl
                border
                border-[#E6EBF1]
                bg-white
                p-8
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#d9dff0]
                hover:shadow-[0_20px_60px_rgba(10,37,64,0.06)]

                md:p-10
                lg:p-12
              "
            >
              <div className="grid gap-8 md:grid-cols-[80px_0.9fr_1.1fr] md:items-start md:gap-10">
                {/* Project Number */}
                <div>
                  <span
                    className="
                      text-[13px]
                      font-medium
                      tracking-[0.04em]
                      text-[#6b7c93]
                      transition-colors
                      duration-300
                      group-hover:text-[#635BFF]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Name */}
                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#635BFF]
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-[#0A2540]

                      md:text-3xl
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    className="
                      max-w-[560px]
                      text-[16px]
                      leading-[1.7]
                      text-[#425466]
                    "
                  >
                    {project.description}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#0A2540]
                      transition-colors
                      duration-200
                      group-hover:text-[#635BFF]
                    "
                  >
                    View case study
                    <span
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All Work */}
        <div className="mt-10">
          <a
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[#0A2540]
            "
          >
            <span className="border-b border-[#0A2540] pb-0.5 transition-colors duration-200 group-hover:border-[#635BFF] group-hover:text-[#635BFF]">
              View all work
            </span>

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}