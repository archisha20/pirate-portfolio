import { useEffect, useState } from "react";
import { motion } from "motion/react";

/*
  Each stop contains:

  time  = minutes after midnight
  color = overlay color
  alpha = overlay strength
  label = small thematic label
*/

const TIME_STOPS = [
  {
    time: 0,
    color: "#0b1726",
    alpha: 0,
    label: "NIGHT WATCH",
  },

  {
    time: 300,
    color: "#172b3b",
    alpha: 0.01,
    label: "NIGHT WATCH",
  },

  {
    time: 360,
    color: "#b66d46",
    alpha: 0.07,
    label: "FIRST LIGHT",
  },

  {
    time: 420,
    color: "#d99450",
    alpha: 0.12,
    label: "SUNRISE",
  },

  {
    time: 600,
    color: "#d7aa5e",
    alpha: 0.14,
    label: "MORNING TIDE",
  },

  {
    time: 780,
    color: "#e1b96e",
    alpha: 0.13,
    label: "MIDDAY",
  },

  {
    time: 960,
    color: "#dca45a",
    alpha: 0.15,
    label: "GOLDEN HOUR",
  },

  {
    time: 1080,
    color: "#c66e45",
    alpha: 0.18,
    label: "SUNSET",
  },

  {
    time: 1140,
    color: "#754d48",
    alpha: 0.13,
    label: "DUSK",
  },

  {
    time: 1230,
    color: "#1b3043",
    alpha: 0.04,
    label: "BLUE HOUR",
  },

  {
    time: 1320,
    color: "#0d1b2c",
    alpha: 0,
    label: "NIGHT WATCH",
  },

  {
    time: 1440,
    color: "#0b1726",
    alpha: 0,
    label: "NIGHT WATCH",
  },
];

/* ===============================================================
   COLOR HELPERS
================================================================ */

function hexToRgb(hex) {
  const value = hex.replace("#", "");

  return {
    r: parseInt(value.substring(0, 2), 16),
    g: parseInt(value.substring(2, 4), 16),
    b: parseInt(value.substring(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  const red = Math.round(r).toString(16).padStart(2, "0");
  const green = Math.round(g).toString(16).padStart(2, "0");
  const blue = Math.round(b).toString(16).padStart(2, "0");

  return `#${red}${green}${blue}`;
}

function interpolate(a, b, amount) {
  return a + (b - a) * amount;
}

/* ===============================================================
   GET CURRENT TIME STATE
================================================================ */

function getTimeState() {
  const now = new Date();

  const minutes =
    now.getHours() * 60 +
    now.getMinutes() +
    now.getSeconds() / 60;

  let previous = TIME_STOPS[0];
  let next = TIME_STOPS[TIME_STOPS.length - 1];

  for (let i = 0; i < TIME_STOPS.length - 1; i++) {
    const current = TIME_STOPS[i];
    const upcoming = TIME_STOPS[i + 1];

    if (
      minutes >= current.time &&
      minutes <= upcoming.time
    ) {
      previous = current;
      next = upcoming;
      break;
    }
  }

  const range = next.time - previous.time;

  const progress =
    range === 0
      ? 0
      : (minutes - previous.time) / range;

  const previousRgb = hexToRgb(previous.color);
  const nextRgb = hexToRgb(next.color);

  const color = rgbToHex({
    r: interpolate(
      previousRgb.r,
      nextRgb.r,
      progress
    ),
    g: interpolate(
      previousRgb.g,
      nextRgb.g,
      progress
    ),
    b: interpolate(
      previousRgb.b,
      nextRgb.b,
      progress
    ),
  });

  const alpha = interpolate(
    previous.alpha,
    next.alpha,
    progress
  );

  /*
    Use the closer stop's label rather than switching
    abruptly at every interpolation point.
  */

  const label =
    progress < 0.5
      ? previous.label
      : next.label;

  return {
    color,
    alpha,
    label,
  };
}

/* ===============================================================
   COMPONENT
================================================================ */

function DayNightCycle({ showLabel = true }) {
  const [timeState, setTimeState] = useState(
    getTimeState()
  );

  useEffect(() => {
    const updateTime = () => {
      setTimeState(getTimeState());
    };

    updateTime();

    /*
      Updating every 30 seconds is enough because
      the actual interpolation is based on seconds.
    */

    const interval = setInterval(
      updateTime,
      30 * 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          FULL PAGE ATMOSPHERIC COLOR
      ====================================================== */}

      <motion.div
        className="pointer-events-none fixed inset-0 z-[40]"
        animate={{
          backgroundColor: timeState.color,
          opacity: timeState.alpha,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          mixBlendMode: "soft-light",
        }}
      />

      {/* =====================================================
          SUBTLE GOLDEN LIGHT
          Only becomes noticeable during daylight.
      ====================================================== */}

      <motion.div
        className="pointer-events-none fixed inset-0 z-[39]"
        animate={{
          opacity:
            timeState.alpha > 0
              ? timeState.alpha * 0.28
              : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, rgba(238,190,105,0.45), transparent 55%)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* =====================================================
          TIME LABEL
      ====================================================== */}

      {showLabel && (
        <motion.div
          className="pointer-events-none fixed bottom-6 left-6 z-[41]"
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-7 bg-[#b89660]" />

            <span className="font-mono text-[15px] uppercase tracking-[0.3em] text-[#b89660]">
              {timeState.label}
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default DayNightCycle;