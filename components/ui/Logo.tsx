import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
}

/**
 * JuaraKu brand mark — rendered from /logo.png (the client-provided emblem).
 * The original placeholder SVG is kept commented out below for reference.
 */
export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="JuaraKu logo"
        width={2413}
        height={2888}
        className="h-10 w-auto"
      />
      {/* Original placeholder SVG (kept for reference — replaced by /logo.png):
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="JuaraKu logo"
      >
        <path d="M14 4L20 18L11 22L6 6Z" fill="#1E4AA8" />
        <path d="M26 4L20 18L29 22L34 6Z" fill="#1E78C8" />
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
      */}
      {withWordmark ? (
        <span className="font-display text-xl font-extrabold tracking-tight text-brand-blue-royal">
          Juara<span className="text-[#F6B800]">Ku</span>
        </span>
      ) : null}
    </div>
  );
}
//   <svg
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         role="img"
//         aria-label="JuaraKu logo"
//       >
//         {/* Ribbon */}
//         <path d="M14 4L20 18L11 22L6 6Z" fill="#1E4AA8" />
//         <path d="M26 4L20 18L29 22L34 6Z" fill="#1E78C8" />
//         {/* Medal */}
// <circle
//   cx="20"
//   cy="24"
//   r="13"
//   fill="#FFC83D"
//   stroke="#F6B800"
//   strokeWidth="1.5"
// />
//         <circle cx="20" cy="24" r="9.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.2" />
//         <path
//           d="M20 18.5L21.6 21.9L25.3 22.4L22.6 24.9L23.3 28.5L20 26.7L16.7 28.5L17.4 24.9L14.7 22.4L18.4 21.9L20 18.5Z"
//           fill="#FFFFFF"
//         />
//         <defs>
//           <linearGradient id="medalGradient" x1="7" y1="11" x2="33" y2="37" gradientUnits="userSpaceOnUse">
//             <stop stopColor="#FFC83D" />
//             <stop offset="1" stopColor="#F6B800" />
//           </linearGradient>
//         </defs>
//       </svg>

// <svg
//   width="256"
//   height="256"
//   viewBox="0 0 256 256"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <defs>
//     <!-- Dark Ribbon -->
//     <linearGradient id="ribbonLeft" x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0%" stop-color="#1E4AA8"/>
//       <stop offset="100%" stop-color="#10367F"/>
//     </linearGradient>

//     <!-- Light Ribbon -->
//     <linearGradient id="ribbonRight" x1="0" y1="0" x2="1" y2="1">
//       <stop offset="0%" stop-color="#3AA8FF"/>
//       <stop offset="100%" stop-color="#1976D2"/>
//     </linearGradient>
//   </defs>

//   <!-- Left Ribbon -->
//   <path
//     d="M40 20H110L145 120H110L40 20Z"
//     fill="url(#ribbonLeft)"
//   />

//   <!-- Right Ribbon -->
//   <path
//     d="M216 20H146L111 120H146L216 20Z"
//     fill="url(#ribbonRight)"
//   />

//   <!-- Medal -->
//   <circle
//     cx="128"
//     cy="170"
//     r="78"
//     fill="#F6B800"
//     stroke="#D89B00"
//     stroke-width="6"
//   />

//   <!-- Single White Ring -->
//   <circle
//     cx="128"
//     cy="170"
//     r="60"
//     fill="none"
//     stroke="white"
//     stroke-width="5"
//   />
// <g transform="translate(128 170) rotate(-45) scale(0.14) translate(-256 -256)">
//   <path
//     fill="white"
//     d="M256,0C114.842,0,0,114.84,0,256s114.842,256,256,256s256-114.84,256-256S397.158,0,256,0z
//     M322.225,451.558c-20.797,7.062-43.071,10.894-66.225,10.894
//     c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548
//     c23.154,0,45.429,3.832,66.226,10.894C266.612,107.439,231.226,177.657,231.226,256
//     S266.612,404.561,322.225,451.558z"
//   />
// </g>
  
// </svg>

