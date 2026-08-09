import Link from "next/link";
import Container from "@/components/container";
import Reveal from "@/components/reveal";

const capabilities = [
  {
    number: "01",
    title: "Member management",
    description:
      "A centralised system for maintaining member records, participation and account information.",
  },
  {
    number: "02",
    title: "Contribution tracking",
    description:
      "Structured contribution records give the group a clearer view of payments, balances and financial participation.",
  },
  {
    number: "03",
    title: "Loan management",
    description:
      "Digital workflows for recording loans, repayments and outstanding balances without relying on scattered spreadsheets or notebooks.",
  },
  {
    number: "04",
    title: "Financial visibility",
    description:
      "A connected dashboard helps members and administrators understand the group's financial position at a glance.",
  },
];

const features = [
  "Member registration",
  "Member profiles",
  "Contribution records",
  "Loan management",
  "Repayment tracking",
  "Financial summaries",
  "Transaction history",
  "Role-based access",
  "Meeting records",
  "Administrative dashboard",
];

export default function WaaSaccoPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Purple ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[750px]
            w-[750px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[140px]
          "
        />

        {/* Secondary glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[20%]
            top-[18%]
            h-[300px]
            w-[300px]
            animate-[pulse_10s_ease-in-out_infinite]
            rounded-full
            bg-[#FF80B5]/[0.03]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative z-10">
            {/* Back */}

            <Reveal direction="left">
              <Link
                href="/work"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-medium
                  text-[#6B7C93]
                  transition-colors
                  hover:text-[#635BFF]
                "
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Back to work
              </Link>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-20">
              {/* Main heading */}

              <div>
                <Reveal delay={100}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#635BFF]
                      "
                    >
                      WAA SACCO
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#F6F9FC]
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        text-[#6B7C93]
                      "
                    >
                      Business System
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <h1
                    className="
                      mt-7
                      max-w-[900px]
                      text-[50px]
                      font-semibold
                      leading-[0.94]
                      tracking-[-0.06em]
                      text-[#0A2540]

                      sm:text-[60px]

                      md:text-[76px]

                      lg:text-[88px]
                    "
                  >
                    Bringing
                    <br />
                    financial
                    <br />
                    clarity to groups.
                  </h1>
                </Reveal>

                <Reveal delay={300}>
                  <p
                    className="
                      mt-8
                      max-w-[690px]
                      text-[18px]
                      leading-[1.7]
                      text-[#6B7C93]

                      md:text-[20px]
                    "
                  >
                    A financial management system designed for WAA SACCO, a
                    Nairobi-based chama, helping organise member records,
                    contributions, loans and group finances in one connected
                    platform.
                  </p>
                </Reveal>
              </div>

              {/* Project information */}

              <Reveal direction="right" delay={300}>
                <div className="lg:pt-3">
                  <div className="border-t border-[#E6EBF1]">
                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Client
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          WAA SACCO
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Location
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-b border-[#E6EBF1] py-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Sector
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          Financial Management
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                          Product
                        </p>

                        <p className="mt-2 text-[15px] font-medium text-[#0A2540]">
                          SACCO / Chama System
                        </p>
                      </div>
                    </div>

                    <div className="py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7C93]">
                        Focus
                      </p>

                      <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">
                        Members · Contributions · Loans · Financial Records
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PRODUCT VISUAL */}
      {/* ================================================== */}

      <section className="relative px-4 pb-28 md:px-8 md:pb-36">
        <Container>
          <Reveal delay={150}>
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#E6EBF1]
                bg-[#F6F9FC]
                shadow-[0_30px_100px_rgba(10,37,64,0.06)]
              "
            >
              {/* Ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[420px]
                  w-[420px]
                  animate-[pulse_8s_ease-in-out_infinite]
                  rounded-full
                  bg-[#635BFF]/[0.08]
                  blur-[110px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-40
                  -left-32
                  h-[350px]
                  w-[350px]
                  animate-[pulse_10s_ease-in-out_infinite]
                  rounded-full
                  bg-[#FF80B5]/[0.035]
                  blur-[100px]
                "
              />

              <div className="relative p-5 md:p-10 lg:p-14">
                {/* Browser */}

                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E6EBF1]
                    bg-white
                    shadow-[0_25px_80px_rgba(10,37,64,0.08)]
                  "
                >
                  {/* Browser bar */}

                  <div className="flex h-12 items-center gap-2 border-b border-[#E6EBF1] px-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />

                    <div className="ml-5 hidden h-6 max-w-[360px] flex-1 rounded-md bg-[#F6F9FC] sm:block" />
                  </div>

                  {/* Dashboard */}

                  <div className="grid min-h-[500px] lg:grid-cols-[200px_1fr]">
                    {/* Sidebar */}

                    <div className="hidden border-r border-[#E6EBF1] bg-[#FBFCFE] p-5 lg:block">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#635BFF] text-xs font-bold text-white">
                          W
                        </div>

                        <div className="h-3 w-20 rounded bg-[#0A2540]/10" />
                      </div>

                      <div className="mt-10 space-y-3">
                        <div className="h-9 rounded-lg bg-[#635BFF]/10" />
                        <div className="h-9 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-9 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-9 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-9 rounded-lg bg-[#F6F9FC]" />
                        <div className="h-9 rounded-lg bg-[#F6F9FC]" />
                      </div>
                    </div>

                    {/* Main dashboard */}

                    <div className="p-6 md:p-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs text-[#6B7C93]">
                            Financial overview
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A2540]">
                            WAA SACCO Dashboard
                          </h3>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#635BFF]/10 text-xs font-semibold text-[#635BFF]">
                          A
                        </div>
                      </div>

                      {/* Financial cards */}

                      <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                          {
                            label: "Total contributions",
                            value: "KES 842K",
                          },
                          {
                            label: "Active members",
                            value: "36",
                          },
                          {
                            label: "Outstanding loans",
                            value: "KES 214K",
                          },
                        ].map((item, index) => (
                          <div
                            key={item.label}
                            className="
                              group
                              rounded-2xl
                              border
                              border-[#E6EBF1]
                              bg-white
                              p-5
                              transition-all
                              duration-500
                              hover:-translate-y-1
                              hover:shadow-[0_15px_40px_rgba(10,37,64,0.06)]
                            "
                            style={{
                              animationDelay: `${index * 150}ms`,
                            }}
                          >
                            <p className="text-xs leading-relaxed text-[#6B7C93]">
                              {item.label}
                            </p>

                            <p className="mt-3 text-2xl font-semibold tracking-tight text-[#0A2540]">
                              {item.value}
                            </p>

                            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#F6F9FC]">
                              <div
                                className="
                                  h-full
                                  rounded-full
                                  bg-[#635BFF]/70
                                  transition-all
                                  duration-700
                                  group-hover:w-[85%]
                                "
                                style={{
                                  width:
                                    index === 0
                                      ? "72%"
                                      : index === 1
                                        ? "58%"
                                        : "43%",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Lower dashboard */}

                      <div className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
                        {/* Transactions */}

                        <div className="rounded-2xl border border-[#E6EBF1] p-5">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-[#0A2540]">
                              Recent transactions
                            </p>

                            <span className="text-xs text-[#635BFF]">
                              View all
                            </span>
                          </div>

                          <div className="mt-5 space-y-3">
                            {[
                              ["Monthly contribution", "+ KES 5,000"],
                              ["Loan repayment", "+ KES 8,500"],
                              ["Member contribution", "+ KES 3,000"],
                            ].map(([label, amount]) => (
                              <div
                                key={label}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  border-b
                                  border-[#F1F3F6]
                                  pb-3
                                  last:border-0
                                "
                              >
                                <div className="flex items-center gap-3">
                                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#635BFF]/10 text-xs text-[#635BFF]">
                                    +
                                  </span>

                                  <span className="text-xs text-[#425466]">
                                    {label}
                                  </span>
                                </div>

                                <span className="text-xs font-semibold text-[#0A2540]">
                                  {amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Loan summary */}

                        <div className="rounded-2xl border border-[#E6EBF1] p-5">
                          <p className="text-sm font-semibold text-[#0A2540]">
                            Loan activity
                          </p>

                          <div className="mt-6 flex items-center justify-center">
                            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-[#F6F9FC]">
                              <div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-l-[#635BFF] border-t-[#635BFF] rotate-[-35deg]" />

                              <div className="text-center">
                                <p className="text-xl font-semibold text-[#0A2540]">
                                  68%
                                </p>

                                <p className="text-[10px] text-[#6B7C93]">
                                  repaid
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* PROJECT OVERVIEW */}
      {/* ================================================== */}

      <section className="border-t border-[#E6EBF1] py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal direction="left">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#635BFF]
                "
              >
                The challenge
              </span>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div>
                <h2
                  className="
                    max-w-[820px]
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[54px]
                  "
                >
                  Small financial groups need serious systems too.
                </h2>

                <div className="mt-8 max-w-[720px] space-y-6">
                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    Chamas and community savings groups often begin with
                    simple processes. Members contribute, records are kept,
                    loans are issued and meetings happen regularly.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    As the group grows, however, manually tracking all of
                    those activities becomes increasingly difficult. Records
                    can become fragmented and members may have limited
                    visibility into the group's financial position.
                  </p>

                  <p className="text-[17px] leading-[1.8] text-[#6B7C93]">
                    The WAA SACCO system was designed around that problem:
                    create one reliable digital environment where the
                    group's financial activity can be organised and
                    understood.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CAPABILITIES */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        <div
          className="
            pointer-events-none
            absolute
            -left-48
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-[#635BFF]/[0.045]
            blur-[130px]
          "
        />

        <Container>
          <div className="relative z-10">
            <Reveal>
              <div className="max-w-[720px]">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6B7C93]
                  "
                >
                  System capabilities
                </span>

                <h2
                  className="
                    mt-5
                    text-[40px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[56px]
                  "
                >
                  Financial workflows,
                  <br />
                  made clearer.
                </h2>
              </div>
            </Reveal>

            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#E6EBF1] bg-[#E6EBF1] md:grid-cols-2">
              {capabilities.map((item, index) => (
                <Reveal key={item.number} delay={index * 100}>
                  <div
                    className="
                      group
                      h-full
                      bg-white
                      p-8
                      transition-all
                      duration-500

                      md:p-10

                      lg:p-12

                      hover:bg-[#FBFCFE]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-[#635BFF]">
                        {item.number}
                      </span>

                      <span
                        className="
                          text-[#D1D8E0]
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-[#635BFF]
                        "
                      >
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#0A2540]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[440px] text-[16px] leading-[1.75] text-[#6B7C93]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FEATURES */}
      {/* ================================================== */}

      <section className="py-28 md:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal direction="left">
              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6B7C93]
                  "
                >
                  Inside the system
                </span>

                <h2
                  className="
                    mt-5
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[50px]
                  "
                >
                  Everything in one financial workspace.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature} delay={index * 60}>
                  <div
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-t
                      border-[#E6EBF1]
                      py-5
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F6F9FC]
                        text-[10px]
                        font-semibold
                        text-[#635BFF]
                        transition-all
                        duration-300
                        group-hover:bg-[#635BFF]
                        group-hover:text-white
                      "
                    >
                      ✓
                    </span>

                    <span
                      className="
                        text-[15px]
                        font-medium
                        text-[#425466]
                        transition-colors
                        duration-300
                        group-hover:text-[#0A2540]
                      "
                    >
                      {feature}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* STATEMENT */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36 lg:py-44">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/20
            blur-[140px]
          "
        />

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-[920px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                The idea
              </span>

              <h2
                className="
                  mt-7
                  text-[44px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-white

                  md:text-[64px]

                  lg:text-[76px]
                "
              >
                Financial information should be
                <br />
                <span className="text-[#A8A3FF]">
                  easy to understand.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-[680px]
                  text-[17px]
                  leading-[1.8]
                  text-white/60
                "
              >
                Good financial software doesn't simply store transactions. It
                gives people confidence in the information they are looking
                at and makes important decisions easier to make.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden border-b border-[#E6EBF1] py-28 md:py-36">
        <div
          className="
            pointer-events-none
            absolute
            -right-48
            -top-48
            h-[550px]
            w-[550px]
            animate-[pulse_8s_ease-in-out_infinite]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[120px]
          "
        />

        <Container>
          <Reveal>
            <div className="relative z-10 max-w-[820px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Business systems
              </span>

              <h2
                className="
                  mt-6
                  text-[44px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  md:text-[64px]
                "
              >
                Your operations deserve
                <br />
                <span className="text-[#635BFF]">
                  better systems.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-[600px]
                  text-[17px]
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                From financial management to workflow automation, we build
                software around the way organisations actually work.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#635BFF]
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(99,91,255,0.2)]
                "
              >
                Build a system with us

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ================================================== */}
      {/* NEXT PROJECT */}
      {/* ================================================== */}

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6B7C93]
                  "
                >
                  Next project
                </span>

                <h2
                  className="
                    mt-4
                    text-[38px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[52px]
                  "
                >
                  Project Juliana.
                </h2>

                <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-[#6B7C93]">
                  Exploring a more accessible, private and locally relevant
                  approach to digital mental wellness.
                </p>
              </div>

              <Link
                href="/work/project-juliana"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-[#635BFF]
                "
              >
                View project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}