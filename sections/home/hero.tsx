import Container from "@/components/container";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-blue-500/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Small Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              text-sm
              text-gray-300
              mb-8
            "
          >
            Innovative Software & Digital Solutions
          </div>

          {/* Main Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              tracking-tight
              mb-8
            "
          >
            Building Smart
            <span className="text-blue-500">
              {" "}Digital Solutions
            </span>
            <br />
            For Modern Businesses
          </h1>

          {/* Description */}
          <p
            className="
              text-lg
              md:text-xl
              text-gray-400
              max-w-2xl
              leading-relaxed
              mb-10
            "
          >
            Kurarin Solutions develops scalable software,
            modern websites, and digital systems that help
            businesses innovate, grow, and stay ahead in a
            fast-changing digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button text="Start a Project" />

            <button
              className="
                px-6
                py-3
                rounded-xl
                border
                border-white/10
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              View Services
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}