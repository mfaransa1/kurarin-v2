import Container from "@/components/container";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8">
      <div className="hero-gradient" />

      <Container>
        <div className="grid min-h-[92vh] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}

          <div className="max-w-[580px]">
            <div
              className="
                inline-flex
                items-center
                rounded-full
                bg-[#F6F9FC]
                px-4
                py-2
                text-sm
                font-medium
                text-[#425466]
              "
            >
              Custom Software • Cloud • Automation
            </div>

            <h1
              className="
                mt-8
                text-[52px]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
                text-[#0A2540]

                md:text-[64px]
                lg:text-[72px]
              "
            >
              Software infrastructure
              for growing businesses.
            </h1>

            <p
              className="
                mt-8
                max-w-[520px]
                text-[20px]
                leading-relaxed
                text-[#425466]
              "
            >
              Kurarin Solutions builds custom software,
              business systems, automation platforms,
              and digital experiences that help
              organizations operate efficiently and
              scale confidently.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                text="Start a project"
                href="/contact"
              />

              <Button
                text="View our work"
                href="/work"
                variant="secondary"
              />
            </div>
          </div>

          {/* Right Artwork */}

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative h-[680px] w-[680px]">
              {/* Ribbon 1 */}

              <div
                className="
                  ribbon-1

                  absolute
                  top-[120px]
                  left-[80px]
                  h-[140px]
                  w-[520px]
                  rotate-[28deg]
                  rounded-[999px]

                  bg-gradient-to-r
                  from-[#635BFF]
                  via-[#8B7CFF]
                  to-[#FF80B5]

                  shadow-[0_20px_80px_rgba(99,91,255,0.15)]
                "
              />

              {/* Ribbon 2 */}

              <div
                className="
                  ribbon-2

                  absolute
                  top-[260px]
                  left-[120px]
                  h-[120px]
                  w-[460px]
                  rotate-[28deg]
                  rounded-[999px]

                  bg-gradient-to-r
                  from-[#FF80B5]
                  via-[#FFAA6C]
                  to-[#FFD86F]

                  shadow-[0_20px_80px_rgba(255,128,181,0.15)]
                "
              />

              {/* Ribbon 3 */}

              <div
                className="
                  ribbon-3

                  absolute
                  top-[390px]
                  left-[180px]
                  h-[100px]
                  w-[380px]
                  rotate-[28deg]
                  rounded-[999px]

                  bg-gradient-to-r
                  from-[#635BFF]
                  via-[#8B7CFF]
                  to-[#FF80B5]

                  shadow-[0_20px_80px_rgba(99,91,255,0.15)]
                "
              />

              {/* Ambient Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-[#635BFF]/10
                  via-[#FF80B5]/10
                  to-[#FFB347]/10
                  blur-[120px]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}