import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E6EBF1]">
      <Container>
        <div className="py-20">
          <div
            className="
              grid
              gap-12

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {/* Brand */}

            <div>
              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    text-[32px]
                    font-bold
                    tracking-tight
                    text-[#635BFF]
                  "
                >
                  K
                </span>

                <span
                  className="
                    text-lg
                    font-semibold
                    text-[#0A2540]
                  "
                >
                  Kurarin
                </span>
              </Link>

              <p
                className="
                  mt-4
                  max-w-[260px]
                  text-sm
                  leading-relaxed
                  text-[#6B7C93]
                "
              >
                Building software, cloud systems and
                digital infrastructure for modern
                organizations.
              </p>
            </div>

            {/* Company */}

            <div>
              <h4
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#0A2540]
                "
              >
                Company
              </h4>

              <div className="mt-6 flex flex-col gap-4">
                <Link href="/about">About</Link>
                <Link href="/work">Work</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* Services */}

            <div>
              <h4
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#0A2540]
                "
              >
                Services
              </h4>

              <div className="mt-6 flex flex-col gap-4">
                <Link href="/services">
                  Software Development
                </Link>

                <Link href="/services">
                  Cloud Infrastructure
                </Link>

                <Link href="/services">
                  Business Automation
                </Link>

                <Link href="/services">
                  Digital Products
                </Link>
              </div>
            </div>

            {/* Contact */}

            <div>
              <h4
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#0A2540]
                "
              >
                Contact
              </h4>

              <div className="mt-6">
                <p className="text-[#425466]">
                  hello@kurarin.co.ke
                </p>

                <p className="mt-2 text-[#425466]">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
              mt-20
              flex
              flex-col
              gap-4
              border-t
              border-[#E6EBF1]
              pt-8

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p className="text-sm text-[#6B7C93]">
              © 2026 Kurarin Solutions.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[#6B7C93]"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-[#6B7C93]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}