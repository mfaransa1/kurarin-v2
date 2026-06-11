import Container from "@/components/container";

const services = [
  {
    title: "Software Development",
    description:
      "Custom web platforms, enterprise systems and scalable software built around your business processes.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure, reliable cloud architecture designed for performance, scalability and resilience.",
  },
  {
    title: "Business Automation",
    description:
      "Reduce repetitive work and streamline operations through intelligent automation.",
  },
  {
    title: "Digital Products",
    description:
      "Modern customer experiences, portals and applications that drive growth.",
  },
];

export default function Services() {
  return (
    <section className="py-32">
      <Container>
        {/* Intro */}

        <div className="max-w-[720px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#635BFF]">
            Services
          </p>

          <h2
            className="
              mt-6
              text-[40px]
              font-semibold
              leading-[1]
              tracking-[-0.04em]
              text-[#0A2540]

              md:text-[56px]
            "
          >
            Building the systems that power modern businesses.
          </h2>

          <p
            className="
              mt-6
              max-w-[640px]
              text-lg
              leading-relaxed
              text-[#425466]
            "
          >
            From custom software to cloud infrastructure,
            we help organizations build, launch and scale
            digital solutions with confidence.
          </p>
        </div>

        {/* Services */}

        <div className="mt-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                grid
                gap-8
                py-10

                md:grid-cols-2

                ${
                  index !== services.length - 1
                    ? "border-b border-[#E6EBF1]"
                    : ""
                }
              `}
            >
              <div>
                <h3
                  className="
                    text-[28px]
                    font-semibold
                    tracking-tight
                    text-[#0A2540]
                  "
                >
                  {service.title}
                </h3>
              </div>

              <div>
                <p
                  className="
                    max-w-[500px]
                    text-lg
                    leading-relaxed
                    text-[#425466]
                  "
                >
                  {service.description}
                </p>

                <button
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-[#635BFF]
                    hover:translate-x-1
                    transition-transform
                  "
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}