import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          flex
          items-center
          justify-center
          w-10
          h-10
        "
      >
        <span className="text-[#0A2540] text-xl">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-white
          "
        >
          <div className="px-6 py-8">
            <div className="flex justify-between items-center">
              <span
                className="
                  text-lg
                  font-semibold
                  text-[#0A2540]
                "
              >
                Kurarin
              </span>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#0A2540]
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="
                mt-16
                inline-flex
                h-14
                px-8
                rounded-xl
                items-center
                justify-center
                bg-[#635BFF]
                text-white
                font-medium
              "
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}