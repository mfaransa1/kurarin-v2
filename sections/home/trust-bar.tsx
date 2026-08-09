import Container from "@/components/container";

const companies = [
  {
    name: "BoB Van Transfers",
    type: "Transport",
  },
  {
    name: "SmartFix Interior",
    type: "Interior & Design",
  },
  {
    name: "WAA SACCO",
    type: "Financial Systems",
  },
  {
    name: "Jobugi LMS",
    type: "Education",
  },
  {
    name: "Project Juliana",
    type: "AI · Mental Wellness",
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-[#E6EBF1] bg-white">
      <Container>
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:py-7">
          {/* ================================================== */}
          {/* LABEL */}
          {/* ================================================== */}

          <div className="relative z-20 shrink-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#635BFF]/30" />
                <span className="relative h-2 w-2 rounded-full bg-[#635BFF]" />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Selected clients & projects
              </span>
            </div>
          </div>

          {/* ================================================== */}
          {/* MARQUEE */}
          {/* ================================================== */}

          <div className="relative min-w-0 flex-1 overflow-hidden">
            {/* Left fade */}

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-20
                bg-gradient-to-r
                from-white
                via-white/90
                to-transparent
              "
            />

            {/* Right fade */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-20
                bg-gradient-to-l
                from-white
                via-white/90
                to-transparent
              "
            />

            <div className="trust-marquee flex w-max items-center">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="
                    group
                    mx-7
                    flex
                    shrink-0
                    items-center
                    gap-4
                    transition-all
                    duration-300
                  "
                >
                  {/* Logo-style mark */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#E6EBF1]
                      bg-[#F8FAFC]
                      text-[11px]
                      font-bold
                      tracking-[-0.02em]
                      text-[#425466]
                      transition-all
                      duration-300

                      group-hover:border-[#D9D5FF]
                      group-hover:bg-[#F1F0FF]
                      group-hover:text-[#635BFF]
                    "
                  >
                    {company.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  {/* Name */}

                  <div>
                    <div
                      className="
                        text-[14px]
                        font-semibold
                        tracking-[-0.02em]
                        text-[#425466]
                        transition-colors
                        duration-300
                        group-hover:text-[#0A2540]
                      "
                    >
                      {company.name}
                    </div>

                    <div
                      className="
                        mt-0.5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-[#9AA6B2]
                      "
                    >
                      {company.type}
                    </div>
                  </div>

                  {/* Separator */}

                  <span
                    className="
                      ml-4
                      h-1
                      w-1
                      rounded-full
                      bg-[#D8DEE6]
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile supporting label */}

        <div className="pb-6 text-center md:hidden">
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#9AA6B2]
            "
          >
            Software · Systems · Digital Products
          </span>
        </div>
      </Container>

      {/* ================================================== */}
      {/* MARQUEE ANIMATION */}
      {/* ================================================== */}

      <style>{`
        .trust-marquee {
          animation: trust-marquee 32s linear infinite;
        }

        .trust-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes trust-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trust-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}