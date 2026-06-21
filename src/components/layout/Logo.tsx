import Link from "next/link";
import { SITE } from "@/lib/constants";

type LogoProps = {
  variant?: "default" | "light";
  showLink?: boolean;
  className?: string;
};

export function Logo({
  variant = "default",
  showLink = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";

  const content = (
    <div className={`flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 lg:h-11 lg:w-11 ${
          isLight ? "bg-white" : "bg-neutral-900"
        }`}
      >
        <span
          className={`text-sm font-black leading-none sm:text-base ${
            isLight ? "text-red-600" : "text-red-600"
          }`}
        >
          AQ
        </span>
      </div>
      <div className="min-w-0 leading-tight">
        <p
          className={`truncate text-xs font-bold sm:text-sm ${
            isLight ? "text-white" : "text-red-600"
          }`}
        >
          {SITE.shortName}
        </p>
        <p
          className={`truncate text-[9px] uppercase tracking-wide sm:text-[10px] ${
            isLight ? "text-white/70" : "text-neutral-500"
          }`}
        >
          AC Experts Dubai
        </p>
      </div>
    </div>
  );

  if (!showLink) return content;

  return (
    <Link href="/" className="shrink min-w-0">
      {content}
    </Link>
  );
}
