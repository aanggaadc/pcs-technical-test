import NotificationCard from "./notification-card";
import { ArrowLeftIcon } from "./icons";
import { notificationData } from "../fixtures";

export default function Notifications({ onClose }: { onClose: () => void }) {
  return (
    <div className="no-scrollbar relative h-screen w-full overflow-x-hidden overflow-y-scroll bg-[#fff]">
      <div className="sticky bg-[#fff] top-0 z-[1] h-16 px-4 flex gap-4 items-center shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px]">
        <button onClick={() => onClose()}>
          <ArrowLeftIcon />
        </button>

        <h2 className="text-xl text-primary font-semibold font-poppins">
          Notification
        </h2>
      </div>

      {notificationData.map((data, index) => (
        <NotificationCard key={index} {...data} />
      ))}
    </div>
  );
}
