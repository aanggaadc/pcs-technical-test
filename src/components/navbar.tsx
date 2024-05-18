import { useNavigate } from "react-router-dom";
import ButtonNav from "./ui/button-nav";

import {
  HomeIcon,
  ChecklistIcon,
  CheckoutIcon,
  FormIcon,
  SettingIcon,
} from "./icons";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full">
      <div className="max-w-[375px] h-[60px] mx-auto w-full flex justify-between items-center px-6 bg-[#fff] shadow-[rgba(0,0,0,0.06)_0px_2px_4px_0px_inset]">
        <ButtonNav className="text-primary" onClick={() => navigate("/")}>
          <HomeIcon color="#ff0000" />
          Home
        </ButtonNav>

        <ButtonNav onClick={() => navigate("/attendance")}>
          <ChecklistIcon color="#a0a0a0" />
          Attendance
        </ButtonNav>

        <div className="translate-y-[-18px] font-poppins text-[10px] text-primary font-semibold text-center">
          <ButtonNav
            onClick={() => navigate("/checkout")}
            className="w-16 h-16 bg-primary rounded-[50%] shadow-[rgba(17,17,26,0.1)_0px_4px_16px,rgba(17,17,26,0.05)_0px_8px_32px]"
          >
            <CheckoutIcon color="#fff" className="w-8 h-8" />
          </ButtonNav>
          Check Out
        </div>

        <ButtonNav onClick={() => navigate("/form")}>
          <FormIcon color="#a0a0a0" />
          Form
        </ButtonNav>

        <ButtonNav onClick={() => navigate("/setting")}>
          <SettingIcon color="#a0a0a0" />
          Setting
        </ButtonNav>
      </div>
    </nav>
  );
}
