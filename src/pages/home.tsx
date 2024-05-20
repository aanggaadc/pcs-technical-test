import { useState } from "react";
import { greetBasedOnTime } from "../lib/utils";
import Header from "../components/home/header";
import Navbar from "../components/navbar";
import Profile from "../components/home/profile";
import Activity from "../components/home/activity";
import News from "../components/home/news";
import Online from "../components/home/online";

import SlideInPanel from "../components/slide-in-panel";
import Notifications from "../components/notifactions";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div
      className={`relative h-screen -mb-2.5 pb-2.5 ${
        showNotification
          ? "overflow-hidden"
          : "overflow-x-hidden overflow-y-visible"
      }
      no-scrollbar`}
    >
      <Header onClick={() => setShowNotification(true)} />

      <div className="px-4">
        <h2 className="font-poppins text-sm mb-2">
          Hi, Good {greetBasedOnTime()}!
        </h2>
        <Profile />
        <Activity />
      </div>

      <News />
      <Online />

      <Navbar />

      <SlideInPanel show={showNotification}>
        <Notifications onClose={() => setShowNotification(false)} />
      </SlideInPanel>
    </div>
  );
}
