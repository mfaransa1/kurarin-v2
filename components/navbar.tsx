"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "./container";

type DropdownType = "services" | "solutions" | null;

const navLinks = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
    {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Journal",
    href: "/blog",
  },
];

const services = [
  {
    title: "Software Development",
    description: "Custom systems built around your business.",
    href: "/services/software-development",
  },
  {
    title: "Business Systems",
    description: "Digital tools that make operations simpler.",
    href: "/services/business-systems",
  },
  {
    title: "Automation",
    description: "Remove repetitive work from your organization.",
    href: "/services/automation",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Reliable infrastructure built for growth.",
    href: "/services/cloud-infrastructure",
  },
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI built around real problems.",
    href: "/services/ai",
  },
  {
    title: "Digital Products",
    description: "Web platforms and experiences people use.",
    href: "/services/digital-products",
  },
];

const solutions = [
  {
    title: "Business Operations",
    description: "Systems that connect and streamline your operations.",
    href: "/solutions/business-operations",
  },
  {
    title: "Customer Experience",
    description: "Digital experiences designed around your customers.",
    href: "/solutions/customer-experience",
  },
  {
    title: "Education",
    description: "Technology for modern learning organizations.",
    href: "/solutions/education",
  },
  {
    title: "Enterprise",
    description: "Scalable platforms for growing organizations.",
    href: "/solutions/enterprise",
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems for practical business use.",
    href: "/solutions/ai",
  },
  {
    title: "Digital Transformation",
    description: "Move legacy processes into modern systems.",
    href: "/solutions/digital-transformation",
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownType>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSection, setMobileSection] =
    useState<DropdownType>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  /*
   * ============================================================
   * DESKTOP DROPDOWN HELPERS
   * ============================================================
   */

  const openDropdown = (dropdown: DropdownType) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setActiveDropdown(dropdown);
  };

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const toggleDropdown = (dropdown: DropdownType) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  /*
   * ============================================================
   * ESCAPE KEY
   * ============================================================
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  /*
   * ============================================================
   * MOBILE SCROLL LOCK
   * ============================================================
   */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /*
   * ============================================================
   * CLOSE NAVIGATION
   * ============================================================
   */

  const closeNavigation = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <>
      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <header
        className="
          relative
          z-50
          w-full
          border-b
          border-[#E6EBF1]
          bg-white
        "
      >
        <Container>
          <div
            className="
              flex
              h-[72px]
              items-center
              justify-between
            "
          >
            {/* ================================================== */}
            {/* LOGO */}
            {/* ================================================== */}

            <Link
              href="/"
              onClick={closeNavigation}
              className="
                group
                inline-flex
                items-center
                text-[20px]
                font-semibold
                leading-none
                tracking-[-0.055em]
              "
            >
              <span
                className="
                  text-[#0A2540]
                  transition-colors
                  duration-200
                  group-hover:text-[#635BFF]
                "
              >
                Kurarin
              </span>

              <span
                className="
                  ml-[5px]
                  text-[#635BFF]
                  transition-colors
                  duration-200
                  group-hover:text-[#0A2540]
                "
              >
                Solutions
              </span>
            </Link>

            {/* ================================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================================== */}

            <nav
              className="
                hidden
                items-center
                gap-7

                lg:flex
              "
            >
              {/* ------------------------------------------------ */}
              {/* SERVICES */}
              {/* ------------------------------------------------ */}

              <div
                className="relative"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  aria-expanded={
                    activeDropdown === "services"
                  }
                  className={`
                    group
                    flex
                    items-center
                    gap-1.5
                    text-[14px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-200

                    ${
                      activeDropdown === "services"
                        ? "text-[#635BFF]"
                        : "text-[#425466] hover:text-[#635BFF]"
                    }
                  `}
                >
                  Services

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`
                      transition-transform
                      duration-200

                      ${
                        activeDropdown === "services"
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* ------------------------------------------------ */}
              {/* SOLUTIONS */}
              {/* ------------------------------------------------ */}

              <div
                className="relative"
                onMouseEnter={() => openDropdown("solutions")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("solutions")}
                  aria-expanded={
                    activeDropdown === "solutions"
                  }
                  className={`
                    group
                    flex
                    items-center
                    gap-1.5
                    text-[14px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-200

                    ${
                      activeDropdown === "solutions"
                        ? "text-[#635BFF]"
                        : "text-[#425466] hover:text-[#635BFF]"
                    }
                  `}
                >
                  Solutions

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`
                      transition-transform
                      duration-200

                      ${
                        activeDropdown === "solutions"
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* ------------------------------------------------ */}
              {/* NORMAL LINKS */}
              {/* ------------------------------------------------ */}

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    text-[14px]
                    font-medium
                    tracking-[-0.01em]
                    text-[#425466]
                    transition-colors
                    duration-200
                    hover:text-[#635BFF]
                  "
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* ================================================== */}
            {/* DESKTOP ACTIONS */}
            {/* ================================================== */}

            <div
              className="
                hidden
                items-center
                gap-6

                lg:flex
              "
            >
             
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#635BFF]
                  px-5
                  py-2.5
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_4px_12px_rgba(99,91,255,0.12)]
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:bg-[#5148E8]
                  hover:shadow-[0_7px_18px_rgba(99,91,255,0.18)]
                "
              >
                Start a project
              </Link>
            </div>

            {/* ================================================== */}
            {/* MOBILE MENU BUTTON */}
            {/* ================================================== */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setActiveDropdown(null);
              }}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-[#F6F9FC]

                lg:hidden
              "
            >
              <span
                className={`
                  absolute
                  h-[1.5px]
                  w-5
                  bg-[#0A2540]
                  transition-all
                  duration-300

                  ${
                    mobileOpen
                      ? "rotate-45"
                      : "-translate-y-[4px]"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  h-[1.5px]
                  w-5
                  bg-[#0A2540]
                  transition-all
                  duration-300

                  ${
                    mobileOpen
                      ? "-rotate-45"
                      : "translate-y-[4px]"
                  }
                `}
              />
            </button>
          </div>
        </Container>

        {/* ====================================================== */}
        {/* DESKTOP MEGA MENU */}
        {/* ====================================================== */}

        <div
          onMouseEnter={() => {
            if (activeDropdown) {
              openDropdown(activeDropdown);
            }
          }}
          onMouseLeave={scheduleClose}
          className={`
            absolute
            left-0
            right-0
            top-full
            hidden
            border-b
            border-[#E6EBF1]
            bg-white
            shadow-[0_20px_50px_rgba(10,37,64,0.08)]
            transition-all
            duration-200

            lg:block

            ${
              activeDropdown
                ? "visible translate-y-0 opacity-100"
                : "pointer-events-none invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <Container>
            {/* ================================================== */}
            {/* SERVICES MENU */}
            {/* ================================================== */}

            {activeDropdown === "services" && (
              <div className="py-10">
                <div className="grid grid-cols-[180px_1fr] gap-10">
                  {/* Intro */}

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#635BFF]
                      "
                    >
                      Services
                    </p>

                    <p
                      className="
                        mt-4
                        text-[13px]
                        leading-relaxed
                        text-[#6B7C93]
                      "
                    >
                      Technology services designed around the way your
                      organization actually works.
                    </p>
                  </div>

                  {/* Service Items */}

                  <div
                    className="
                      grid
                      grid-cols-3
                      gap-x-8
                      gap-y-2
                    "
                  >
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setActiveDropdown(null)}
                        className="
                          group
                          rounded-xl
                          p-4
                          transition-colors
                          duration-200
                          hover:bg-[#F6F9FC]
                        "
                      >
                        <div
                          className="
                            text-[14px]
                            font-semibold
                            text-[#0A2540]
                            transition-colors
                            group-hover:text-[#635BFF]
                          "
                        >
                          {service.title}
                        </div>

                        <p
                          className="
                            mt-1.5
                            text-[12px]
                            leading-relaxed
                            text-[#6B7C93]
                          "
                        >
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}

                <div
                  className="
                    mt-8
                    border-t
                    border-[#E6EBF1]
                    pt-6
                  "
                >
                  <Link
                    href="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Explore all services

                    <span
                      className="
                        text-[#635BFF]
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {/* ================================================== */}
            {/* SOLUTIONS MENU */}
            {/* ================================================== */}

            {activeDropdown === "solutions" && (
              <div className="py-10">
                <div className="grid grid-cols-[180px_1fr] gap-10">
                  {/* Intro */}

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#635BFF]
                      "
                    >
                      Solutions
                    </p>

                    <p
                      className="
                        mt-4
                        text-[13px]
                        leading-relaxed
                        text-[#6B7C93]
                      "
                    >
                      Practical technology solutions for organizations
                      solving complex problems.
                    </p>
                  </div>

                  {/* Solution Items */}

                  <div
                    className="
                      grid
                      grid-cols-3
                      gap-x-8
                      gap-y-2
                    "
                  >
                    {solutions.map((solution) => (
                      <Link
                        key={solution.title}
                        href={solution.href}
                        onClick={() => setActiveDropdown(null)}
                        className="
                          group
                          rounded-xl
                          p-4
                          transition-colors
                          duration-200
                          hover:bg-[#F6F9FC]
                        "
                      >
                        <div
                          className="
                            text-[14px]
                            font-semibold
                            text-[#0A2540]
                            transition-colors
                            group-hover:text-[#635BFF]
                          "
                        >
                          {solution.title}
                        </div>

                        <p
                          className="
                            mt-1.5
                            text-[12px]
                            leading-relaxed
                            text-[#6B7C93]
                          "
                        >
                          {solution.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}

                <div
                  className="
                    mt-8
                    border-t
                    border-[#E6EBF1]
                    pt-6
                  "
                >
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDropdown(null)}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      font-semibold
                      text-[#0A2540]
                    "
                  >
                    Explore all solutions

                    <span
                      className="
                        text-[#635BFF]
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE NAVIGATION */}
      {/* ======================================================== */}

      <div
        className={`
          fixed
          inset-x-0
          top-[72px]
          z-40
          overflow-y-auto
          border-b
          border-[#E6EBF1]
          bg-white
          transition-all
          duration-300
          ease-out

          lg:hidden

          ${
            mobileOpen
              ? "max-h-[calc(100vh-72px)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <Container>
          <nav className="flex flex-col py-6">
            {/* ================================================== */}
            {/* MOBILE SERVICES */}
            {/* ================================================== */}

            <div className="border-b border-[#E6EBF1]">
              <button
                type="button"
                onClick={() =>
                  setMobileSection(
                    mobileSection === "services"
                      ? null
                      : "services"
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                "
              >
                <span
                  className={`
                    text-[22px]
                    font-semibold
                    tracking-[-0.035em]

                    ${
                      mobileSection === "services"
                        ? "text-[#635BFF]"
                        : "text-[#0A2540]"
                    }
                  `}
                >
                  Services
                </span>

                <span
                  className={`
                    text-[22px]
                    text-[#6B7C93]
                    transition-transform
                    duration-200

                    ${
                      mobileSection === "services"
                        ? "rotate-45"
                        : ""
                    }
                  `}
                >
                  +
                </span>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300

                  ${
                    mobileSection === "services"
                      ? "max-h-[600px] pb-5"
                      : "max-h-0"
                  }
                `}
              >
                <div className="flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeNavigation}
                      className="
                        rounded-xl
                        px-3
                        py-3
                        transition-colors
                        hover:bg-[#F6F9FC]
                      "
                    >
                      <span
                        className="
                          block
                          text-[15px]
                          font-medium
                          text-[#0A2540]
                        "
                      >
                        {service.title}
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-[12px]
                          text-[#6B7C93]
                        "
                      >
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* MOBILE SOLUTIONS */}
            {/* ================================================== */}

            <div className="border-b border-[#E6EBF1]">
              <button
                type="button"
                onClick={() =>
                  setMobileSection(
                    mobileSection === "solutions"
                      ? null
                      : "solutions"
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                "
              >
                <span
                  className={`
                    text-[22px]
                    font-semibold
                    tracking-[-0.035em]

                    ${
                      mobileSection === "solutions"
                        ? "text-[#635BFF]"
                        : "text-[#0A2540]"
                    }
                  `}
                >
                  Solutions
                </span>

                <span
                  className={`
                    text-[22px]
                    text-[#6B7C93]
                    transition-transform
                    duration-200

                    ${
                      mobileSection === "solutions"
                        ? "rotate-45"
                        : ""
                    }
                  `}
                >
                  +
                </span>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300

                  ${
                    mobileSection === "solutions"
                      ? "max-h-[600px] pb-5"
                      : "max-h-0"
                  }
                `}
              >
                <div className="flex flex-col gap-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      onClick={closeNavigation}
                      className="
                        rounded-xl
                        px-3
                        py-3
                        transition-colors
                        hover:bg-[#F6F9FC]
                      "
                    >
                      <span
                        className="
                          block
                          text-[15px]
                          font-medium
                          text-[#0A2540]
                        "
                      >
                        {solution.title}
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-[12px]
                          text-[#6B7C93]
                        "
                      >
                        {solution.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* MOBILE NORMAL LINKS */}
            {/* ================================================== */}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeNavigation}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#E6EBF1]
                  py-5
                "
              >
                <span
                  className="
                    text-[22px]
                    font-semibold
                    tracking-[-0.035em]
                    text-[#0A2540]
                    transition-colors
                    duration-200
                    group-hover:text-[#635BFF]
                  "
                >
                  {link.name}
                </span>

                <span
                  className="
                    text-[20px]
                    text-[#9AA6B2]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#635BFF]
                  "
                >
                  →
                </span>
              </Link>
            ))}

            {/* ================================================== */}
            {/* MOBILE CTA */}
            {/* ================================================== */}

            <Link
              href="/contact"
              onClick={closeNavigation}
              className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#635BFF]
                px-6
                py-4
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#5148E8]
              "
            >
              Start a project
            </Link>

            {/* ================================================== */}
            {/* MOBILE CONTACT */}
            {/* ================================================== */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-2
                pb-4
                text-[13px]
                text-[#6B7C93]
              "
            >
              <span>Kurarin Solutions</span>

              <Link
                href="mailto:hello@kurarin.co.ke"
                className="
                  transition-colors
                  hover:text-[#635BFF]
                "
              >
                hello@kurarin.co.ke
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}