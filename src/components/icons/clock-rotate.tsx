import { cn } from "../../lib/utils";

export function ClockRotateIcon({
  className,
  stroke,
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="502.000000pt"
      height="512.000000pt"
      viewBox="0 0 502.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      className={cn("w-8 h-8", className)}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={stroke ?? "#000"}
        stroke="none"
      >
        <path
          d="M3815 5108 c-130 -45 -171 -171 -108 -330 l31 -77 -97 48 c-723 362
    -1573 358 -2281 -11 -386 -201 -699 -483 -942 -847 -201 -304 -332 -645 -390
    -1016 -25 -166 -31 -509 -10 -665 63 -470 242 -901 524 -1257 90 -114 278
    -303 393 -396 343 -277 774 -465 1215 -532 300 -45 809 -19 905 46 127 87 104
    280 -40 335 -42 16 -51 15 -157 -2 -158 -26 -538 -26 -683 0 -387 70 -706 212
    -996 443 -355 284 -613 682 -730 1128 -204 779 57 1618 666 2143 631 543 1506
    674 2266 337 55 -24 108 -51 120 -59 21 -14 20 -15 -19 -27 -92 -27 -152 -108
    -152 -204 0 -86 40 -150 117 -189 62 -31 118 -21 431 75 163 50 308 97 323
    105 69 35 117 137 104 218 -10 56 -221 612 -250 657 -45 70 -158 106 -240 77z"
        />
        <path
          d="M4410 3948 c-52 -15 -100 -55 -121 -102 -32 -71 -23 -128 36 -221 18
    -27 62 -108 98 -180 36 -71 76 -141 91 -154 71 -67 219 -52 274 26 30 44 44
    99 37 144 -8 45 -128 289 -188 382 -60 92 -142 130 -227 105z"
        />
        <path
          d="M2256 3715 c-21 -7 -51 -26 -67 -41 -62 -59 -59 -25 -59 -800 l0
    -707 25 -42 c13 -23 35 -49 49 -58 52 -34 983 -438 1022 -444 179 -25 286 212
    152 335 -14 12 -211 105 -439 205 l-414 182 -5 615 c-6 683 -3 655 -73 717
    -35 31 -91 53 -132 53 -11 -1 -37 -7 -59 -15z"
        />
        <path
          d="M4723 2865 c-28 -17 -49 -41 -65 -73 -23 -46 -23 -54 -22 -283 2
    -256 4 -267 61 -321 88 -84 239 -56 292 55 19 38 23 69 28 199 7 199 -6 315
    -41 368 -53 80 -169 105 -253 55z"
        />
        <path
          d="M4565 1768 c-48 -26 -81 -71 -141 -193 -35 -71 -82 -163 -104 -203
    -44 -80 -49 -120 -25 -180 21 -49 52 -81 100 -103 75 -35 164 -14 218 50 36
    43 129 211 178 320 55 125 53 199 -9 265 -15 16 -41 35 -59 42 -39 17 -130 18
    -158 2z"
        />
        <path
          d="M3910 876 c-19 -7 -74 -42 -122 -78 -47 -36 -119 -85 -160 -109 -94
    -55 -116 -75 -139 -124 -62 -134 35 -274 182 -263 47 3 72 13 144 56 121 73
    287 198 315 238 67 99 10 251 -107 283 -48 14 -70 13 -113 -3z"
        />
      </g>
    </svg>
  );
}
