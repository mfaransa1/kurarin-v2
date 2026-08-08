import Container from "@/components/container";
import Link from "next/link";

type Project = {
  category: string;
  title: string;
  description: string;
  href?: string;
};

type ServiceWorkProps = {
  projects: Project[];
};

export default function ServiceWork({
  projects,
}: ServiceWorkProps) {
  return (
    <section className="bg-[#0A2540] py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#A8A3FF]
              "
            >
              Selected work
            </p>

            <h2
              className="
                mt-6
                max-w-[650px]
                text-[40px]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                text-white

                md:text-[56px]
              "
            >
              Technology built for real organizations.
            </h2>
          </div>

          <Link
            href="/work"
            className="
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:text-[#A8A3FF]
            "
          >
            View all work →
          </Link>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.04]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.07]
              "
            >
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#A8A3FF]
                "
              >
                {project.category}
              </span>

              <h3
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                  text-white
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-4
                  text-[15px]
                  leading-relaxed
                  text-white/60
                "
              >
                {project.description}
              </p>

              {project.href && (
                <Link
                  href={project.href}
                  className="
                    mt-8
                    inline-flex
                    text-sm
                    font-semibold
                    text-white
                    transition-colors
                    hover:text-[#A8A3FF]
                  "
                >
                  View case study →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}