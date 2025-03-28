import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number; // 타이핑 속도(ms)
  cursor?: boolean;
  className?: string;
};

export const TypingText = ({
  text,
  speed = 30,
  cursor = false,
  className,
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    setDisplayed(text[0] || "");

    const typingInterval = setInterval(() => {
      i++;
      if (i >= text.length) {
        clearInterval(typingInterval);
        return;
      }
      setDisplayed((prev) => prev + text[i]);
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    if (!cursor) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <motion.span
      className={`whitespace-pre-wrap text-sm transition ${className}`}
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayed}
      {cursor && (
        <span className="inline-block w-[1ch]">{showCursor ? "|" : " "}</span>
      )}
    </motion.span>
  );
};
