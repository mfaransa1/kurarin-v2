import Container from "@/components/container";
import Button from "@/components/button";

const capabilities = [
  {
    number: "01",
    title: "School management systems",
    description:
      "Centralize admissions, student records, finance, examinations, communication and everyday administration in one connected platform.",
  },
  {
    number: "02",
    title: "Student & parent portals",
    description:
      "Give students, parents and guardians convenient access to the information, services and communication they need.",
  },
  {
    number: "03",
    title: "Academic management",
    description:
      "Manage classes, subjects, assessments, grading, examination workflows and academic records through purpose-built systems.",
  },
  {
    number: "04",
    title: "Education automation",
    description:
      "Automate repetitive administrative processes so staff can spend less time managing paperwork and more time supporting learners.",
  },
];

const outcomes = [
  "Centralized student information",
  "Simpler administration",
  "Better parent communication",
  "Faster academic reporting",
  "Automated fee workflows",
  "Connected school operations",
];

const stakeholders = [
  {
    title: "Administrators",
    description:
      "Get a clearer view of operations, finances, students and institutional performance.",
  },
  {
    title: "Teachers",
    description:
      "Reduce administrative work and spend more time focusing on teaching and student outcomes.",
  },
  {
    title: "Students",
    description:
      "Access academic information, services and communication through simple digital experiences.",
  },
  {
    title: "Parents & guardians",
    description:
      "Stay connected with school activities, academic progress, communication and important updates.",
  },
];

export default function EducationPage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="
            pointer-events-none
            absolute
            -right-64
            -top-72
            h-[850px]
            w-[850px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.18)_0%,rgba(255,128,181,0.10)_40%,rgba(255,179,71,0.06)_55%,transparent_72%)]
            blur-[100px]
          "
        />

        <Container>
          <div className="relative py-28 lg:py-36">
            <div className="max-w-[940px]">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#F6F9FC]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[#425466]
                "
              >
                Solutions · Education
              </span>

              <h1
                className="
                  mt-8
                  max-w-[920px]
                  text-[52px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  sm:text-[64px]
                  lg:text-[82px]
                "
              >
                Better technology
                <br />
                for better learning.
              </h1>

              <p
                className="
                  mt-8
                  max-w-[730px]
                  text-[19px]
                  leading-[1.65]
                  text-[#425466]

                  md:text-[21px]
                "
              >
                We build digital systems that help schools and education
                organizations simplify operations, connect their
                communities and create better experiences for learners.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  text="Build for education"
                  href="/contact"
                />

                <a
                  href="#capabilities"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#E6EBF1]
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#0A2540]
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-[#D5DAE0]
                  "
                >
                  Explore solutions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* PROBLEM */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#635BFF]
                "
              >
                The challenge
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[52px]
                "
              >
                Education is
                <br />
                already complex.
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p
                className="
                  text-[20px]
                  leading-[1.65]
                  text-[#425466]
                "
              >
                Education organizations manage enormous amounts of
                information every day — students, teachers, parents,
                finances, assessments, schedules, communication and
                administrative processes.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                When those processes are spread across spreadsheets,
                paperwork and disconnected systems, simple tasks become
                unnecessarily difficult.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                The right technology can connect those moving parts
                without making the people using them work harder.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* CAPABILITIES */}
      {/* ===================================================== */}

      <section
        id="capabilities"
        className="py-24 lg:py-32"
      >
        <Container>
          <div className="max-w-[740px]">
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
              One connected
              <br />
              education experience.
            </h2>

            <p
              className="
                mt-6
                max-w-[640px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              From administration to the classroom, we build systems
              around the actual workflows of education organizations.
            </p>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="
                  rounded-[26px]
                  border
                  border-[#E6EBF1]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(10,37,64,0.06)]

                  md:p-10
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
                    mt-8
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
                    text-[16px]
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* ECOSYSTEM VISUAL */}
      {/* ===================================================== */}

      <section className="overflow-hidden bg-[#0A2540] py-24 lg:py-32">
        <Container>
          <div className="text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#A8A3FF]
              "
            >
              Connected education
            </p>

            <h2
              className="
                mx-auto
                mt-6
                max-w-[820px]
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-white

                md:text-[56px]
              "
            >
              Everyone gets a better
              <br />
              experience when systems connect.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[640px]
                text-lg
                leading-relaxed
                text-white/55
              "
            >
              A modern education platform should bring the people,
              information and processes around a learner together.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-[1000px]">
            <div className="grid gap-4 md:grid-cols-4">
              {stakeholders.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#A8A3FF]
                    "
                  >
                    0{index + 1}
                  </span>

                  <h3
                    className="
                      mt-8
                      text-xl
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-[1.7]
                      text-white/45
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Central platform */}

            <div className="relative mx-auto mt-5 max-w-[620px]">
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-20
                  w-px
                  -translate-y-full
                  bg-gradient-to-b
                  from-transparent
                  to-[#A8A3FF]/40
                "
              />

              <div
                className="
                  rounded-[28px]
                  border
                  border-[#A8A3FF]/20
                  bg-gradient-to-br
                  from-[#635BFF]/20
                  to-white/[0.03]
                  p-8
                  text-center
                "
              >
                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#A8A3FF]
                  "
                >
                  Connected platform
                </span>

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  One source of truth.
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[460px]
                    text-sm
                    leading-relaxed
                    text-white/45
                  "
                >
                  Student information, academic records, finance,
                  communication and administration working together.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* FEATURED PROJECT */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-1/2
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.10),transparent_68%)]
            blur-[80px]
          "
        />

        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#E6EBF1]
              bg-[#F6F9FC]
            "
          >
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-16">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#635BFF]/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#635BFF]
                  "
                >
                  Featured work
                </span>

                <h2
                  className="
                    mt-7
                    text-[40px]
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#0A2540]

                    md:text-[54px]
                  "
                >
                  School Management
                  <br />
                  Platform.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[600px]
                    text-lg
                    leading-[1.7]
                    text-[#425466]
                  "
                >
                  A complete digital ecosystem designed to bring
                  admissions, finance, examinations, communication and
                  school operations into one connected environment.
                </p>

                <p
                  className="
                    mt-5
                    max-w-[600px]
                    text-base
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  Rather than forcing an institution to adapt to a
                  generic workflow, the platform can be shaped around
                  the way the organization actually operates.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Admissions",
                    "Finance",
                    "Examinations",
                    "Communication",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-white
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-[#425466]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="/work"
                    className="
                      text-sm
                      font-semibold
                      text-[#635BFF]
                      transition-colors
                      hover:text-[#5149e8]
                    "
                  >
                    Explore our work →
                  </a>
                </div>
              </div>

              {/* Dashboard visual */}

              <div className="relative min-h-[520px] overflow-hidden bg-[#0A2540]">
                <div
                  className="
                    absolute
                    -right-24
                    -top-24
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(99,91,255,0.50),transparent_68%)]
                    blur-[55px]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-32
                    -left-24
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[radial-gradient(circle,rgba(255,128,181,0.25),transparent_70%)]
                    blur-[55px]
                  "
                />

                <div className="relative flex h-full items-center justify-center p-8">
                  <div
                    className="
                      w-full
                      max-w-[390px]
                      rounded-[26px]
                      border
                      border-white/10
                      bg-white/[0.07]
                      p-5
                      shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/40">
                          School overview
                        </p>

                        <p className="mt-1 text-lg font-semibold text-white">
                          Dashboard
                        </p>
                      </div>

                      <div
                        className="
                          h-9
                          w-9
                          rounded-xl
                          bg-[#635BFF]/20
                        "
                      />
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <DashboardCard
                        label="Students"
                        value="1,248"
                      />

                      <DashboardCard
                        label="Attendance"
                        value="94.6%"
                      />

                      <DashboardCard
                        label="Pending fees"
                        value="24"
                      />

                      <DashboardCard
                        label="Assessments"
                        value="86"
                      />
                    </div>

                    <div
                      className="
                        mt-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-4
                      "
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">
                          Recent activity
                        </span>

                        <span className="text-xs text-[#A8A3FF]">
                          View all
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <Activity text="New student admission" />
                        <Activity text="Examination results published" />
                        <Activity text="Parent message received" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* OUTCOMES */}
      {/* ===================================================== */}

      <section className="bg-[#F6F9FC] py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#635BFF]
                "
              >
                The outcome
              </p>

              <h2
                className="
                  mt-6
                  text-[40px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[52px]
                "
              >
                Technology that
                <br />
                supports people.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E6EBF1]
                    bg-white
                    p-5
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
                      bg-[#635BFF]/10
                      text-xs
                      font-semibold
                      text-[#635BFF]
                    "
                  >
                    ✓
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#0A2540]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[720px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(99,91,255,0.13)_0%,rgba(255,128,181,0.07)_45%,transparent_70%)]
            blur-[80px]
          "
        />

        <Container>
          <div className="relative mx-auto max-w-[820px] text-center">
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#635BFF]
              "
            >
              Education technology
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
              Build an education
              <br />
              system that grows with you.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[620px]
                text-lg
                leading-relaxed
                text-[#425466]
              "
            >
              Whether you're modernizing an existing institution or
              building something new, we can design the technology around
              your organization.
            </p>

            <div className="mt-10 flex justify-center">
              <Button
                text="Talk to us about your institution"
                href="/contact"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function DashboardCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-4
      "
    >
      <p className="text-xs text-white/35">{label}</p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function Activity({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-[#A8A3FF]" />

      <span className="text-xs text-white/55">{text}</span>
    </div>
  );
}