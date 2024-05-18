export default function SlideInPanel({
  show,
  children,
}: {
  show: boolean;
  children: React.JSX.Element;
}) {
  const showClass = show ? "right-0" : "-right-full";

  return (
    <div
      className={`${showClass} absolute top-0 z-[10] h-full w-full transition-[right] duration-[0.4s] ease-in-out`}
    >
      {children}
    </div>
  );
}
