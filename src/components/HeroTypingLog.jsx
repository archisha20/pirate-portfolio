import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LOG_ENTRIES = [
  "Building, learning, and navigating what lies beyond the map.",
  "Turning ideas into things that actually work.",
  "Exploring AI, code, and uncharted problems.",
  "Learning something new with every voyage.",
  "Writing the next chapter, one project at a time.",
];

function HeroTypingLog() {
  const [entryIndex, setEntryIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const currentEntry = LOG_ENTRIES[entryIndex];

    let timer;

    if (phase === "typing") {
      if (displayText.length < currentEntry.length) {
        timer = setTimeout(() => {
          setDisplayText(
            currentEntry.slice(0, displayText.length + 1)
          );
        }, 48);
      } else {
        timer = setTimeout(() => {
          setPhase("pause");
        }, 2600);
      }
    }

    if (phase === "pause") {
      timer = setTimeout(() => {
        setPhase("deleting");
      }, 700);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(
            displayText.slice(0, -1)
          );
        }, 25);
      } else {
        timer = setTimeout(() => {
          setEntryIndex(
            (current) =>
              (current + 1) % LOG_ENTRIES.length
          );

          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, phase, entryIndex]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.1,
        duration: 0.8,
      }}
      className="mx-auto mt-4 w-full max-w-2xl text-center"
    >
      {/* =====================================================
          LOG HEADER
      ====================================================== */}

      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-[#80653b]/60" />

        <span className="font-mono text-[12px] uppercase tracking-[0.45em] text-[#80653b]">
          LOG ENTRY
        </span>

        <div className="h-px w-8 bg-[#80653b]/60" />
      </div>

      {/* =====================================================
          TYPING LINE
      ====================================================== */}

      <div className="mt-4 min-h-[28px] px-4">
        <span className="font-serif text-[15px] leading-6 tracking-[0.08em] text-[#879596] md:text-sm">
          {displayText}
        </span>

        <motion.span
          className="ml-1 inline-block text-[#c5a46d]"
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ▍
        </motion.span>
      </div>

      {/* =====================================================
          SMALL DECORATIVE DETAIL
      ====================================================== */}

      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="h-px w-5 bg-[#80653b]/25" />

        <div className="h-1 w-1 rotate-45 border border-[#80653b]/50" />

        <div className="h-px w-5 bg-[#80653b]/25" />
      </div>
    </motion.div>
  );
}

export default HeroTypingLog;