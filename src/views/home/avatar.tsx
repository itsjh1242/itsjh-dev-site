import { TypingText } from "@/components/animate/typing-text";
import { CONTROL_PANEL_ITEMS } from "@/schemas/homeControlPanelSchema";
import { QUICK_MENU_ITEMS } from "@/schemas/quickMenuSchema";
import { useHomeControlPanelStore } from "@/stores/useHomeControlPanelStore";
import { motion } from "framer-motion";
import { GripIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AvatarImage } from "./avatar-image";
import { HomeMessageBox } from "./message-box";

export const HomeAvatar: React.FC = () => {
  const navigate = useNavigate();
  const { selected } = useHomeControlPanelStore();

  const primaryTextColor = CONTROL_PANEL_ITEMS[selected].primaryTextColor;
  const primaryBorderColor = CONTROL_PANEL_ITEMS[selected].primaryBorderColor;
  const primaryBgColor = CONTROL_PANEL_ITEMS[selected].primaryBgColor;

  /**
   * @description Quick Menu Item Click Handler
   */
  const handleQuickMenuItemClick = (link: string) => {
    navigate(link);
  };
  return (
    <>
      <div className="flex min-h-[600px] flex-col justify-start">
        {/* Quick Menu Bar */}
        <div className="mb-5 flex items-center space-x-8 self-center rounded-sm bg-_background-active px-4 py-2 shadow-md shadow-_text-inverse">
          <GripIcon className="text-_icon-primary" />
          <div className="flex space-x-5">
            {Object.keys(QUICK_MENU_ITEMS).map((key) => {
              const { Icon } =
                QUICK_MENU_ITEMS[key as keyof typeof QUICK_MENU_ITEMS];
              return (
                <div key={key} className="relative">
                  {/* Label Above Icon */}
                  <p
                    className={`absolute -top-8 left-1/2 hidden -translate-x-1/2 border border-_border-strong_03 bg-_background-hover p-2 text-sm transition`}
                  >
                    {QUICK_MENU_ITEMS[key].title}
                  </p>
                  <div
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border-2 border-transparent transition hover:bg-_background-active`}
                    onClick={() => {
                      handleQuickMenuItemClick(QUICK_MENU_ITEMS[key].link);
                    }}
                  >
                    <Icon className="text-_icon-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Avatar Box */}
        <div className="relative mb-10 h-[400px] w-[400px]">
          {/* Label Above Avatar Box */}
          <TypingText
            className={`text-sm transition ${primaryTextColor}`}
            text={CONTROL_PANEL_ITEMS[selected].subtitle}
          />
          {/* Square Box */}
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: 400, height: 400 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`absolute z-10 border-2 p-2 transition ${primaryBorderColor}`}
          />
          {/* Rounded Avatar Box */}
          <div
            className={`absolute bottom-0 left-1/2 m-auto aspect-square h-[320px] w-[320x] -translate-x-1/2 overflow-hidden rounded-full transition ${primaryBgColor}`}
          >
            <AvatarImage />
          </div>
        </div>

        {/* Message */}
        <HomeMessageBox />
      </div>
    </>
  );
};
