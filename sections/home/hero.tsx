import Container from "@/components/container";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-8">
      {/* Background atmosphere */}
      <div className="hero-gradient" />

      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-16 py-20 lg:grid-cols-2 lg:py-24">
          {/* Left Content */}
          <div className="relative z-10 max-w-[600px]">
            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#e6ebf1]
                bg-white/80
                px-4
                py-2
                text-[13px]
                font-medium
                tracking-[-0.01em]
                text-[#425466]
                backdrop-blur-sm
              "
            >
              Custom Software&nbsp; • &nbsp;Cloud&nbsp; • &nbsp;Automation
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                max-w-[680px]
                text-[52px]
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#0A2540]

                sm:text-[60px]
                md:text-[68px]
                lg:text-[72px]
                xl:text-[78px]
              "
            >
              Software infrastructure
              <br />
              <span className="text-[#635BFF]">
                for growing businesses.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[560px]
                text-[18px]
                leading-[1.7]
                tracking-[-0.01em]
                text-[#425466]

                md:text-[19px]
              "
            >
              Kurarin Solutions builds custom software, business systems,
              automation platforms, and digital experiences that help
              organizations operate efficiently and scale confidently.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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

            {/* Supporting detail */}
            <div className="mt-12 flex items-center gap-3 text-[13px] text-[#6b7c93]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#635BFF]" />
              <span>Technology built around your business.</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden min-h-[560px] items-center justify-center lg:flex">
            <div className="relative h-[540px] w-full max-w-[560px]">
              {/* Ambient glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[380px]
                  w-[380px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#635BFF]/10
                  blur-[100px]
                "
              />

              {/* Main system */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  h-[220px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#e6ebf1]
                  bg-white/90
                  p-6
                  shadow-[0_30px_80px_rgba(10,37,64,0.08)]
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#6b7c93]">
                    Kurarin System
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#635BFF]" />
                </div>

                <div>
                  <div className="text-[28px] font-semibold tracking-[-0.04em] text-[#0A2540]">
                    Connected
                  </div>

                  <div className="mt-2 text-[13px] leading-relaxed text-[#6b7c93]">
                    Software, data and automation working together.
                  </div>
                </div>
              </div>

              {/* Software node */}
              <div
                className="
                  absolute
                  left-[2%]
                  top-[18%]
                  z-20
                  rounded-xl
                  border
                  border-[#e6ebf1]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(10,37,64,0.06)]
                "
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7c93]">
                  Software
                </div>

                <div className="mt-1 text-[14px] font-semibold text-[#0A2540]">
                  Custom systems
                </div>
              </div>

              {/* Cloud node */}
              <div
                className="
                  absolute
                  right-[2%]
                  top-[28%]
                  z-20
                  rounded-xl
                  border
                  border-[#e6ebf1]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(10,37,64,0.06)]
                "
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7c93]">
                  Cloud
                </div>

                <div className="mt-1 text-[14px] font-semibold text-[#0A2540]">
                  Reliable infrastructure
                </div>
              </div>

              {/* Automation node */}
              <div
                className="
                  absolute
                  bottom-[18%]
                  left-[10%]
                  z-20
                  rounded-xl
                  border
                  border-[#e6ebf1]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_20px_50px_rgba(10,37,64,0.06)]
                "
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7c93]">
                  Automation
                </div>

                <div className="mt-1 text-[14px] font-semibold text-[#0A2540]">
                  Smarter workflows
                </div>
              </div>

              {/* Purple accent node */}
              <div
                className="
                  absolute
                  bottom-[12%]
                  right-[10%]
                  z-20
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#635BFF]
                  shadow-[0_20px_50px_rgba(99,91,255,0.25)]
                "
              >
                <span className="text-xl font-semibold text-white">
                  K
                </span>
              </div>

              {/* Connection lines */}
              <div className="absolute left-[28%] top-[34%] h-px w-[24%] rotate-[18deg] bg-[#635BFF]/20" />

              <div className="absolute right-[28%] top-[43%] h-px w-[24%] -rotate-[18deg] bg-[#635BFF]/20" />

              <div className="absolute bottom-[32%] left-[34%] h-[20%] w-px bg-[#635BFF]/20" />

              <div className="absolute bottom-[30%] right-[34%] h-[18%] w-px bg-[#635BFF]/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}