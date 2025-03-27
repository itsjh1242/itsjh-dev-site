import {
  AVATAR_EAR,
  AVATAR_EAR_RING,
  AVATAR_EYEBROWS,
  AVATAR_EYES,
  AVATAR_GLASSES,
  AVATAR_HAIR,
  AVATAR_MOUTH,
  AVATAR_NOSE,
  AVATAR_SHIRT,
} from "@/components/avatar/assets";
import { AvatarSchema } from "@/schemas/avatarSchema";

export const generateRandomAvatar = (props: {
  setAvatar: (data: Partial<AvatarSchema>) => void;
}) => {
  props.setAvatar({
    ears: AVATAR_EAR[Math.floor(Math.random() * AVATAR_EAR.length)],
    earRing:
      AVATAR_EAR_RING[Math.floor(Math.random() * AVATAR_EAR_RING.length)],
    eyeBrows:
      AVATAR_EYEBROWS[Math.floor(Math.random() * AVATAR_EYEBROWS.length)],
    eyes: AVATAR_EYES[Math.floor(Math.random() * AVATAR_EYES.length)],
    glasses: AVATAR_GLASSES[Math.floor(Math.random() * AVATAR_GLASSES.length)],
    hair: AVATAR_HAIR[Math.floor(Math.random() * AVATAR_HAIR.length)],
    mouth: AVATAR_MOUTH[Math.floor(Math.random() * AVATAR_MOUTH.length)],
    nose: AVATAR_NOSE[Math.floor(Math.random() * AVATAR_NOSE.length)],
    shirt: AVATAR_SHIRT[Math.floor(Math.random() * AVATAR_SHIRT.length)],
  });
};
