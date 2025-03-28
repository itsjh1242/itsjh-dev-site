import { TypingText } from "@/components/animate/typing-text";
import { CONTROL_PANEL_ITEMS } from "@/schemas/homeControlPanelSchema";
import { useHomeControlPanelStore } from "@/stores/useHomeControlPanelStore";

export const HomeMessageBox: React.FC = () => {
  const { selected } = useHomeControlPanelStore();
  return (
    <>
      <div className="bg-_background-primary w-[400px] rounded-md">
        <p className="break-keep text-sm">
          <TypingText
            text={CONTROL_PANEL_ITEMS[selected].description}
            cursor
            speed={100}
          />
        </p>
      </div>
    </>
  );
};
