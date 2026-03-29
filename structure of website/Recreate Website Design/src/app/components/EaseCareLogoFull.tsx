import svgPaths from "../../imports/svg-hve6r2vh8n";

/**
 * Full EaseCare logo with icon + "Easecare" text + tagline.
 * White-themed for dark backgrounds. Based on the Figma LogoContainer.
 */
export function EaseCareLogoFull({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="inline-flex items-center gap-[8px] shrink-0"
      style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
    >
      {/* Bird icon */}
      <div
        className="relative shrink-0"
        style={{ width: 36.983, height: 39.18 }}
      >
        {/* Layer 12 - Head feather (blue) */}
        <div
          className="absolute"
          style={{ width: 21.229, height: 8.697, left: 6.76, top: 0 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2294 8.69733">
            <g clipPath="url(#ecf_clip_l12)">
              <path d={svgPaths.p12137500} fill="#1975D2" />
              <path d={svgPaths.p2a293a00} fill="#1975D2" />
            </g>
            <defs>
              <clipPath id="ecf_clip_l12"><rect fill="white" height="8.69733" width="21.2294" /></clipPath>
            </defs>
          </svg>
        </div>
        {/* Layer 11 - Main body (gradient) */}
        <div
          className="absolute"
          style={{ width: 36.983, height: 36.351, left: 0, top: 2.83 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.9834 36.3509">
            <g clipPath="url(#ecf_clip_l11)">
              <g>
                <path d={svgPaths.p2b662140} fill="white" />
                <path d={svgPaths.p2b662140} fill="url(#ecf_grad_l11)" />
                <path d={svgPaths.pf97a300} fill="white" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="ecf_grad_l11" x1="18.4805" x2="18.4805" y1="0.0357277" y2="36.3195">
                <stop stopColor="#08C5EF" />
                <stop offset="0.879808" stopColor="#4B58E4" />
              </linearGradient>
              <clipPath id="ecf_clip_l11"><rect fill="white" height="36.3509" width="36.9834" /></clipPath>
            </defs>
          </svg>
        </div>
        {/* Layer 13 - Eyes (changed from black → white) */}
        <div
          className="absolute"
          style={{ width: 13.727, height: 3.657, left: 14.59, top: 15.24 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7274 3.65683">
            <g clipPath="url(#ecf_clip_l13)">
              <path d={svgPaths.p4e37d00} fill="white" />
              <path d={svgPaths.p8c79d00} fill="white" />
            </g>
            <defs>
              <clipPath id="ecf_clip_l13"><rect fill="white" height="3.65683" width="13.7274" /></clipPath>
            </defs>
          </svg>
        </div>
        {/* Layer 14 - Beak (orange) */}
        <div
          className="absolute"
          style={{ width: 4.637, height: 2.57, left: 19.71, top: 17.43 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.63744 2.56966">
            <g clipPath="url(#ecf_clip_l14)">
              <path d={svgPaths.p136a3700} fill="#F49514" />
              <path d={svgPaths.p18050400} fill="#F2911B" />
            </g>
            <defs>
              <clipPath id="ecf_clip_l14"><rect fill="white" height="2.56966" width="4.63744" /></clipPath>
            </defs>
          </svg>
        </div>
        {/* Layer 15 - Heart */}
        <div
          className="absolute"
          style={{ width: 25.005, height: 15.477, left: 11.6, top: 19.79 }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0048 15.4773">
            <g clipPath="url(#ecf_clip_l15)">
              <path d={svgPaths.p38332480} fill="#E35406" />
              <path d={svgPaths.p3a406280} fill="#F5AE31" />
              <path d={svgPaths.p394edd00} fill="#FAD896" />
              <path d={svgPaths.p2d32ab80} fill="#F5AE31" />
              <path d={svgPaths.p11f7a680} fill="#AC0601" />
              <path d={svgPaths.p3e71ac00} fill="#AC0601" />
            </g>
            <defs>
              <clipPath id="ecf_clip_l15"><rect fill="white" height="15.4773" width="25.0048" /></clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-[1.2]">
        <span className="mx-[1px] my-[0px] mx-[2px] my-[0px] mx-[2px] my-[0px] mx-[2px] my-[0px] mx-[3px] my-[0px] mx-[2px] my-[0px] mx-[1px] my-[0px] m-[0px] mx-[0px] my-[1px] mx-[0px] my-[2px] mx-[0px] my-[1px] m-[0px] mx-[0px] my-[-1px]"
          style={{
            fontFamily: "'Lexend', sans-serif",
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: "-0.48px",
            color: "white",
          }}
        >
          Easecare
        </span>
        <span
          style={{
            fontFamily: "'Lexend', sans-serif",
            fontWeight: 500,
            fontSize: 6.7,
            letterSpacing: "-0.134px",
            color: "rgba(255,255,255,0.5)",
            marginLeft: 2,
          }}
        >
          Care That Feels Like Family
        </span>
      </div>
    </div>
  );
}