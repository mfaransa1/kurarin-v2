import Container from "@/components/container";
import Button from "@/components/button";

export default function CTA() {
  return (
    <section className="pb-32">
      <Container>
        <div
          className="
            rounded-[40px]
            bg-[#F6F9FC]
            p-10

            md:p-16
          "
        >
          <div className="max-w-[700px]">
            <h2
              className="
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.04em]

                md:text-[56px]
              "
            >
              Let's build something exceptional.
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              Whether you're launching a new platform,
              modernizing infrastructure or automating
              operations, we're ready to help.
            </p>

            <div className="mt-8">
              <Button
                text="Book Consultation"
                href="/contact"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}