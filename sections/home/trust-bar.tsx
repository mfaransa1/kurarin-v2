import Container from "@/components/container";

const companies = [
  "Safaricom",
  "Oshwal",
  "Britam",
  "Kenya Airways",
  "Co-op Bank",
];

export default function TrustBar() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-[#6B7C93] uppercase tracking-[0.2em]">
            Trusted by growing businesses
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-16">
            {companies.map((company) => (
              <span
                key={company}
                className="
                  text-lg
                  font-semibold
                  text-[#425466]
                "
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}