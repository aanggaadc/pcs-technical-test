import { cn } from "../../lib/utils";

export function ClockOutIcon({
  className,
  stroke,
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      stroke={stroke ?? "#000"}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 12 16.5"></polyline>
    </svg>
  );
}
