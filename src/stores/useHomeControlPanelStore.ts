import { AvatarSchema } from "@/schemas/avatarSchema";
import { ControlPanelItemKeys } from "@/schemas/homeControlPanelSchema";
import { create } from "zustand";

interface HomeControlPanelStore {
  selected: ControlPanelItemKeys;
  setSelected: (selected: ControlPanelItemKeys) => void;

  /**
   * @description Avatar Setting
   */
  avatar: AvatarSchema;
  setAvatar: (data: Partial<AvatarSchema>) => void;
}

export const useHomeControlPanelStore = create<HomeControlPanelStore>(
  (set) => ({
    selected: "developer",
    setSelected: (selected: ControlPanelItemKeys) => set({ selected }),

    avatar: {
      ears: [],
      earRing: "",
      eyeBrows: "",
      eyes: "",
      glasses: "",
      hair: "",
      mouth: "",
      nose: "",
      shirt: "",
    },
    setAvatar: (data) =>
      set(
        (state): Partial<HomeControlPanelStore> => ({
          avatar: {
            ...(state.avatar ?? {}),
            ...data,
          },
        }),
      ),
  }),
);
