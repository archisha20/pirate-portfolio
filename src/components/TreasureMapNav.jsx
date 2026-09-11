import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const destinations = [
  {
    id: "port",
    number: "01",
    title: "THE PORT",
    subtitle: "Begin the Voyage",
    position: "left-[18%] top-[34%]",
  },
  {
    id: "treasures",
    number: "02",
    title: "TREASURES",
    subtitle: "Things I've Built",
    position: "left-[28%] top-[70%]",
  },
  {
    id: "skills",
    number: "03",
    title: "MY ARSENAL",
    subtitle: "Tools & Knowledge",
    position: "left-[72%] top-[34%]",
  },
  {
    id: "journey",
    number: "04",
    title: "THE JOURNEY",
    subtitle: "Course of the Voyage",
    position: "left-[72%] top-[70%]",
  },
  {
    id: "about",
    number: "05",
    title: "ABOUT ME",
    subtitle: "The Captain's Log",
    position: "left-[50%] top-[51%]",
  },
  {
    id: "contact",
    number: "06",
    title: "LET'S CONNECT",
    subtitle: "Send a Message",
    position: "left-[88%] top-[51%]",
  },
];

function TreasureMapNav() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navigateTo = (id) => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 350);
  };

  return (
    <>
      {/* =====================================================
          MAP BUTTON
      ====================================================== */}

      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed right-6 top-6 z-[9990] flex h-14 w-14 items-center justify-center rounded-full border border-[#b89660]/70 bg-[#050a0b]/90 shadow-[0_0_25px_rgba(0,0,0,0.6)] backdrop-blur-md"
        aria-label="Open treasure map"
      >
        <div className="relative flex h-9 w-9 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#c5a46d]" />

          <div className="absolute inset-[5px] rounded-full border border-[#80653b]" />

          <div className="absolute h-7 w-px rotate-45 bg-[#c5a46d]" />

          <div className="absolute h-7 w-px -rotate-45 bg-[#80653b]" />

          <div className="relative h-2 w-2 rounded-full bg-[#d8c99f]" />
        </div>
      </motion.button>

      {/* =====================================================
          MAP OVERLAY
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10000] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dark surrounding sea */}

            <div className="absolute inset-0 bg-[#020607]/95 backdrop-blur-sm" />

            {/* =================================================
                MAP PAPER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                rotate: -1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="absolute inset-4 overflow-hidden border border-[#a8844d] bg-[#68705d] shadow-[0_0_120px_rgba(0,0,0,0.95)] md:inset-8"
            >
              {/* =================================================
                  PARCHMENT TEXTURE
              ================================================== */}

              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at 50% 50%,
                      rgba(116,126,100,0.9),
                      rgba(72,82,67,0.96)
                    )
                  `,
                }}
              />

              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: `
                    radial-gradient(
                      circle at 20% 30%,
                      rgba(238,216,165,0.15) 0 1px,
                      transparent 2px
                    ),
                    radial-gradient(
                      circle at 70% 60%,
                      rgba(20,27,23,0.14) 0 1px,
                      transparent 2px
                    ),
                    repeating-linear-gradient(
                      8deg,
                      transparent 0,
                      transparent 22px,
                      rgba(30,38,31,0.06) 23px
                    )
                  `,
                  backgroundSize:
                    "37px 37px, 53px 53px, auto",
                }}
              />

              {/* Old paper edges */}

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,20,17,0.58)_100%)]" />

              {/* Inner border */}

              <div className="absolute inset-4 border border-[#c5a46d]/45 md:inset-6" />

              {/* Corner ornaments */}

              <MapCorner className="left-7 top-7" />
              <MapCorner className="right-7 top-7 rotate-90" />
              <MapCorner className="bottom-7 left-7 -rotate-90" />
              <MapCorner className="bottom-7 right-7 rotate-180" />

              {/* =================================================
                  HEADER
              ================================================== */}

              <div className="absolute left-1/2 top-7 z-40 -translate-x-1/2 text-center md:top-9">
                <p className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#463d2a]">
                  ARCHISHA GUPTA · DEVELOPER
                </p>

                <h1 className="mt-2 whitespace-nowrap font-serif text-3xl tracking-[0.12em] text-[#211f18] md:text-5xl">
                  THE TREASURE MAP
                </h1>

                <div className="mx-auto mt-3 flex items-center justify-center gap-3">
                  <div className="h-px w-16 bg-[#80653b]" />
                  <div className="h-2 w-2 rotate-45 border border-[#80653b]" />
                  <div className="h-px w-16 bg-[#80653b]" />
                </div>

                <p className="mt-2 font-mono text-[6px] uppercase tracking-[0.4em] text-[#514a37]">
                  EXPLORE · DISCOVER · CONNECT
                </p>
              </div>

              {/* =================================================
                  CLOSE
              ================================================== */}

              <button
                onClick={() => setOpen(false)}
                className="absolute right-8 top-8 z-50 border border-[#594a31] bg-[#4b5547]/80 px-5 py-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#e0cfa0] transition-all hover:bg-[#303a31] hover:text-white"
              >
                CLOSE MAP&nbsp;&nbsp;×
              </button>

              {/* =================================================
                  MAP GRID / LATITUDE LINES
              ================================================== */}

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(
                      rgba(44,49,39,0.5) 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      90deg,
                      rgba(44,49,39,0.5) 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize: "90px 90px",
                }}
              />

              {/* =================================================
                  ROUTE
              ================================================== */}

              {/* =================================================
    ROUTE
================================================== */}

<svg
  viewBox="0 0 1200 700"
  preserveAspectRatio="none"
  className="absolute inset-0 h-full w-full"
>
  {/* Route shadow */}

  <path
    d="
      M 190 230

      C 220 315,
        270 440,
        350 500

      C 430 545,
        500 395,
        600 355

      C 690 315,
        760 215,
        835 230

      C 870 275,
        900 390,
        865 485

      C 925 505,
        985 420,
        1055 360
    "
    fill="none"
    stroke="#171b17"
    strokeWidth="8"
    strokeDasharray="8 13"
    opacity="0.22"
  />

  {/* Main dotted navigation route */}

  <motion.path
    d="
      M 190 230

      C 220 315,
        270 440,
        350 500

      C 430 545,
        500 395,
        600 355

      C 690 315,
        760 215,
        835 230

      C 870 275,
        900 390,
        865 485

      C 925 505,
        985 420,
        1055 360
    "
    fill="none"
    stroke="#c4a467"
    strokeWidth="3"
    strokeDasharray="8 13"
    opacity="0.85"
    initial={{
      pathLength: 0,
    }}
    animate={{
      pathLength: 1,
    }}
    transition={{
      duration: 2.5,
      ease: "easeInOut",
    }}
  />

  {/* Small route markers */}

  <circle
    cx="350"
    cy="500"
    r="4"
    fill="#d1ae67"
  />

  <circle
    cx="600"
    cy="355"
    r="4"
    fill="#d1ae67"
  />

  <circle
    cx="835"
    cy="230"
    r="4"
    fill="#d1ae67"
  />

  <circle
    cx="865"
    cy="485"
    r="4"
    fill="#d1ae67"
  />

  <circle
    cx="1055"
    cy="360"
    r="4"
    fill="#d1ae67"
  />
</svg>

              {/* =================================================
                  DECORATIVE SHIPS
              ================================================== */}

              <Ship
                className="left-[38%] top-[38%]"
                rotate="-12"
              />

              <Ship
                className="left-[58%] top-[72%]"
                rotate="15"
              />

              {/* =================================================
                  DESTINATIONS
              ================================================== */}

              {destinations.map((destination, index) => (
                <MapDestination
                  key={destination.id}
                  destination={destination}
                  index={index}
                  hovered={hovered === destination.id}
                  onHover={() => setHovered(destination.id)}
                  onLeave={() => setHovered(null)}
                  onClick={() => navigateTo(destination.id)}
                />
              ))}

              {/* =================================================
                  COMPASS
              ================================================== */}

              <CompassRose />

              {/* =================================================
                  SEA CREATURE DECORATION
              ================================================== */}

              <SeaMonster />

              {/* =================================================
                  MAP LABELS
              ================================================== */}

              <MapText
                className="left-[7%] top-[58%] rotate-[-8deg]"
                text="UNCHARTED WATERS"
              />

              <MapText
                className="left-[38%] top-[23%] rotate-[5deg]"
                text="THE OPEN SEA"
              />

              <MapText
                className="right-[7%] top-[70%] rotate-[-5deg]"
                text="UNKNOWN HORIZON"
              />

              {/* =================================================
                  SCALE
              ================================================== */}

              <div className="absolute bottom-10 right-12 hidden md:block">
                <div className="flex items-center">
                  <div className="h-2 w-32 border-x border-t border-[#514a36]" />
                </div>

                <div className="flex justify-between font-mono text-[6px] text-[#514a36]">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                  <span>200</span>
                </div>

                <p className="mt-1 text-center font-serif text-[8px] tracking-[0.3em] text-[#514a36]">
                  NAUTICAL MILES
                </p>
              </div>

              {/* =================================================
                  FOOTER
              ================================================== */}

              <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 text-center">
                <p className="whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.4em] text-[#403b2c]">
                  CHART YOUR OWN COURSE
                </p>
              </div>

              <div className="absolute bottom-8 left-10 font-mono text-[6px] tracking-[0.3em] text-[#514a36]">
                CHART NO. 001
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ===============================================================
   DESTINATION
================================================================ */

function MapDestination({
  destination,
  index,
  hovered,
  onHover,
  onLeave,
  onClick,
}) {
  return (
    <motion.button
      className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 ${destination.position}`}
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: hovered ? 1.06 : 1,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.45,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative h-[125px] w-[180px] md:h-[155px] md:w-[220px]">

        {/* =====================================================
            ISLAND SHADOW
        ====================================================== */}

        <div className="absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[47%_53%_42%_58%] bg-[#1c241d]/50 blur-md" />

        {/* =====================================================
            ISLAND BODY
        ====================================================== */}

        <svg
          viewBox="0 0 220 150"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d={
              index % 3 === 0
                ? `
                  M 38 83
                  C 26 69 42 48 65 45
                  C 79 22 109 31 122 39
                  C 148 23 177 38 174 60
                  C 198 69 186 93 165 99
                  C 147 116 120 108 103 114
                  C 77 124 57 106 38 83 Z
                `
                : index % 3 === 1
                  ? `
                    M 34 75
                    C 41 51 64 45 83 39
                    C 101 24 130 32 142 48
                    C 173 41 193 61 180 82
                    C 171 106 141 111 117 104
                    C 92 117 65 108 53 94
                    C 40 91 28 85 34 75 Z
                  `
                  : `
                    M 40 92
                    C 27 72 52 49 74 52
                    C 82 30 111 24 130 39
                    C 151 27 182 43 177 65
                    C 199 78 178 101 156 100
                    C 139 119 111 111 94 105
                    C 72 117 48 108 40 92 Z
                  `
            }
            fill="#899073"
            stroke="#403f2d"
            strokeWidth="2"
          />

          {/* Inner land */}

          <ellipse
            cx="110"
            cy="75"
            rx="48"
            ry="25"
            fill="#a09c72"
            opacity=".32"
          />

          {/* Mountains */}

          <path
            d="M 85 70 L 105 38 L 123 70 Z"
            fill="#4e5947"
            stroke="#393f34"
            strokeWidth="1"
          />

          <path
            d="M 101 44 L 105 38 L 110 48"
            fill="#b5aa7d"
            opacity=".65"
          />

          {/* Small mountain */}

          <path
            d="M 118 70 L 132 50 L 145 70 Z"
            fill="#59614c"
          />

          {/* Trees */}

          <circle
            cx="75"
            cy="75"
            r="7"
            fill="#384536"
          />

          <circle
            cx="153"
            cy="78"
            r="6"
            fill="#384536"
          />

          <circle
            cx="67"
            cy="84"
            r="5"
            fill="#44513d"
          />

          {/* Shore lines */}

          <path
            d="M 52 91 C 82 105 145 106 171 88"
            fill="none"
            stroke="#d1bc83"
            strokeWidth="1"
            opacity=".6"
          />
        </svg>

        {/* =====================================================
            BRASS NUMBER
        ====================================================== */}

        <motion.div
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#d1ae67] bg-[#302b20] shadow-[0_3px_10px_rgba(0,0,0,0.6)]"
          animate={{
            boxShadow: hovered
              ? "0 0 28px rgba(210,174,103,0.55)"
              : "0 3px 10px rgba(0,0,0,0.6)",
          }}
        >
          <span className="font-serif text-sm text-[#e3ce9b]">
            {destination.number}
          </span>
        </motion.div>

        {/* =====================================================
            LABEL
        ====================================================== */}

        <div className="absolute left-1/2 top-[103%] -translate-x-1/2 whitespace-nowrap">
          <p className="font-serif text-base font-semibold tracking-[0.12em] text-[#29271e]">
            {destination.title}
          </p>

          <motion.p
            animate={{
              opacity: hovered ? 1 : 0.55,
            }}
            className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-[#514b39]"
          >
            {destination.subtitle}
          </motion.p>
        </div>

        {/* Pulse */}

        <motion.div
          className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c5a46d]"
          animate={{
            scale: hovered ? [1, 1.6, 1] : [1, 1.2, 1],
            opacity: hovered ? [0.8, 0, 0.8] : [0.3, 0, 0.3],
          }}
          transition={{
            duration: hovered ? 1.2 : 2.5,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.button>
  );
}

/* ===============================================================
   COMPASS ROSE
================================================================ */

function CompassRose() {
  return (
    <div className="absolute bottom-[10%] left-1/2 z-20 flex h-40 w-40 -translate-x-1/2 items-center justify-center">
      {/* Outer rings */}

      <div className="absolute inset-0 rounded-full border-2 border-[#5c5036]/80" />

      <div className="absolute inset-3 rounded-full border border-[#9b8150]/70" />

      <div className="absolute inset-7 rounded-full border border-[#5c5036]/60" />

      {/* Main points */}

      <div className="absolute h-[92%] w-[2px] bg-[#514832]" />

      <div className="absolute h-[92%] w-[2px] rotate-90 bg-[#514832]" />

      <div className="absolute h-[82%] w-[1px] rotate-45 bg-[#6d5c3d]" />

      <div className="absolute h-[82%] w-[1px] -rotate-45 bg-[#6d5c3d]" />

      {/* North arrow */}

      <div className="absolute -top-1 left-1/2 -translate-x-1/2">
        <div className="h-0 w-0 border-b-[58px] border-l-[9px] border-r-[9px] border-b-[#2e3028] border-l-transparent border-r-transparent" />

        <div className="absolute left-1/2 top-2 h-[40px] w-px -translate-x-1/2 bg-[#d0b06d]" />
      </div>

      {/* South arrow */}

      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-180">
        <div className="h-0 w-0 border-b-[58px] border-l-[9px] border-r-[9px] border-b-[#59604d] border-l-transparent border-r-transparent" />
      </div>

      {/* Center */}

      <div className="absolute h-7 w-7 rotate-45 border-2 border-[#c5a46d] bg-[#535a48]" />

      <div className="relative z-10 h-3 w-3 rounded-full border border-[#e1ce99] bg-[#292a22]" />

      <span className="absolute -top-7 font-serif text-sm text-[#3b382c]">
        N
      </span>

      <span className="absolute -bottom-7 font-serif text-sm text-[#3b382c]">
        S
      </span>

      <span className="absolute -left-7 font-serif text-sm text-[#3b382c]">
        W
      </span>

      <span className="absolute -right-7 font-serif text-sm text-[#3b382c]">
        E
      </span>
    </div>
  );
}

/* ===============================================================
   DECORATIVE SHIP
================================================================ */

function Ship({ className, rotate }) {
  return (
    <div
      className={`absolute z-10 ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg
        width="70"
        height="55"
        viewBox="0 0 70 55"
      >
        <path
          d="M 8 37 L 58 37 L 48 47 L 20 47 Z"
          fill="#333a30"
          stroke="#4f4733"
        />

        <line
          x1="34"
          y1="37"
          x2="34"
          y2="8"
          stroke="#4f4733"
          strokeWidth="2"
        />

        <path
          d="M 34 10 L 34 32 L 49 27 Z"
          fill="#8c866b"
          opacity=".7"
        />

        <path
          d="M 32 13 L 20 29 L 32 27 Z"
          fill="#6f705c"
          opacity=".8"
        />
      </svg>
    </div>
  );
}

/* ===============================================================
   SEA MONSTER
================================================================ */

function SeaMonster() {
  return (
    <div className="absolute bottom-[18%] left-[5%] opacity-35">
      <svg
        width="150"
        height="110"
        viewBox="0 0 150 110"
      >
        <path
          d="
            M 5 90
            C 30 60 38 80 50 55
            C 62 30 75 65 83 45
            C 91 25 105 50 108 30
          "
          fill="none"
          stroke="#292e27"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <circle
          cx="109"
          cy="28"
          r="4"
          fill="#39372a"
        />

        <path
          d="M 10 95 C 45 75 70 85 105 72"
          fill="none"
          stroke="#403e2d"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* ===============================================================
   MAP CORNER
================================================================ */

function MapCorner({ className }) {
  return (
    <div
      className={`absolute z-50 h-10 w-10 border-l border-t border-[#80653b] ${className}`}
    />
  );
}

/* ===============================================================
   MAP TEXT
================================================================ */

function MapText({ className, text }) {
  return (
    <span
      className={`absolute z-10 font-serif text-[9px] tracking-[0.35em] text-[#4d4936]/70 md:text-xs ${className}`}
    >
      {text}
    </span>
  );
}

export default TreasureMapNav;