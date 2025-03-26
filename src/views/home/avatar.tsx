import { motion } from "framer-motion";
import {
  GripIcon,
  PaintBucket,
  PaintRollerIcon,
  PencilIcon,
  PenToolIcon,
} from "lucide-react";

export const HomeAvatar: React.FC = () => {
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
        <div className="relative h-[400px] w-[400px]">
          {/* Label Above Avatar Box */}
          <p className={`text-blue-400`}>developer JunDev</p>
          {/* Square Box */}
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{ width: 400, height: 400 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute z-10 border-2 border-blue-400 p-2"
          />

          {/* Rounded Avatar Box */}
          <div
            className={`absolute bottom-0 left-1/2 m-auto aspect-square h-[320px] w-[320x] -translate-x-1/2 rounded-full bg-blue-400`}
          ></div>
        </div>
      </div>
    </>
  );
};
