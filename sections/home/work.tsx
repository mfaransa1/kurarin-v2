import Container from "@/components/container";
import Link from "next/link";

const projects = [
  {
    title: "BoB Van Transfers",
    category: "Transportation · Digital Platform",
    description:
      "A modern digital platform for airport transfers, hotel transportation and chauffeured travel services.",
    href: "/work/bob-van-transfers",
  },
  {
    title: "SmartFix Interiors",
    category: "Interior Design · Digital Presence",
    description:
      "A digital experience designed to showcase interior solutions, communicate services and connect the business with customers.",
    href: "/work/smartfix-interiors",
  },
  {
    title: "WAA SACCO",
    category: "Business · Financial System",
    description:
      "A digital SACCO management system designed to support chama operations, member management and financial workflows.",
    href: "/work/waa-sacco",
  },
  {
    title: "Jobugi LMS",
    category: "Education · Learning Platform",
    description:
      "A learning management system developed for a private school to support digital learning, content management and student engagement.",
    href: "/work/jobugi-lms",
  },
  {
    title: "Project Juliana",
    category: "AI · Mental Wellness",
    description:
      "An AI-powered mental wellness companion combining conversational support, emotion awareness, journaling, self-help tools and crisis-aware guidance.",
    href: "/work/project-juliana",
  },
];

export default function Work() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36 lg:py-44">
      <Container>
        {/* ================================================== */}
        {/* SECTION HEADER */}
        {/* ================================================== */}

        <div className="max-w-[760px]">
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#6B7C93]
            "
          >
            Selected work
          </span>

          <h2
            className="
              mt-6
              text-[42px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#0A2540]

              md:text-[56px]
            "
          >
            Built for impact.
          </h2>

          <p
            className="
              mt-6
              max-w-[620px]
              text-[17px]
              leading-[1.7]
              text-[#425466]

              md:text-[18px]
            "
          >
            From digital platforms and business systems to education and
            emerging AI products, we build technology around real problems,
            real organizations and real people.
          </p>
        </div>

        {/* ================================================== */}
        {/* PROJECTS */}
        {/* ================================================== */}

        <div className="mt-20 border-t border-[#E6EBF1]">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="
                group
                block
                border-b
                border-[#E6EBF1]
                py-10
                transition-all
                duration-300

                md:py-12
                lg:py-14

                hover:bg-[#FAFBFC]
              "
            >
              <div
                className="
                  grid
                  gap-8

                  md:grid-cols-[70px_0.9fr_1.1fr_40px]
                  md:items-start
                  md:gap-8

                  lg:grid-cols-[80px_0.9fr_1.1fr_48px]
                  lg:gap-10
                "
              >
                {/* ================================================== */}
                {/* NUMBER */}
                {/* ================================================== */}

                <div>
                  <span
                    className="
                      text-[12px]
                      font-medium
                      tracking-[0.04em]
                      text-[#6B7C93]
                      transition-colors
                      duration-300

                      group-hover:text-[#635BFF]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ================================================== */}
                {/* PROJECT NAME */}
                {/* ================================================== */}

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#635BFF]
                    "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[27px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-[#0A2540]
                      transition-transform
                      duration-300

                      md:text-[32px]

                      group-hover:translate-x-1
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* ================================================== */}
                {/* DESCRIPTION */}
                {/* ================================================== */}

                <div>
                  <p
                    className="
                      max-w-[560px]
                      text-[15px]
                      leading-[1.7]
                      text-[#6B7C93]

                      md:text-[16px]
                    "
                  >
                    {project.description}
                  </p>

                  <span
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[12px]
                      font-semibold
                      text-[#0A2540]
                      transition-colors
                      duration-300

                      group-hover:text-[#635BFF]
                    "
                  >
                    View project

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>
                </div>

                {/* ================================================== */}
                {/* ARROW */}
                {/* ================================================== */}

                <div
                  className="
                    hidden
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E6EBF1]
                    text-[#425466]
                    transition-all
                    duration-300

                    md:flex

                    group-hover:border-[#635BFF]
                    group-hover:bg-[#635BFF]
                    group-hover:text-white
                  "
                >
                  <span className="text-[15px]">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ================================================== */}
        {/* ALL WORK */}
        {/* ================================================== */}

        <div className="mt-10">
          <Link
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[13px]
              font-semibold
              text-[#0A2540]
              transition-colors
              duration-300

              hover:text-[#635BFF]
            "
          >
            <span>View all work</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}