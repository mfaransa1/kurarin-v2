import Container from "@/components/container";

const companies = [
  "BoB Van Transfers",
  "SmartFix Interiors",
  "Kurarin Solutions",
  "BoB Van Transfers",
  "SmartFix Interiors",
  "Kurarin Solutions",
];

export default function TrustBar() {
  return (
    <section className="w-full overflow-hidden border-y border-[#e6ebf1] bg-white py-8">
      <Container>
        <div className="flex items-center gap-8">
          {/* Label */}
          <div className="hidden shrink-0 md:block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b7c93]">
              Built for growing businesses
            </span>
          </div>

          {/* Marquee */}
          <div className="relative min-w-0 flex-1 overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="trust-marquee flex w-max">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="
                    mx-8
                    flex
                    shrink-0
                    items-center
                    text-[15px]
                    font-semibold
                    tracking-[-0.01em]
                    text-[#6b7c93]
                    transition-colors
                    duration-200
                    hover:text-[#635BFF]
                  "
                >
                  <span className="mr-8 h-1 w-1 rounded-full bg-[#635BFF]" />
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile label */}
        <div className="mt-5 text-center md:hidden">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b7c93]">
            Built for growing businesses
          </span>
        </div>
      </Container>
    </section>
  );
}