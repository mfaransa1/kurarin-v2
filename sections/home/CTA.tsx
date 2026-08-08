import Link from "next/link";
import Container from "@/components/container";

export default function CTA() {
  return (
    <section className="w-full bg-[#0A2540] py-28 lg:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[#635BFF] px-8 py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
          {/* Decorative atmosphere */}
          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-white/10
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-[35%]
              h-[380px]
              w-[380px]
              rounded-full
              bg-[#FF80B5]/20
              blur-[90px]
            "
          />

          {/* Content */}
          <div className="relative z-10 max-w-[780px]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Start a conversation
              </span>
            </div>

            <h2
              className="
                mt-7
                text-[42px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-white

                md:text-[58px]
                lg:text-[68px]
              "
            >
              Have a problem
              <br />
              worth solving?
            </h2>

            <p
              className="
                mt-7
                max-w-[580px]
                text-[18px]
                leading-[1.7]
                text-white/75
              "
            >
              Tell us what you're trying to build, improve or automate.
              We'll help you figure out the technology needed to move it
              forward.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#0A2540]
                  transition-all
                  duration-200
                  hover:-translate-y-[2px]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                "
              >
                Start a project

                <span className="transition-transform duration-200 hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom detail */}
          <div
            className="
              relative
              z-10
              mt-16
              border-t
              border-white/20
              pt-6

              md:flex
              md:items-center
              md:justify-between
            "
          >
            <span className="text-[13px] text-white/60">
              Kurarin Solutions
            </span>

            <span className="mt-2 block text-[13px] text-white/60 md:mt-0">
              Software • Systems • Automation • Cloud
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}