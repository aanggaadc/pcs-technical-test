import { NotificationIcon } from "../icons";

export default function Header({ onClick }: { onClick: () => void }) {
  return (
    <header className="w-full flex justify-between items-center pt-8 pb-4 px-4">
      <h1 className="text-2xl font-poetsen text-primary">KerjaYuk!</h1>

      <div className="relative">
        <button onClick={() => onClick()}>
          <NotificationIcon />
        </button>

        <div className="w-2 h-2 rounded bg-red-500 absolute right-0.5 top-0.5" />
      </div>
    </header>
  );
}
