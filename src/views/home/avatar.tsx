import { TypingText } from "@/components/animate/typing-text";
import { CONTROL_PANEL_ITEMS } from "@/schemas/homeControlPanelSchema";
import { useHomeControlPanelStore } from "@/stores/useHomeControlPanelStore";
import { motion } from "framer-motion";
import {
  GripIcon,
  PaintBucket,
  PaintRollerIcon,
  PencilIcon,
  PenToolIcon,
} from "lucide-react";
import { AvatarImage } from "./avatar-image";
import { HomeMessageBox } from "./message-box";

export const HomeAvatar: React.FC = () => {
  const { selected } = useHomeControlPanelStore();

  const primaryTextColor = CONTROL_PANEL_ITEMS[selected].primaryTextColor;
  const primaryBorderColor = CONTROL_PANEL_ITEMS[selected].primaryBorderColor;
  const primaryBgColor = CONTROL_PANEL_ITEMS[selected].primaryBgColor;
  return (
    <>
      <div className="flex flex-col">
        {/* Quick Menu Bar */}
        <div className="mb-5 flex items-center space-x-8 self-center rounded-sm bg-_background-active px-4 py-2 shadow-md shadow-_text-inverse">
          <GripIcon className="text-_icon-primary" />
          <div className="flex space-x-5">
            {[PaintBucket, PaintRollerIcon, PenToolIcon, PencilIcon].map(
              (Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  <Icon className="text-_icon-primary" />
                </motion.div>
              ),
            )}
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
