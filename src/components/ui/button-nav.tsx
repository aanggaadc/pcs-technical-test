import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonNavProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonNav({
  children,
  className,
  ...props
}: ButtonNavProps) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center font-poppins font-semibold text-[10px] text-gray-400 gap-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
