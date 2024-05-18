import { ClockInIcon, ClockOutIcon, ClockRotateIcon } from "../icons";

export default function Activity() {
  return (
    <div className="font-poppins py-4">
      <h2 className="mb-3 text-sm font-semibold">Today's activity</h2>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center">
          <ClockInIcon className="mb-2" stroke="#ff0000" />
          <p className="font-semibold text-sm mb-1 text-center">8.30</p>
          <p className="text-[10px] text-center">Check In</p>
        </div>

        <div className="flex flex-col items-center">
          <ClockRotateIcon className="mb-2" stroke="#ff0000" />
          <p className="font-semibold text-sm text-primary mb-1 text-center">
            03:00:00
          </p>
          <p className="text-[10px] text-center">Working Hours</p>
        </div>

        <div className="flex flex-col items-center">
          <ClockOutIcon className="mb-2" stroke="#ff0000" />
          <p className="font-semibold text-sm mb-1 text-center">__:__</p>
          <p className="text-[10px] text-center">Check Out</p>
        </div>
      </div>
    </div>
  );
}
