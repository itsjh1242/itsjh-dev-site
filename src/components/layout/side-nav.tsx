import { cn } from "@/lib/utils";
import { AppleIcon, LucideIcon, StickyNoteIcon } from "lucide-react";
import { useState } from "react";

export const SideNav: React.FC = () => {
  return (
    <div className="flex w-[72px] flex-col items-center justify-between bg-gray-800 p-3">
      {/* top */}
      <div className="space-y-8">
        {/* profile image */}
        <div className="h-14 w-14 rounded-full bg-slate-600"></div>
        {/* tabs */}
        <div className="space-y-6">
          {/* home */}
          <TabWrapper Icon={AppleIcon} description="홈" />
          {/* notes */}
          <TabWrapper Icon={StickyNoteIcon} description="노트" />
        </div>
      </div>
      {/* bottom */}
    </div>
  );
};

interface TabWrapperProps {
  className?: string;
  Icon: LucideIcon;
  description?: string;
}
const TabWrapper: React.FC<TabWrapperProps> = ({
  className,
  Icon,
  description,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={cn(
        `relative flex w-full cursor-pointer items-center justify-center text-white`,
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon fill={hovered ? "#fff" : "none"} size={30} />
      {hovered && (
        <p className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white bg-opacity-40 px-4 py-1 text-sm text-white">
          {description}
        </p>
      )}
    </div>
  );
};
