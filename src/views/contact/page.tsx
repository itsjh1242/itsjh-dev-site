import { TypingText } from "@/components/animate/typing-text";
import { Label } from "@/components/ui/label";
import { contactMailTexts } from "@/schemas/contactMailTexts";
import {
  ArrowDownAZIcon,
  BlendIcon,
  LucideIcon,
  MinusIcon,
  MoveDiagonal2Icon,
  PaperclipIcon,
  SendIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const ContactPage: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [mailTextIndex, setMailTextIndex] = useState(0);
  const [mailText] = useState<string[]>(contactMailTexts);

  useEffect(() => {
    const interval = setInterval(() => {
      setMailTextIndex((prevIndex) => {
        if (prevIndex === contactMailTexts.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex h-screen w-full items-center justify-center">
        {/* Mail Box */}
        <div className="flex h-[500px] w-[860px] flex-col space-y-2 rounded-md border border-_border-strong_01">
          <div className="flex w-full items-center justify-between bg-_background-hover px-4 py-2 shadow-md">
            {/* Left Side */}
            <div className="flex items-center space-x-6">
              {/* 3 Dots */}
              <div
                className="flex cursor-pointer items-center space-x-[6px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <DotComponent
                  Icon={XIcon}
                  hovered={hovered}
                  color="bg-red-500"
                />
                <DotComponent
                  Icon={MinusIcon}
                  hovered={hovered}
                  color="bg-yellow-500"
                />
                <DotComponent
                  Icon={MoveDiagonal2Icon}
                  hovered={hovered}
                  color="bg-green-500"
                />
              </div>
              {/* Send Button */}
              <div className="flex cursor-pointer items-center space-x-[6px]">
                <IconButton Icon={SendIcon} />
              </div>
            </div>
            {/* Right Side */}
            <div className="flex items-center space-x-2">
              <IconButton Icon={PaperclipIcon} />
              <IconButton Icon={ArrowDownAZIcon} />
              <IconButton Icon={BlendIcon} />
            </div>
          </div>
          <div className="px-4">
            {/* To */}
            <ContactItemRow title="To" text="itsjh@kakao.com" />
            {/* Carbon Copy */}
            <ContactItemRow
              title="CC"
              text="designer@apple.com, product-manager@microsoft.com"
              index={1}
            />
            {/* Subject */}
            <ContactItemRow
              title="Subject"
              text="[Request] We want you to work with us"
              index={2}
            />
            {/* From */}
            <ContactItemRow
              title="From"
              text="youremail@contact.me"
              index={3}
            />
            {/* Text Area */}
            <div className="flex w-full items-end space-x-2 space-y-2 py-2">
              <TypingText text={mailText[mailTextIndex]} delay={0} speed={10} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ContactItemRowProps {
  title: string;
  text: string;

  index?: number;
}
const ContactItemRow: React.FC<ContactItemRowProps> = ({
  title,
  text,

  index = 0,
}) => {
  return (
    <div className="flex w-full items-end space-x-2 space-y-2 border-b">
      <Label className="text-sm font-bold">{title}: </Label>
      <div className="w-full px-2 text-_text-secondary hover:bg-_background-selected_hover hover:text-_text-primary">
        <TypingText text={text} delay={index} />
      </div>
    </div>
  );
};

interface DotComponentProps {
  Icon: LucideIcon;
  hovered?: boolean;
  color: string;
}
const DotComponent: React.FC<DotComponentProps> = ({
  Icon,
  hovered = false,
  color,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`flex h-[14px] w-[14px] items-center justify-center rounded-full text-center text-xs text-_text-inverse ${color}`}
      >
        {hovered && <Icon size={10} />}
      </div>
    </div>
  );
};

interface IconButtonProps {
  Icon: LucideIcon;
}
const IconButton: React.FC<IconButtonProps> = ({ Icon }) => {
  return (
    <div className="rounded-md p-2 hover:bg-_background-hover">
      <Icon size={16} />
    </div>
  );
};
