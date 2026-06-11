import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton({
  href,
  className = "",
  size = "md",
  fullWidth = true,
}: {
  href: string;
  className?: string;
  size?: "xs" | "sm" | "md";
  fullWidth?: boolean;
}) {
  const sizeClass =
    size === "xs"
      ? "gap-1.5 px-3 py-2 text-xs"
      : size === "sm"
        ? "gap-1.5 px-4 py-2 text-xs sm:text-sm"
        : "gap-2 px-5 py-3 text-sm";

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex ${widthClass} items-center justify-center whitespace-nowrap rounded-full bg-[#25D366] font-semibold text-white transition-colors hover:bg-[#1da851] ${sizeClass} ${className}`}
    >
      <WhatsAppIcon
        className={`shrink-0 ${size === "xs" ? "h-3.5 w-3.5" : "h-4 w-4"}`}
      />
      <span>{size === "xs" ? "WhatsApp" : "Book on WhatsApp"}</span>
    </a>
  );
}
