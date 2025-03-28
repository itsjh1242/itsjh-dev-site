import { generateRandomAvatar } from "@/hooks/avatarHook";
import {
  CONTROL_PANEL_ITEMS,
  ControlPanelItemKeys,
} from "@/schemas/homeControlPanelSchema";
import { useHomeControlPanelStore } from "@/stores/useHomeControlPanelStore";
import { LucideIcon } from "lucide-react";

export const HomeControlPanel: React.FC = () => {
  return (
    <>
      <div className="flex min-h-[600px] w-[320px] flex-col rounded-lg border border-_border-strong_01 shadow-md shadow-_text-inverse">
        {/* Top of Panel: Basic Information */}
        <ControlPanelProfile />
        {/* Control Panel Items */}
        <div className="flex flex-col">
          {Object.keys(CONTROL_PANEL_ITEMS).map((key) => {
            const itemKey = key as ControlPanelItemKeys;
            const { Icon } = CONTROL_PANEL_ITEMS[itemKey];
            return (
              <ControlPanelItem
                key={key}
                title={itemKey}
                Icon={Icon as LucideIcon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const ControlPanelProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 bg-_background-hover p-3 shadow-md shadow-_text-inverse">
      <img src="/favicon.png" className="h-10 w-10" />
      <div className="flex flex-col justify-center">
        <p className="text-base font-bold">Kim Jun Hyeon</p>
        <p className="text-xs text-_text-secondary">Daejeon, South Korea</p>
      </div>
    </div>
  );
};

interface ControlPanelItemProps {
  title: ControlPanelItemKeys;
  Icon: LucideIcon;
}
const ControlPanelItem: React.FC<ControlPanelItemProps> = ({ title, Icon }) => {
  const { selected, setSelected, setAvatar } = useHomeControlPanelStore();

  const isActive = selected === title;

  const onClickItem = () => {
    setSelected(title);
    generateRandomAvatar({ setAvatar });
  };
  return (
    <div
      className={`flex cursor-pointer items-center space-x-3 px-6 py-4 hover:bg-_background-hover hover:text-_icon-primary ${isActive ? "bg-_background-hover text-_icon-primary" : "text-_icon-secondary"} `}
      onClick={onClickItem}
    >
      <Icon />
      <p className="ml-3 text-lg">{title}</p>
    </div>
  );
};
