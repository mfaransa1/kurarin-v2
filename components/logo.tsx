import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  className = "",
  onClick,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Kurarin Solutions — Home"
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Kurarin Solutions"
        width={180}
        height={45}
        priority
        className="
          h-auto
          w-[175px]
          object-contain
          transition-opacity
          duration-200
          group-hover:opacity-80
        "
      />
    </Link>
  );
}