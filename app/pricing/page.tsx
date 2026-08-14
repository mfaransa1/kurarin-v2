import Container from "@/components/container";
import Link from "next/link";
import Reveal from "@/components/reveal";

const pricing = [
  {
    number: "01",
    title: "Digital Presence",
    price: "From KES 45,000",
    description:
      "Professional websites and digital experiences for businesses that need a strong, credible presence online.",
    features: [
      "Business websites",
      "Landing pages",
      "Responsive design",
      "Content management",
      "Contact & enquiry systems",
    ],
  },
  {
    number: "02",
    title: "Business Systems",
    price: "From KES 120,000",
    description:
      "Purpose-built systems that help businesses manage operations, customers, information and workflows.",
    features: [
      "Internal business systems",
      "Client portals",
      "Dashboards",
      "User authentication",
      "Workflow automation",
    ],
  },
  {
    number: "03",
    title: "Custom Software",
    price: "From KES 250,000",
    description:
      "Custom applications built around the way your organization actually works.",
    features: [
      "Web applications",
      "APIs & integrations",
      "Database architecture",
      "Role-based access",
      "Cloud deployment",
    ],
  },
  {
    number: "04",
    title: "Digital Products",
    price: "From KES 400,000+",
    description:
      "Complex digital products for organizations building something new or transforming an existing operation.",
    features: [
      "Product strategy",
      "UX & UI",
      "MVP development",
      "AI & intelligent systems",
      "Scalable infrastructure",
    ],
  },
];

const factors = [
  "Number of users",
  "Features and workflows",
  "Third-party integrations",
  "Authentication and permissions",
  "Payments and transactions",
  "Cloud infrastructure",
  "AI functionality",
  "Reporting and dashboards",
];

const support = [
  {
    number: "01",
    title: "Essential",
    price: "From KES 15,000 / month",
    description:
      "For businesses that need reliable maintenance and ongoing technical support.",
    items: [
      "System maintenance",
      "Security updates",
      "Monitoring",
      "Minor fixes",
    ],
  },
  {
    number: "02",
    title: "Business",
    price: "From KES 30,000 / month",
    description:
      "For organizations that depend on their systems and need more proactive support.",
    items: [
      "Everything in Essential",
      "Priority support",
      "Performance monitoring",
      "Minor improvements",
    ],
  },
  {
    number: "03",
    title: "Dedicated",
    price: "Custom",
    description:
      "For organizations requiring ongoing development, infrastructure management and dedicated technical support.",
    items: [
      "Dedicated support",
      "Continuous development",
      "Infrastructure management",
      "Custom service levels",
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        <Container>
          <Reveal>
            <div className="max-w-[850px]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
                  Pricing
                </span>
              </div>

              <h1
                className="
                  mt-7
                  max-w-[850px]
                  text-[52px]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#0A2540]
                  sm:text-[62px]
                  md:text-[78px]
                  lg:text-[92px]
                "
              >
                Clear starting points.
                <br />
                <span className="text-[#635BFF]">
                  Built around your needs.
                </span>
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
                Every project is different. We use these starting points to
                give you an idea of where your project may fall, then scope
                the actual work before providing a proposal.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PRICING */}
      <section className="py-24 md:py-32 lg:py-36">
        <Container>
          <div className="border-t border-[#E6EBF1]">
            {pricing.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <article className="group border-b border-[#E6EBF1] py-10 md:py-14 lg:py-16">
                  <div
                    className="
                      grid
                      gap-8
                      lg:grid-cols-[70px_1fr_1fr_180px]
                      lg:items-start
                      lg:gap-12
                    "
                  >
                    {/* Number */}
                    <span className="text-[12px] font-medium tracking-[0.04em] text-[#6B7C93] transition-colors duration-300 group-hover:text-[#635BFF]">
                      {item.number}
                    </span>

                    {/* Title */}
                    <div>
                      <h2
                        className="
                          text-[30px]
                          font-semibold
                          leading-[1]
                          tracking-[-0.04em]
                          text-[#0A2540]
                          md:text-[38px]
                        "
                      >
                        {item.title}
                      </h2>

                      <p className="mt-4 text-[17px] font-medium text-[#635BFF]">
                        {item.price}
                      </p>
                    </div>

                    {/* Description + Features */}
                    <div>
                      <p className="max-w-[500px] text-[16px] leading-[1.7] text-[#6B7C93]">
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-y-2 sm:grid-cols-2">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-[13px] font-medium text-[#425466]"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#0A2540]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:flex lg:justify-end">
                      <Link
                        href="/contact"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[14px]
                          font-semibold
                          text-[#0A2540]
                          transition-colors
                          duration-200
                          hover:text-[#635BFF]
                        "
                      >
                        Discuss a project
                        <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="border-y border-[#E6EBF1] bg-[#F6F9FC] py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
                  Project scope
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
                  What determines
                  <br />
                  the final price?
                </h2>

                <p className="mt-6 max-w-[430px] text-[16px] leading-[1.75] text-[#6B7C93]">
                  Starting prices are useful for orientation, but the final
                  cost depends on the complexity and requirements of the
                  project.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-t border-[#DDE3EA]">
                {factors.map((factor, index) => (
                  <div
                    key={factor}
                    className="flex items-center justify-between border-b border-[#DDE3EA] py-5"
                  >
                    <span className="text-[15px] font-medium text-[#0A2540]">
                      {factor}
                    </span>

                    <span className="text-[11px] font-medium text-[#A0AAB5]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SUPPORT */}
      <section className="py-24 md:py-32 lg:py-36">
        <Container>
          <Reveal>
            <div className="max-w-[700px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
                Ongoing support
              </span>

              <h2
                className="
                  mt-5
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]
                  md:text-[56px]
                "
              >
                Keep your systems
                <br />
                running properly.
              </h2>

              <p className="mt-6 max-w-[600px] text-[17px] leading-[1.7] text-[#6B7C93]">
                Technology does not stop when a project launches. Our support
                plans help keep your systems secure, reliable and improving
                over time.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-[#E6EBF1]">
            {support.map((item, index) => (
              <Reveal key={item.number} delay={index * 80}>
                <div className="border-b border-[#E6EBF1] py-10 md:py-12">
                  <div className="grid gap-6 md:grid-cols-[70px_0.8fr_1.2fr_220px] md:items-start md:gap-10">
                    <span className="text-[12px] font-medium text-[#6B7C93]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-[25px] font-semibold tracking-[-0.03em] text-[#0A2540]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[14px] font-medium text-[#635BFF]">
                        {item.price}
                      </p>
                    </div>

                    <div>
                      <p className="max-w-[500px] text-[15px] leading-[1.7] text-[#6B7C93]">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {item.items.map((feature) => (
                          <span
                            key={feature}
                            className="text-[12px] font-medium text-[#425466]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:text-right">
                      <Link
                        href="/contact"
                        className="text-[14px] font-semibold text-[#0A2540] transition-colors hover:text-[#635BFF]"
                      >
                        Talk to us →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <Reveal>
            <div className="max-w-[800px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7C93]">
                Have something in mind?
              </span>

              <h2
                className="
                  mt-5
                  text-[42px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.055em]
                  text-[#0A2540]
                  md:text-[64px]
                "
              >
                Let's work out
                <br />
                what it should cost.
              </h2>

              <p className="mt-7 max-w-[600px] text-[17px] leading-[1.7] text-[#6B7C93]">
                Tell us what you're trying to build, improve or automate.
                We'll understand the requirements and help you determine the
                right approach.
              </p>

              <Link
                href="/contact"
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#0A2540]
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#635BFF]
                "
              >
                Start a conversation
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}