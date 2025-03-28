import {
  BoxesIcon,
  HandshakeIcon,
  HouseIcon,
  Layers3Icon,
  LucideIcon,
} from "lucide-react";

export interface QuickMenuSchema {
  title: string;
  Icon: LucideIcon;
  link: string;
}

/**
 * @description Quick Menu Items
 */
export const QUICK_MENU_ITEMS: Record<string, QuickMenuSchema> = {
  home: {
    title: "Home",
    Icon: HouseIcon,
    link: "/",
  },
  project: {
    title: "Showcase",
    Icon: BoxesIcon,
    link: "/showcase",
  },
  resume: {
    title: "Resume",
    Icon: Layers3Icon,
    link: "/resume",
  },
  contact: {
    title: "Contact",
    Icon: HandshakeIcon,
    link: "/contact",
  },
};
/**
 * @description Quick Menu Item Keys
 */
export const QUICK_MENU_ITEM_KEYS = Object.keys(QUICK_MENU_ITEMS);
