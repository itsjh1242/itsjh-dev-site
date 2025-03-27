import {
  Code2Icon,
  CompassIcon,
  HeartHandshakeIcon,
  HeartIcon,
  LucideIcon,
  PaletteIcon,
  TerminalIcon,
} from "lucide-react";

export type ControlPanelItemKeys =
  | "developer"
  | "designer"
  | "command"
  | "multiplayer"
  | "adventurer"
  | "human";

export type ControlPanelItem = {
  Icon: LucideIcon;
  subtitle: string;
  description: string;
  primaryTextColor: string;
  primaryBorderColor: string;
  primaryBgColor: string;
};

export const CONTROL_PANEL_ITEMS: Record<
  ControlPanelItemKeys,
  ControlPanelItem
> = {
  developer: {
    Icon: Code2Icon,
    subtitle: "I am a developer, I can code",
    description:
      "기능 구현에 강하며, 기술적인 문제를 스스로 해결할 수 있는 사람",
    primaryTextColor: "text-blue-400",
    primaryBorderColor: "border-blue-400",
    primaryBgColor: "bg-blue-400",
  },
  designer: {
    Icon: PaletteIcon,
    subtitle: "I am a designer, I care about how things feel",
    description:
      "감각적인 UI/UX에 집중하고, 사용자의 경험을 섬세하게 설계하는 사람",
    primaryTextColor: "text-rose-300",
    primaryBorderColor: "border-rose-300",
    primaryBgColor: "bg-rose-300",
  },
  command: {
    Icon: TerminalIcon,
    subtitle: "I take command, I build things with intention",
    description:
      "주도적으로 방향을 설정하고, 목적 있는 결과물을 만들어내는 사람",
    primaryTextColor: "text-sky-500",
    primaryBorderColor: "border-sky-500",
    primaryBgColor: "bg-sky-500",
  },
  multiplayer: {
    Icon: HeartHandshakeIcon,
    subtitle: "I am a multiplayer, I love collaboration",
    description:
      "협업을 통해 시너지를 만들고, 함께 성장하는 데 가치를 두는 사람",
    primaryTextColor: "text-amber-500",
    primaryBorderColor: "border-amber-500",
    primaryBgColor: "bg-amber-500",
  },
  adventurer: {
    Icon: CompassIcon,
    subtitle: "I am an adventurer, I embrace new challenges",
    description: "새로운 기술, 도전적인 환경에서도 즐겁게 배우고 나아가는 사람",
    primaryTextColor: "text-green-500",
    primaryBorderColor: "border-green-500",
    primaryBgColor: "bg-green-500",
  },
  human: {
    Icon: HeartIcon,
    subtitle: "I am a human, I value empathy and emotion",
    description: "사람을 중심에 두고 공감과 감성을 바탕으로 일하는 사람",
    primaryTextColor: "text-red-500",
    primaryBorderColor: "border-red-500",
    primaryBgColor: "bg-red-500",
  },
};
