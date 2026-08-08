import Container from "@/components/container";
import Link from "next/link";

const featuredPost = {
  category: "Technology",
  title: "Building software that solves the problem, not just the brief.",
  excerpt:
    "The best technology projects start with understanding how a business actually works. Here's how we approach building systems that create measurable value.",
  date: "June 12, 2026",
  readTime: "6 min read",
};

const posts = [
  {
    category: "Engineering",
    title: "Why custom software can be better than another SaaS subscription",
    excerpt:
      "Off-the-shelf software is useful until your business processes become constrained by it. Here's when building custom software starts to make sense.",
    date: "June 5, 2026",
    readTime: "7 min read",
  },
  {
    category: "AI",
    title: "Making AI useful: beyond the chatbot",
    excerpt:
      "AI has moved quickly from experimentation to practical business applications. We look at where it can actually improve the way organizations work.",
    date: "May 28, 2026",
    readTime: "5 min read",
  },
  {
    category: "Business",
    title: "The hidden cost of manual business processes",
    excerpt:
      "Spreadsheets, emails and repetitive tasks may seem harmless individually. Together, they can become a significant operational cost.",
    date: "May 19, 2026",
    readTime: "6 min read",
  },
  {
    category: "Engineering",
    title: "Designing software systems for growth",
    excerpt:
      "Scalability isn't just about handling more users. It's about building systems that remain useful as the organization behind them changes.",
    date: "May 11, 2026",
    readTime: "8 min read",
  },
  {
    category: "Digital Products",
    title: "From idea to working product",
    excerpt:
      "What happens between a founder's idea and the first version of a product people can actually use?",
    date: "April 30, 2026",
    readTime: "6 min read",
  },
  {
    category: "Technology",
    title: "Choosing technology for the problem you're solving",
    excerpt:
      "The newest framework isn't always the right framework. A practical look at choosing technology based on the problem rather than the trend.",
    date: "April 21, 2026",
    readTime: "7 min read",
  },
];

const categories = [
  "All",
  "Engineering",
  "AI",
  "Business",
  "Digital Products",
  "Technology",
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        {/* Ambient gradient */}

        <div
          className="
            pointer-events-none
            absolute
            -right-72
            -top-72
            h-[720px]
            w-[720px]
            rounded-full
            bg-[#635BFF]/[0.055]
            blur-[150px]
          "
        />

        <Container>
          <div className="relative z-10 max-w-[950px]">
            {/* Eyebrow */}

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
                Kurarin Journal
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-[900px]
                text-[52px]
                font-semibold
                leading-[0.94]
                tracking-[-0.06em]
                text-[#0A2540]

                sm:text-[62px]
                md:text-[78px]
                lg:text-[92px]
              "
            >
              Ideas about
              <br />
              technology & business.
            </h1>

            {/* Description */}

            <p
              className="
                mt-9
                max-w-[680px]
                text-[18px]
                leading-[1.75]
                text-[#6B7C93]

                md:text-[20px]
              "
            >
              Thoughts, lessons and perspectives from the people building
              software, systems and digital products at Kurarin.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* FEATURED ARTICLE */}
      {/* ================================================== */}

      <section className="py-24 md:py-32 lg:py-36">
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-[#0A2540]
            "
          >
            {/* Gradient atmosphere */}

            <div
              className="
                pointer-events-none
                absolute
                -right-40
                -top-40
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#635BFF]/25
                blur-[120px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-48
                left-[20%]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#FF80B5]/10
                blur-[120px]
              "
            />

            <div
              className="
                relative
                z-10
                grid
                gap-12
                p-8

                md:p-12

                lg:grid-cols-[1.2fr_0.8fr]
                lg:gap-20
                lg:p-16
              "
            >
              {/* Article */}

              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                    "
                  >
                    {featuredPost.category}
                  </span>

                  <span className="text-[12px] text-white/40">
                    Featured
                  </span>
                </div>

                <h2
                  className="
                    mt-7
                    max-w-[720px]
                    text-[36px]
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.045em]
                    text-white

                    md:text-[50px]
                  "
                >
                  {featuredPost.title}
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[620px]
                    text-[16px]
                    leading-[1.75]
                    text-white/55
                  "
                >
                  {featuredPost.excerpt}
                </p>

                <Link
                  href="/blog/building-software-that-solves-the-problem"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-[14px]
                    font-semibold
                    text-white
                  "
                >
                  Read article

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

              {/* Decorative visual */}

              <div
                className="
                  relative
                  hidden
                  min-h-[320px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]

                  lg:block
                "
              >
                <div
                  className="
                    absolute
                    left-[15%]
                    top-[20%]
                    h-[120px]
                    w-[320px]
                    rotate-[25deg]
                    rounded-full
                    bg-gradient-to-r
                    from-[#635BFF]
                    via-[#8B7CFF]
                    to-[#FF80B5]
                    opacity-80
                    blur-[1px]
                  "
                />

                <div
                  className="
                    absolute
                    left-[28%]
                    top-[45%]
                    h-[90px]
                    w-[270px]
                    rotate-[25deg]
                    rounded-full
                    bg-gradient-to-r
                    from-[#FF80B5]
                    via-[#FFAA6C]
                    to-[#FFD86F]
                    opacity-70
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[12%]
                    left-[38%]
                    h-[65px]
                    w-[210px]
                    rotate-[25deg]
                    rounded-full
                    bg-gradient-to-r
                    from-[#635BFF]
                    to-[#FF80B5]
                    opacity-60
                  "
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* CATEGORY FILTER */}
      {/* ================================================== */}

      <section className="pb-10">
        <Container>
          <div
            className="
              flex
              gap-2
              overflow-x-auto
              border-b
              border-[#E6EBF1]
              pb-5
            "
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`
                  whitespace-nowrap
                  rounded-full
                  px-4
                  py-2
                  text-[13px]
                  font-medium
                  transition-all
                  ${
                    index === 0
                      ? "bg-[#0A2540] text-white"
                      : "text-[#6B7C93] hover:bg-[#F6F9FC] hover:text-[#0A2540]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* ARTICLES */}
      {/* ================================================== */}

      <section className="pb-28 md:pb-36 lg:pb-44">
        <Container>
          <div
            className="
              grid
              gap-x-10
              gap-y-16

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {posts.map((post) => (
              <article key={post.title} className="group">
                {/* Article visual */}

                <Link
                  href="/blog"
                  className="
                    relative
                    block
                    aspect-[1.35/1]
                    overflow-hidden
                    rounded-[24px]
                    bg-[#F6F9FC]
                  "
                >
                  {/* Abstract editorial graphic */}

                  <div
                    className="
                      absolute
                      left-[12%]
                      top-[25%]
                      h-[90px]
                      w-[75%]
                      rotate-[20deg]
                      rounded-full
                      bg-gradient-to-r
                      from-[#635BFF]/80
                      via-[#8B7CFF]/60
                      to-[#FF80B5]/60
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      left-[30%]
                      top-[48%]
                      h-[70px]
                      w-[60%]
                      rotate-[20deg]
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF80B5]/60
                      via-[#FFAA6C]/60
                      to-[#FFD86F]/50
                      transition-transform
                      duration-700
                      group-hover:translate-x-3
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-white/10
                      backdrop-blur-[1px]
                    "
                  />
                </Link>

                {/* Meta */}

                <div className="mt-6 flex items-center gap-3">
                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#635BFF]
                    "
                  >
                    {post.category}
                  </span>

                  <span className="text-[12px] text-[#9AA6B2]">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}

                <Link href="/blog">
                  <h2
                    className="
                      mt-3
                      text-[23px]
                      font-semibold
                      leading-[1.1]
                      tracking-[-0.03em]
                      text-[#0A2540]
                      transition-colors
                      duration-200
                      group-hover:text-[#635BFF]
                    "
                  >
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-[1.7]
                    text-[#6B7C93]
                  "
                >
                  {post.excerpt}
                </p>

                {/* Date */}

                <p className="mt-5 text-[12px] text-[#9AA6B2]">
                  {post.date}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ================================================== */}
      {/* NEWSLETTER / CTA */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F6F9FC] py-28 md:py-36">
        <Container>
          <div className="relative">
            {/* Small gradient */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-40
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#635BFF]/[0.06]
                blur-[100px]
              "
            />

            <div className="relative z-10 max-w-[760px]">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#6B7C93]
                "
              >
                Stay curious
              </span>

              <h2
                className="
                  mt-5
                  text-[38px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#0A2540]

                  md:text-[54px]
                "
              >
                More ideas.
                <br />
                Less noise.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[16px]
                  leading-[1.75]
                  text-[#6B7C93]
                "
              >
                We write about technology, engineering, business and the
                lessons we learn while building digital systems.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-[#0A2540]
                "
              >
                Talk to Kurarin

                <span
                  className="
                    text-[#635BFF]
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
        </Container>
      </section>
    </main>
  );
}