import svgPaths from "../../imports/svg-1r7tplwt5t";

export function EaseCareLogo({ size = 120 }: { size?: number }) {
  const scale = size / 132;
  return (
    <div className="relative" style={{ width: size, height: size * (132.761 / 125.324) }}>
      {/* Layer 11 - Main bird body (blue gradient) */}
      <div
        className="absolute"
        style={{
          width: 125.324 * scale,
          height: 123.181 * scale,
          left: 0,
          top: 9.58 * scale,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 125.324 123.181"
        >
          <g clipPath="url(#clip_ec_l11)">
            <g>
              <path d={svgPaths.p279ee3c0} fill="white" />
              <path d={svgPaths.p279ee3c0} fill="url(#grad_ec_l11)" />
              <path d={svgPaths.p3cb2b480} fill="white" />
            </g>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="grad_ec_l11"
              x1="62.6245"
              x2="62.6245"
              y1="0.120939"
              y2="123.074"
            >
              <stop stopColor="#08C5EF" />
              <stop offset="0.879808" stopColor="#4B58E4" />
            </linearGradient>
            <clipPath id="clip_ec_l11">
              <rect fill="white" height="123.181" width="125.324" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* Layer 12 - Top head feather (blue) */}
      <div
        className="absolute"
        style={{
          width: 71.939 * scale,
          height: 29.472 * scale,
          left: 22.91 * scale,
          top: 0,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 71.9392 29.4723"
        >
          <g clipPath="url(#clip_ec_l12)">
            <path d={svgPaths.p30cb2000} fill="#1975D2" />
            <path d={svgPaths.p2b2e83e0} fill="#1975D2" />
          </g>
          <defs>
            <clipPath id="clip_ec_l12">
              <rect fill="white" height="29.4723" width="71.9392" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* Layer 13 - Eyes */}
      <div
        className="absolute"
        style={{
          width: 46.517 * scale,
          height: 12.392 * scale,
          left: 49.43 * scale,
          top: 51.64 * scale,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 46.5175 12.3918"
        >
          <g clipPath="url(#clip_ec_l13)">
            <path d={svgPaths.p3a5d4480} fill="black" />
            <path d={svgPaths.p1314ecf0} fill="black" />
          </g>
          <defs>
            <clipPath id="clip_ec_l13">
              <rect fill="white" height="12.3918" width="46.5175" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* Layer 14 - Beak (orange) */}
      <div
        className="absolute"
        style={{
          width: 15.715 * scale,
          height: 8.708 * scale,
          left: 66.78 * scale,
          top: 59.08 * scale,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 15.7147 8.70772"
        >
          <g clipPath="url(#clip_ec_l14)">
            <path d={svgPaths.p2afdb00} fill="#F49514" />
            <path d={svgPaths.p561b2f0} fill="#F2911B" />
          </g>
          <defs>
            <clipPath id="clip_ec_l14">
              <rect fill="white" height="8.70772" width="15.7147" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* Layer 15 - Heart */}
      <div
        className="absolute"
        style={{
          width: 84.733 * scale,
          height: 52.447 * scale,
          left: 39.32 * scale,
          top: 67.05 * scale,
        }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 84.7328 52.4473"
        >
          <g clipPath="url(#clip_ec_l15)">
            <path d={svgPaths.p8251800} fill="#E35406" />
            <path d={svgPaths.p25968080} fill="#F5AE31" />
            <path d={svgPaths.p1684f400} fill="#FAD896" />
            <path d={svgPaths.pdd43900} fill="#F5AE31" />
            <path d={svgPaths.p1635d000} fill="#AC0601" />
            <path d={svgPaths.p14def300} fill="#AC0601" />
          </g>
          <defs>
            <clipPath id="clip_ec_l15">
              <rect fill="white" height="52.4473" width="84.7328" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
