import Container from "@/components/container";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom platforms and applications designed around how your business actually works.",
    items: [
      "Web applications",
      "Enterprise systems",
      "Client portals",
      "APIs & integrations",
    ],
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "Replace repetitive processes with connected workflows that save time and reduce operational overhead.",
    items: [
      "Workflow automation",
      "Internal tools",
      "Data processing",
      "System integrations",
    ],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "Reliable infrastructure engineered for performance, security and long-term growth.",
    items: [
      "Cloud deployment",
      "Infrastructure",
      "Databases",
      "Monitoring & reliability",
    ],
  },
  {
    number: "04",
    title: "Digital Products",
    description:
      "Turn ideas into polished digital products that are useful, intuitive and ready to grow.",
    items: [
      "Product strategy",
      "UX & UI",
      "MVP development",
      "Product iteration",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-36">
      {/* ------------------------------------------------ */}
      {/* Ambient Gradient */}
      {/* ------------------------------------------------ */}

      <div
        className="
          pointer-events-none
          absolute
          -left-64
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#635BFF]/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-64
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#FF80B5]/[0.025]
          blur-[120px]
        "
      />

      <Container>
        {/* ------------------------------------------------ */}
        {/* Section Introduction */}
        {/* ------------------------------------------------ */}

        <div className="relative z-10 max-w-[760px]">
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
              What we build
            </span>
          </div>

          <h2
            className="
              mt-7
              text-[42px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#0A2540]

              md:text-[58px]
              lg:text-[68px]
            "
          >
            Technology that moves
            <br />
            your business forward.
          </h2>

          <p
            className="
              mt-7
              max-w-[620px]
              text-[18px]
              leading-[1.7]
              text-[#6B7C93]

              md:text-[19px]
            "
          >
            We design and build the software, systems and digital
            infrastructure organizations need to operate better and grow
            confidently.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* Services */}
        {/* ------------------------------------------------ */}

        <div className="relative z-10 mt-20 md:mt-28">
          {services.map((service) => (
            <Link
              key={service.number}
              href="/services"
              className="
                group
                block
                border-t
                border-[#E6EBF1]
                py-10
                transition-colors
                duration-300

                md:py-12
                lg:py-14
              "
            >
              <div
                className="
                  grid
                  gap-8

                  lg:grid-cols-[80px_1.25fr_1fr_40px]
                  lg:items-start
                  lg:gap-10
                "
              >
                {/* Number */}

                <div
                  className="
                    text-[13px]
                    font-medium
                    tracking-[0.04em]
                    text-[#6B7C93]
                    transition-colors
                    duration-300
                    group-hover:text-[#635BFF]
                  "
                >
                  {service.number}
                </div>

                {/* Title */}

                <div>
                  <h3
                    className="
                      text-[28px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#0A2540]
                      transition-transform
                      duration-300

                      md:text-[34px]
                      lg:text-[38px]

                      group-hover:translate-x-1
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description + Capabilities */}

                <div>
                  <p
                    className="
                      max-w-[470px]
                      text-[16px]
                      leading-[1.65]
                      text-[#6B7C93]

                      md:text-[17px]
                    "
                  >
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="
                          text-[12px]
                          font-medium
                          text-[#425466]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}

                <div
                  className="
                    hidden
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E6EBF1]
                    text-[16px]
                    text-[#425466]
                    transition-all
                    duration-300

                    lg:flex

                    group-hover:border-[#635BFF]
                    group-hover:bg-[#635BFF]
                    group-hover:text-white
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Bottom border */}

          <div className="border-t border-[#E6EBF1]" />
        </div>

        {/* ------------------------------------------------ */}
        {/* Services Footer Link */}
        {/* ------------------------------------------------ */}

        <div className="relative z-10 mt-10">
          <Link
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[14px]
              font-semibold
              text-[#0A2540]
              transition-colors
              duration-200
              hover:text-[#635BFF]
            "
          >
            Explore all services

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}