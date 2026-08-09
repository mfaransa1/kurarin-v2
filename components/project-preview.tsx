"use client";

import { useState } from "react";
import Container from "@/components/container";

interface ProjectPreviewProps {
  url: string;
  title: string;
}

export default function ProjectPreview({
  url,
  title,
}: ProjectPreviewProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#E6EBF1]
            bg-white
            shadow-[0_30px_100px_rgba(10,37,64,0.08)]
          "
        >
          {/* Browser chrome */}

          <div
            className="
              relative
              z-20
              flex
              h-12
              items-center
              gap-2
              border-b
              border-[#E6EBF1]
              bg-white
              px-5
            "
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E6EBF1]" />

            <div
              className="
                ml-4
                hidden
                h-7
                max-w-[560px]
                flex-1
                items-center
                overflow-hidden
                rounded-md
                bg-[#F6F9FC]
                px-3
                text-[10px]
                text-[#6B7C93]
                sm:flex
              "
            >
              {url}
            </div>
          </div>

          {/* Website viewport */}

          <div
            className="
              relative
              h-[520px]
              w-full
              bg-white

              md:h-[680px]

              lg:h-[760px]
            "
          >
            {/* Preloader */}

            {!loaded && (
              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  bg-white
                "
              >
                {/* Purple ambient glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-[#635BFF]/10
                    blur-[90px]
                  "
                />

                {/* Pink ambient glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-[#FF80B5]/10
                    blur-[90px]
                  "
                />

                <div className="relative flex flex-col items-center text-center">
                  {/* Kurarin mark */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#635BFF]
                      shadow-[0_15px_40px_rgba(99,91,255,0.2)]
                    "
                  >
                    <span className="text-xl font-bold text-white">
                      K
                    </span>
                  </div>

                  <p
                    className="
                      mt-6
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#0A2540]
                    "
                  >
                    Loading project
                  </p>

                  <p className="mt-2 text-[13px] text-[#6B7C93]">
                    Preparing the live experience
                  </p>

                  {/* Loading dots */}

                  <div className="mt-6 flex items-center gap-1.5">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-bounce
                        rounded-full
                        bg-[#635BFF]
                        [animation-delay:-0.3s]
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-bounce
                        rounded-full
                        bg-[#635BFF]/70
                        [animation-delay:-0.15s]
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-bounce
                        rounded-full
                        bg-[#635BFF]/40
                      "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Live website */}

            <iframe
              src={url}
              title={title}
              onLoad={() => setLoaded(true)}
              className={`
                h-full
                w-full
                border-0
                transition-opacity
                duration-500
                ${loaded ? "opacity-100" : "opacity-0"}
              `}
            />
          </div>
        </div>

        {/* External link */}

        <div className="mt-6 flex justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[#635BFF]
              transition-colors
              hover:text-[#5148d9]
            "
          >
            Open website in new tab

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}