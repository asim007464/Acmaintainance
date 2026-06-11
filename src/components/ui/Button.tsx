import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-red-600 text-white hover:bg-red-800 shadow-lg shadow-red-500/20",
  secondary: "bg-neutral-900 text-white hover:bg-neutral-800",
  outline: "border-2 border-white text-white hover:bg-white/10",
  "outline-dark":
    "border-2 border-neutral-900 bg-white text-neutral-900 hover:bg-neutral-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1da851]",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
