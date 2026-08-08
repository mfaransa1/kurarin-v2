import Container from "@/components/container";
import Button from "@/components/button";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Subtle Kurarin gradient */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(99,91,255,0.12)_0%,rgba(255,128,181,0.06)_45%,transparent_70%)]
          blur-[80px]
        "
      />

      <Container>
        <div
          className="
            relative
            mx-auto
            max-w-[850px]
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#635BFF]
            "
          >
            Let's build
          </p>

          <h2
            className="
              mt-6
              text-[42px]
              font-semibold
              leading-[1]
              tracking-[-0.055em]
              text-[#0A2540]

              md:text-[64px]
            "
          >
            Have a problem worth solving?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[590px]
              text-lg
              leading-relaxed
              text-[#425466]
            "
          >
            Tell us what you're trying to build, improve or automate.
            We'll help you figure out the right way forward.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              text="Start a project"
              href="/contact"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}