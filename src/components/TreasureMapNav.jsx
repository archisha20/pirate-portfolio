import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function MapCorner({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute h-10 w-10 border-[#b89660]/80 ${className}`}
    />
  );
}

function MapMarker({
  number,
  title,
  subtitle,
  position,
  href,
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      className="group absolute z-30 -translate-x-1/2 -translate-y-1/2 text-center"
      style={position}
    >
      <div className="relative mx-auto h-[58px] w-[108px]">
        {/* Island shape */}
        <svg
          viewBox="0 0 150 75"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d="
              M 10 39
              C 17 22, 35 18, 49 23
              C 63 8, 81 17, 91 25
              C 108 15, 129 24, 140 40
              C 133 56, 111 62, 92 55
              C 76 67, 56 61, 43 55
              C 28 61, 16 53, 10 39 Z
            "
            fill="#777d61"
            stroke="#b5a878"
            strokeWidth="1.5"
          />

          <path
            d="
              M 25 39
              C 35 28, 48 30, 58 36
              C 73 25, 89 30, 101 38
              C 113 31, 124 37, 130 43
              C 116 51, 99 48, 87 51
              C 70 57, 54 47, 42 51
              C 34 49, 28 46, 25 39 Z
            "
            fill="#a1a486"
            opacity="0.65"
          />

          <circle cx="35" cy="40" r="6" fill="#34463d" />
          <circle cx="114" cy="40" r="6" fill="#34463d" />
          <circle cx="52" cy="29" r="4" fill="#34463d" />
          <circle cx="96" cy="30" r="4" fill="#34463d" />
        </svg>

        {/* Number */}
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6b66c] bg-[#101a18] font-mono text-[10px] text-[#e5ce96] shadow-[0_0_14px_rgba(212,175,98,0.3)]">
          {number}
        </div>
      </div>

      <div className="mt-1 whitespace-nowrap">
        <h3 className="font-serif text-[15px] font-semibold uppercase tracking-wide text-[#d6c28e] transition-colors duration-300 group-hover:text-[#f0dca6]">
          {title}
        </h3>

        <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.22em] text-[#8e896c]">
          {subtitle}
        </p>
      </div>
    </motion.a>
  );
}

function Ship({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 70"
      className={`h-auto w-16 ${className}`}
      fill="none"
    >
      <path
        d="M 12 45 L 82 45 L 68 57 L 27 57 Z"
        fill="#172522"
        stroke="#b89660"
        strokeWidth="1.5"
      />

      <path
        d="M 19 45 L 76 45 L 82 49 L 12 49 Z"
        fill="#b89660"
        opacity="0.65"
      />

      <path
        d="M 48 45 L 48 12"
        stroke="#c6a968"
        strokeWidth="1.5"
      />

      <path
        d="M 50 16 L 50 40 L 73 40 L 50 16 Z"
        fill="#b89660"
        opacity="0.7"
      />

      <path
        d="M 46 21 L 46 40 L 30 40 L 46 21 Z"
        fill="#756541"
        opacity="0.8"
      />

      <path
        d="M 48 12 L 57 16 L 48 18"
        fill="#d5bd80"
      />

      <path
        d="M 8 60 C 28 55, 52 65, 92 58"
        stroke="#80653b"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

function TreasureMapNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Open map button */}
      
      <button
  onClick={() => setOpen(true)}
  aria-label="Open treasure map"
  className="
    group absolute right-8 top-8 z-50
    w-14 h-14
    rounded-full
    flex items-center justify-center
    bg-[#050b0d]/40
    transition-all duration-500
    hover:scale-110
  "
>
  {/* Outer ring */}
  <span
    className="
      absolute inset-0
      rounded-full
      border border-[#d4af62]/80
    "
  />

  {/* Middle ring */}
  <span
    className="
      absolute inset-[7px]
      rounded-full
      border border-[#d4af62]/60
    "
  />

  {/* Inner ring */}
  <span
    className="
      absolute inset-[13px]
      rounded-full
      border border-[#d4af62]/50
    "
  />

  {/* Vertical compass line */}
  <span
    className="
      absolute w-[1px] h-8
      bg-[#d4af62]/80
    "
  />

  {/* Horizontal compass line */}
  <span
    className="
      absolute w-8 h-[1px]
      bg-[#d4af62]/80
    "
  />

  {/* Center */}
  <span
    className="
      absolute w-3 h-3
      rounded-full
      border border-[#d4af62]
      bg-[#050b0d]
    "
  />

  {/* Center dot */}
  <span
    className="
      absolute w-1.5 h-1.5
      rounded-full
      bg-[#d4af62]
    "
  />
</button>
      

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              overflow-y-auto
              bg-[#020706]/95
              px-3
              py-6
              sm:px-6
              sm:py-10
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                mx-auto
                min-h-[650px]
                max-w-[1240px]
                overflow-hidden
                border
                border-[#9b7b4d]/80
                bg-[#07100f]
                shadow-[0_0_80px_rgba(0,0,0,0.7)]
              "
            >
              {/* Background image */}
              <img
                src="/images/port6.png"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-0
                  h-full
                  w-full
                  object-cover
                  opacity-[0.38]
                  grayscale
                  brightness-[0.75]
                  contrast-[1.08]
                "
              />

              {/* Dark overlay — lighter than before */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[1]
                  bg-[#06100e]/35
                "
              />

              {/* Green atmospheric tint */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[2]
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(2,8,7,0.32)_100%)]
                "
              />

              {/* Map grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[3]
                  opacity-30
                  [background-image:linear-gradient(rgba(184,150,96,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(184,150,96,0.14)_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />

              {/* Outer map frame */}
              <div className="pointer-events-none absolute inset-4 z-10 border border-[#9b7b4d]/80" />

              <div className="pointer-events-none absolute inset-7 z-10 border border-[#80653b]/50" />

              <MapCorner className="left-7 top-7 z-20 border-l border-t" />
              <MapCorner className="right-7 top-7 z-20 border-r border-t" />
              <MapCorner className="bottom-7 left-7 z-20 border-b border-l" />
              <MapCorner className="bottom-7 right-7 z-20 border-b border-r" />

              {/* Header */}
              <div className="relative z-20 px-8 pt-12 text-center sm:pt-14">
                <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#a8844d]">
                  ARCHISHA GUPTA · DEVELOPER
                </p>

                <h1 className="mt-3 font-serif text-4xl uppercase tracking-[0.08em] text-[#e2cc97] sm:text-4xl md:text-6xl">
                  The Treasure Map
                </h1>

                <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                  <div className="h-px w-14 bg-[#80653b]" />
                  <div className="h-2 w-2 rotate-45 border border-[#b89660]" />
                  <div className="h-px w-14 bg-[#80653b]" />
                </div>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-[#9a906c]">
                  Explore · Discover · Connect
                </p>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-7
                  top-7
                  z-40
                  border
                  border-[#80653b]
                  bg-[#263129]/80
                  px-4
                  py-3
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-[#d8c28b]
                  transition-all
                  duration-300
                  hover:border-[#d4b66f]
                  hover:bg-[#3a4030]
                "
              >
                Close Map ×
              </button>


              {/* Route */}
              <svg
                viewBox="0 0 1200 600"
                preserveAspectRatio="none"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  z-20
                  h-full
                  w-full
                "
              >
                <defs>
                  <filter
                    id="treasureRouteGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur
                      stdDeviation="3"
                      result="routeBlur"
                    />

                    <feMerge>
                      <feMergeNode in="routeBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Main route:
                    Port → Treasures → About → Arsenal → Journey → Contact
                */}
                {/* DARK ROUTE SHADOW */}
<path
  d="
    M 145 270
    C 205 390, 300 500, 455 465
    C 570 440, 610 335, 700 265
    C 790 210, 875 245, 945 355
    C 990 425, 1060 515, 1135 455
  "
  fill="none"
  stroke="#1b2b1b"
  strokeWidth="8"
  strokeLinecap="round"
  strokeLinejoin="round"
  opacity="0.75"
/>

{/* GOLDEN DASHED ROUTE */}
<path
  d="
    M 145 270
    C 205 390, 300 500, 455 465
    C 570 440, 610 335, 700 265
    C 790 210, 875 245, 945 355
    C 990 425, 1060 515, 1135 455
  "
  fill="none"
  stroke="#d4af62"
  strokeWidth="2.5"
  strokeDasharray="10 9"
  strokeLinecap="round"
  strokeLinejoin="round"
  opacity="0.95"
/>

                {/* Route endpoint dots */}
                <circle
                  cx="145"
                  cy="270"
                  r="5"
                  fill="#d4af62"
                />

                <circle
                  cx="365"
                  cy="465"
                  r="5"
                  fill="#d4af62"
                />

                <circle
                  cx="610"
                  cy="335"
                  r="5"
                  fill="#d4af62"
                />

                <circle
                  cx="850"
                  cy="245"
                  r="5"
                  fill="#d4af62"
                />

                <circle
                  cx="965"
                  cy="430"
                  r="5"
                  fill="#d4af62"
                />

                <circle
                  cx="1135"
                  cy="455"
                  r="5"
                  fill="#d4af62"
                />
              </svg>

              {/* Map destinations */}
              <div className="absolute inset-0 z-30">
                <MapMarker
                  number="01"
                  title="The Port"
                  subtitle="Begin the Voyage"
                  href="#port"
                  position={{
                    left: "12%",
                    top: "39%",
                  }}
                />

                <MapMarker
                  number="02"
                  title="Treasures"
                  subtitle="Things I've Built"
                  href="#treasures"
                  position={{
                    left: "30%",
                    top: "68%",
                  }}
                />

                <MapMarker
                  number="05"
                  title="About Me"
                  subtitle="The Captain's Log"
                  href="#about"
                  position={{
                    left: "51%",
                    top: "49%",
                  }}
                />

                <MapMarker
                  number="03"
                  title="My Arsenal"
                  subtitle="Tools & Knowledge"
                  href="#skills"
                  position={{
                    left: "71%",
                    top: "40%",
                  }}
                />

                <MapMarker
                  number="04"
                  title="The Journey"
                  subtitle="Course of the Voyage"
                  href="#journey"
                  position={{
                    left: "71%",
                    top: "68%",
                  }}
                />

                <MapMarker
                  number="06"
                  title="Let's Connect"
                  subtitle="Send a Message"
                  href="#contact"
                  position={{
                    left: "89%",
                    top: "54%",
                  }}
                />
              </div>

              {/* Decorative ships 
              <Ship className="absolute left-[41%] top-[37%] z-30 opacity-80" />

              <Ship className="absolute left-[60%] top-[69%] z-30 scale-75 opacity-70" />*/}

              {/* Large lower compass */}
              <div className="absolute bottom-16 left-1/2 z-20 flex h-30 w-30 -translate-x-1/2 items-center justify-center rounded-full border border-[#a8844d]/80">
                <div className="absolute inset-2 rounded-full border border-[#80653b]" />
                <div className="absolute inset-5 rounded-full border border-[#80653b]" />

                <div className="absolute h-22 w-px bg-[#80653b]" />
                <div className="absolute h-px w-22 bg-[#80653b]" />

                <div className="absolute h-22 w-px rotate-45 bg-[#80653b]" />
                <div className="absolute h-22 w-px -rotate-45 bg-[#80653b]" />

                <div className="relative z-10 h-4 w-4 rounded-full border border-[#e0c98e] bg-[#07100f]" />

                <div className="absolute top-2 font-serif text-[9px] text-[#c6a968]">
                  N
                </div>
                <div className="absolute bottom-2 font-serif text-[9px] text-[#c6a968]">
                  S
                </div>
                <div className="absolute left-2 font-serif text-[9px] text-[#c6a968]">
                  W
                </div>
                <div className="absolute right-2 font-serif text-[9px] text-[#c6a968]">
                  E
                </div>
              </div>

              {/* Footer details */}
              <div className="absolute bottom-8 left-8 z-30 font-mono text-[12px] uppercase tracking-[0.35em] text-[#8f815d]">
                Chart No. 001 · Navigation Active
              </div>

              <div className="absolute bottom-8 right-8 z-30 font-mono text-[12px] uppercase tracking-[0.35em] text-[#8f815d]">
                Keep Sailing
              </div>

              <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-[#80653b]">
                Chart Your Own Course
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TreasureMapNav;