import { AVATAR_HEAD } from "@/components/avatar/assets";
import { generateRandomAvatar } from "@/hooks/avatarHook";
import { useHomeControlPanelStore } from "@/stores/useHomeControlPanelStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeIn" },
};

export const AvatarImage: React.FC = () => {
  const { avatar, setAvatar } = useHomeControlPanelStore();

  useEffect(() => {
    generateRandomAvatar({ setAvatar });
  }, [setAvatar]);

  return (
    <>
      {/* Head */}
      <motion.img
        src={AVATAR_HEAD}
        alt="AVATAR_HEAD"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Ear - left */}
      <motion.img
        src={avatar.ears[0]}
        alt="AVATAR_EAR_LEFT"
        className="absolute bottom-1/2 left-[84px] z-50 -translate-x-1/2 translate-y-[12px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Ear Ring */}
      <motion.img
        src={avatar.earRing}
        alt="AVATAR_EAR_RING_LEFT"
        className="absolute bottom-1/2 left-[84px] -translate-x-1/2 translate-y-[48px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Eye Brows */}
      <motion.img
        src={avatar.eyeBrows}
        alt="AVATAR_EYE_BROWS"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-20"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Eyes */}
      <motion.img
        src={avatar.eyes}
        alt="AVATAR_EYE"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-16"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Glasses */}
      <motion.img
        src={avatar.glasses}
        alt="AVATAR_GLASSES"
        className="absolute left-1/2 top-1/2 -translate-x-[90px] -translate-y-[84px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Hair */}
      <motion.img
        src={avatar.hair}
        alt="AVATAR_HAIR"
        className="absolute left-1/2 top-0 -translate-x-[131px] -translate-y-[14px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Motuh */}
      <motion.img
        src={avatar.mouth}
        alt="AVATAR_MOUTH"
        className="absolute bottom-0 left-1/2 -translate-x-[20px] -translate-y-[72px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Nose */}
      <motion.img
        src={avatar.nose}
        alt="AVATAR_NOSE"
        className="absolute left-1/2 top-1/2 -translate-x-[0px] -translate-y-[20px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
      {/* Shirt */}
      <motion.img
        src={avatar.shirt}
        alt="AVATAR_SHIRT"
        className="absolute bottom-0 left-1/2 -translate-x-[144px] translate-y-[20px]"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      />
    </>
  );
};
