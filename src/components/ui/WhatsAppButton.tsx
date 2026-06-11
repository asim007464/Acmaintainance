import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton({
  href,
  className = "",
  size = "md",
}: {
  href: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const sizeClass =
    size === "sm"
      ? "px-4 py-2.5 text-xs sm:text-sm"
      : "px-5 py-3 text-sm";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] font-semibold text-white transition-colors hover:bg-[#1da851] ${sizeClass} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      <span>Book on WhatsApp</span>
    </a>
  );
}
