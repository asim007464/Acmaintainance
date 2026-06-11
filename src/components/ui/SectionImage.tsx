import Image from "next/image";
import type { ReactNode } from "react";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  priority?: boolean;
  overlay?: ReactNode;
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-4/5",
  wide: "aspect-[21/9] sm:aspect-[3/1]",
};

export function SectionImage({
  src,
  alt,
  className = "",
  aspect = "video",
  priority = false,
  overlay,
}: SectionImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100 shadow-xl ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {overlay}
    </div>
  );
}
