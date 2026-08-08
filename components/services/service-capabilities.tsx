import Container from "@/components/container";

type Capability = {
  number: string;
  title: string;
  description: string;
};

type ServiceCapabilitiesProps = {
  capabilities: Capability[];
};

export default function ServiceCapabilities({
  capabilities,
}: ServiceCapabilitiesProps) {
  return (
    <section className="bg-[#F6F9FC] py-24 lg:py-32">
      <Container>
        <div className="max-w-[650px]">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#635BFF]
            "
          >
            What we build
          </p>

          <h2
            className="
              mt-6
              text-[40px]
              font-semibold
              leading-[1]
              tracking-[-0.05em]
              text-[#0A2540]

              md:text-[56px]
            "
          >
            Software that works the way you do.
          </h2>
        </div>

        <div
          className="
            mt-20
            grid
            border-t
            border-[#DDE3EA]

            md:grid-cols-2
          "
        >
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="
                border-b
                border-[#DDE3EA]
                py-10

                md:nth-[odd]:border-r
                md:nth-[odd]:pr-12
                md:nth-[even]:pl-12
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  text-[#635BFF]
                "
              >
                {item.number}
              </span>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-[#0A2540]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[480px]
                  text-[16px]
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