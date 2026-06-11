import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  text,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center h-11 px-5 text-[15px] font-medium transition-all duration-200";

  const variants = {
    primary: `
      rounded-lg
      bg-[#635BFF]
      text-white
      hover:opacity-95
    `,

    secondary: `
      rounded-lg
      border
      border-[#E6EBF1]
      bg-white
      text-[#0A2540]
      hover:bg-[#F6F9FC]
    `,
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}
