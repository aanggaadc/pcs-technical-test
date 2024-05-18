import { cn } from "../lib/utils";

import { CheckIcon, ArrowRightTickIcon, CloseIcon } from "./icons";

export default function NotificationCard({
  type,
  status,
  isRead,
}: {
  type: "reimbursement" | "sickness" | "overtime";
  status: "rejected" | "approved" | "processed";
  isRead?: boolean;
}) {
  const imageMap = {
    reimbursement: "/icons/ic-coin.png",
    sickness: "/icons/ic-capsule.png",
    overtime: "/icons/ic-clock.png",
  };

  const statusColorMap = {
    rejected: "bg-red-500",
    approved: "bg-green-500",
    processed: "bg-blue-500",
  };

  const iconStatusMap = {
    rejected: <CloseIcon color="#fff" />,
    approved: <CheckIcon color="#fff" />,
    processed: <ArrowRightTickIcon color="#fff" />,
  };

  return (
    <div
      className={cn(
        "w-full flex py-4 px-6 gap-4 font-poppins",
        !isRead && "bg-blue-100"
      )}
    >
      <div className="min-w-14 h-14 rounded-xl gradient-color relative">
        <img
          src={imageMap[type]}
          className="w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <div
          className={cn(
            "w-5 h-5 rounded-full absolute -bottom-1 -right-1 flex items-center justify-center",
            statusColorMap[status]
          )}
        >
          {iconStatusMap[status]}
        </div>
      </div>
      <div className="grow relative">
        <p className="text-xs font-bold capitalize mb-1">{type}</p>
        <p className="text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          impedit neque eaque, tempora perferendis iste provident a, vero facere
          ducimus, voluptas ad explicabo voluptate repudiandae ipsum eveniet
          voluptatibus modi iusto!
        </p>
        <p className="absolute top-0 right-0 text-gray-400 text-[8px]">Today</p>
      </div>
    </div>
  );
}
