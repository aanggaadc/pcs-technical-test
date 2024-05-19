import Avatar from "../avatar";
import { onlineData } from "../../fixtures";

export default function Online() {
  return (
    <div className="px-4 mb-[70px]">
      <h2 className="mb-3 text-sm font-semibold px-4">Online</h2>

      <div className="w-full rounded-[10px] shadow p-4 flex -space-x-1.5 relative">
        {onlineData.map((data, index) => (
          <Avatar
            key={index}
            className={`w-10 h-10 z-${index + 1}`}
            isBorder
            src={`/images/avatar-example-${index + 1}.jpeg`}
            name={data.name}
            location={data.location}
          />
        ))}

        <div className="w-10 h-10 rounded-full gradient-color font-poppins text-[11px] flex justify-center items-center text-center text-[#fff]">
          10 more
        </div>
      </div>
    </div>
  );
}
