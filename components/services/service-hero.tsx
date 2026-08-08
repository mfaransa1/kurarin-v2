import Container from "@/components/container";
import Button from "@/components/button";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-[radial-gradient(circle,rgba(99,91,255,0.14)_0%,rgba(255,128,181,0.08)_40%,transparent_70%)]
          blur-3xl
        "
      />

      <Container>
        <div
          className="
            relative
            grid
            min-h-[680px]
            items-center
            gap-16
            py-24

            lg:grid-cols-[1.05fr_0.95fr]
            lg:py-32
          "
        >
          {/* Content */}

          <div className="max-w-[680px]">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              {eyebrow}
            </p>

            <h1
              className="
                mt-7
                text-[52px]
                font-semibold
                leading-[0.94]
                tracking-[-0.055em]
                text-[#0A2540]

                sm:text-[64px]
                lg:text-[76px]
              "
            >
              {title}
            </h1>

            <p
              className="
                mt-8
                max-w-[590px]
                text-[19px]
                leading-[1.65]
                text-[#425466]

                md:text-[21px]
              "
            >
              {description}
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

          {/* Visual */}

          <div
            className="
              relative
              hidden
              h-[500px]
              items-center
              justify-center

              lg:flex
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                bg-[#635BFF]/10
                blur-[100px]
              "
            />

            {/* Main system card */}

            <div
              className="
                relative
                h-[360px]
                w-[440px]
                rounded-[28px]
                border
                border-[#E6EBF1]
                bg-white
                p-6
                shadow-[0_30px_100px_rgba(10,37,64,0.10)]
              "
            >
              {/* Window header */}

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                </div>

                <div className="h-2 w-16 rounded-full bg-[#F1F3F5]" />
              </div>

              {/* Dashboard */}

              <div className="mt-8 grid grid-cols-[1fr_1.5fr] gap-4">
                <div className="space-y-3">
                  <div className="h-20 rounded-xl bg-[#F6F9FC]" />
                  <div className="h-28 rounded-xl bg-[#F6F9FC]" />
                </div>

                <div className="rounded-xl border border-[#E6EBF1] p-4">
                  <div className="h-3 w-24 rounded-full bg-[#E6EBF1]" />

                  <div className="mt-8 flex h-28 items-end gap-2">
                    <div className="h-[35%] flex-1 rounded-t-md bg-[#635BFF]/20" />
                    <div className="h-[55%] flex-1 rounded-t-md bg-[#635BFF]/30" />
                    <div className="h-[45%] flex-1 rounded-t-md bg-[#635BFF]/40" />
                    <div className="h-[75%] flex-1 rounded-t-md bg-[#635BFF]/60" />
                    <div className="h-[90%] flex-1 rounded-t-md bg-[#635BFF]" />
                  </div>
                </div>
              </div>

              {/* Bottom cards */}

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-12 rounded-lg bg-[#F6F9FC]" />
                <div className="h-12 rounded-lg bg-[#F6F9FC]" />
                <div className="h-12 rounded-lg bg-[#F6F9FC]" />
              </div>
            </div>

            {/* Floating API card */}

            <div
              className="
                absolute
                -bottom-4
                -left-4
                w-[190px]
                rounded-2xl
                border
                border-[#E6EBF1]
                bg-white
                p-4
                shadow-[0_20px_60px_rgba(10,37,64,0.10)]
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

                <span className="text-xs font-semibold text-[#0A2540]">
                  API Connected
                </span>
              </div>

              <div className="mt-3 h-2 w-full rounded-full bg-[#F1F3F5]" />
              <div className="mt-2 h-2 w-3/4 rounded-full bg-[#F1F3F5]" />
            </div>

            {/* Floating status card */}

            <div
              className="
                absolute
                -right-6
                top-14
                rounded-2xl
                border
                border-[#E6EBF1]
                bg-white
                px-5
                py-4
                shadow-[0_20px_60px_rgba(10,37,64,0.10)]
              "
            >
              <p className="text-[11px] font-medium text-[#6B7C93]">
                System status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-sm font-semibold text-[#0A2540]">
                  Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}