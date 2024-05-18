import { cn } from "../lib/utils";

export default function Avatar({
  src,
  className,
  name,
  location,
  isBorder,
}: {
  src: string;
  className?: string;
  name?: string;
  location?: string;
  isBorder?: boolean;
}) {
  return (
    <div className="font-poppins max-w-fit">
      <div className="relative w-fit h-fit">
        {isBorder && (
          <div className="absolute top-0 left-0 rounded-full w-full h-full bg-[#fff] scale-[1.2]" />
        )}
        <div
          className={cn(
            "w-12 h-12 rounded-full overflow-hidden mx-auto relative z-[2]",
            className
          )}
        >
          <img
            src={src}
            className="w-full h-full object-cover object-center"
            alt="avatar"
          />
        </div>
      </div>

      {name && (
        <p className="text-[10px] text-center mt-2 font-semibold">{name}</p>
      )}
      {location && <p className="text-[7px] text-center">{location}</p>}
    </div>
  );
}
