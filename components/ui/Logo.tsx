import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

/**
 * JuaraKu brand mark: a gold medal with a star, on a blue ribbon — standing
 * in for the provided logo asset. Built as inline SVG (not a raster image)
 * so it stays crisp at any size and can be recolored via currentColor if
 * ever needed. Swap for the real logo file when available.
 */
export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="JuaraKu logo"
      >
        {/* Ribbon */}
        <path d="M14 4L20 18L11 22L6 6Z" fill="#1E4AA8" />
        <path d="M26 4L20 18L29 22L34 6Z" fill="#1E78C8" />
        {/* Medal */}
        <circle cx="20" cy="24" r="13" fill="url(#medalGradient)" stroke="#F6B800" strokeWidth="1.5" />
        <circle cx="20" cy="24" r="9.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.2" />
        <path
          d="M20 18.5L21.6 21.9L25.3 22.4L22.6 24.9L23.3 28.5L20 26.7L16.7 28.5L17.4 24.9L14.7 22.4L18.4 21.9L20 18.5Z"
          fill="#FFFFFF"
        />
        <defs>
          <linearGradient id="medalGradient" x1="7" y1="11" x2="33" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC83D" />
            <stop offset="1" stopColor="#F6B800" />
          </linearGradient>
        </defs>
      </svg>
      {withWordmark ? (
        <span className="font-display text-xl font-extrabold tracking-tight text-brand-blue-royal">
          Juara<span className="text-[#F6B800]">Ku</span>
        </span>
      ) : null}
    </div>
  );
}
