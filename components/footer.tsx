import Container from "./container";
import Link from "next/link";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Software Development", href: "/services" },
  { name: "Business Automation", href: "/services" },
  { name: "Cloud & Infrastructure", href: "/services" },
  { name: "Digital Products", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white">
      {/* ================================================== */}
      {/* FOOTER CTA */}
      {/* ================================================== */}

      <div className="border-t border-[#e6ebf1]">
        <Container>
          <div
            className="
              relative
              overflow-hidden
              py-24
              md:py-32
              lg:py-36
            "
          >
            {/* ---------------------------------------------- */}
            {/* Ambient Gradient */}
            {/* ---------------------------------------------- */}

            <div
              className="
                footer-glow
                pointer-events-none
                absolute
                -right-32
                -top-48
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#635BFF]/[0.07]
                blur-[110px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                top-20
                h-[360px]
                w-[360px]
                rounded-full
                bg-[#FF80B5]/[0.045]
                blur-[100px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-220px]
                left-[28%]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#FFB347]/[0.035]
                blur-[110px]
              "
            />

            {/* ---------------------------------------------- */}
            {/* CTA Content */}
            {/* ---------------------------------------------- */}

            <div className="relative z-10 max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#635BFF]" />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6B7C93]
                  "
                >
                  Let's build
                </span>
              </div>

              <h2
                className="
                  mt-7
                  max-w-[850px]
                  text-[42px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#0A2540]

                  md:text-[60px]
                  lg:text-[76px]
                "
              >
                Your next idea
                <br />
                starts with a{" "}
                <span className="text-[#635BFF]">conversation.</span>
              </h2>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-6

                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <p
                  className="
                    max-w-[540px]
                    text-[17px]
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  Tell us what you're trying to build, improve or automate.
                  We'll help you turn the idea into something real.
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    w-fit
                    shrink-0
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
                    hover:shadow-[0_15px_35px_rgba(99,91,255,0.22)]
                  "
                >
                  Start a project

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
            </div>
          </div>
        </Container>
      </div>

      {/* ================================================== */}
      {/* MAIN FOOTER */}
      {/* ================================================== */}

      <div className="border-t border-[#e6ebf1]">
        <Container>
          <div
            className="
              grid
              gap-14
              py-16

              md:grid-cols-2
              lg:grid-cols-[1.5fr_1fr_1fr_1fr]
              lg:gap-12
              lg:py-20
            "
          >
            {/* ---------------------------------------------- */}
            {/* Brand */}
            {/* ---------------------------------------------- */}

            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#635BFF]
                    text-[21px]
                    font-bold
                    text-white

                    transition-transform
                    duration-300
                    group-hover:rotate-3
                  "
                >
                  K
                </span>

                <span
                  className="
                    text-[18px]
                    font-semibold
                    tracking-[-0.02em]
                    text-[#0A2540]
                  "
                >
                  Kurarin
                </span>
              </Link>

              <p
                className="
                  mt-6
                  max-w-[330px]
                  text-[15px]
                  leading-[1.7]
                  text-[#6B7C93]
                "
              >
                Software, systems and digital infrastructure for
                organizations building what comes next.
              </p>

              {/* Location */}

              <div className="mt-8">
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#6B7C93]
                  "
                >
                  Based in
                </p>

                <p
                  className="
                    mt-2
                    text-[14px]
                    font-medium
                    text-[#0A2540]
                  "
                >
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* ---------------------------------------------- */}
            {/* Company */}
            {/* ---------------------------------------------- */}

            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6B7C93]
                "
              >
                Company
              </h3>

              <nav className="mt-6 flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[14px]
                      text-[#425466]
                      transition-colors
                      duration-200
                      hover:text-[#635BFF]
                    "
                  >
                    {link.name}

                    <span
                      className="
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* ---------------------------------------------- */}
            {/* Capabilities */}
            {/* ---------------------------------------------- */}

            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6B7C93]
                "
              >
                Capabilities
              </h3>

              <nav className="mt-6 flex flex-col gap-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[14px]
                      text-[#425466]
                      transition-colors
                      duration-200
                      hover:text-[#635BFF]
                    "
                  >
                    {link.name}

                    <span
                      className="
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    >
                      →
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* ---------------------------------------------- */}
            {/* Contact */}
            {/* ---------------------------------------------- */}

            <div>
              <h3
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6B7C93]
                "
              >
                Contact
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:info@kurarinsolutions.co.ke"
                  className="
                    w-fit
                    text-[14px]
                    text-[#425466]
                    transition-colors
                    duration-200
                    hover:text-[#635BFF]
                  "
                >
                  info@kurarinsolutions.co.ke
                </a>

                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[14px]
                    text-[#425466]
                    transition-colors
                    duration-200
                    hover:text-[#635BFF]
                  "
                >
                  Contact our team

                  <span
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* Social */}

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#e6ebf1]
                      text-[12px]
                      font-semibold
                      text-[#425466]
                      transition-all
                      duration-200
                      hover:border-[#635BFF]
                      hover:bg-[#635BFF]
                      hover:text-white
                    "
                  >
                    in
                  </a>

                  <a
                    href="#"
                    aria-label="GitHub"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#e6ebf1]
                      text-[12px]
                      font-semibold
                      text-[#425466]
                      transition-all
                      duration-200
                      hover:border-[#635BFF]
                      hover:bg-[#635BFF]
                      hover:text-white
                    "
                  >
                    GH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ================================================== */}
      {/* BOTTOM BAR */}
      {/* ================================================== */}

      <div className="border-t border-[#e6ebf1]">
        <Container>
          <div
            className="
              flex
              flex-col
              gap-4
              py-7

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p className="text-[12px] text-[#6B7C93]">
              © {new Date().getFullYear()} Kurarin Solutions. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="
                  text-[12px]
                  text-[#6B7C93]
                  transition-colors
                  hover:text-[#635BFF]
                "
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="
                  text-[12px]
                  text-[#6B7C93]
                  transition-colors
                  hover:text-[#635BFF]
                "
              >
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}