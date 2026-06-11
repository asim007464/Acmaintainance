import Image from "next/image";
import { Star } from "lucide-react";
import { REVIEW_AVATARS } from "@/lib/images";

export function ReviewAvatars({
  size = "md",
  showStars = true,
  label = "4k+ Reviews",
}: {
  size?: "sm" | "md";
  showStars?: boolean;
  label?: string;
}) {
  const avatarSize = size === "sm" ? "w-8 h-8 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10";
  const starSize = size === "sm" ? "w-3.5 h-3.5 sm:w-4 sm:h-4" : "w-4 h-4";

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
      <div className={`flex ${size === "sm" ? "-space-x-2" : "-space-x-2 sm:-space-x-3"}`}>
        {REVIEW_AVATARS.map((avatar) => (
          <div
            key={avatar.src}
            className={`${avatarSize} rounded-full border-2 border-white overflow-hidden shrink-0 bg-neutral-200`}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {showStars && (
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className={`${starSize} fill-red-600 text-red-600`} />
            ))}
          </div>
          <span className="font-semibold text-white text-xs sm:text-sm">{label}</span>
        </div>
      )}
    </div>
  );
}
