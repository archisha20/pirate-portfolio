import { motion } from "motion/react";
import TreasureMapNav from "./components/TreasureMapNav";
import Cursor from "./components/Cursor";
import KrakenEasterEgg from "./components/KrakenEasterEgg";
import SpyglassProjectCard from "./components/SpyglassProjectCard";
import ParallaxOcean from "./components/ParallaxOcean";
import DayNightCycle from "./components/DayNightCycle";
import HeroTypingLog from "./components/HeroTypingLog";

function SkillCard({ number, name, description, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden border border-[#b89660]/15 bg-[#0e2228] p-6 transition-colors duration-500 hover:border-[#b89660]/40"
    >
      {/* Corner mark */}

      <div className="absolute right-4 top-4 font-mono text-[8px] text-[#b89660]/30">
        {number}
      </div>

      {/* Skill name */}

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center border border-[#b89660]/25 bg-[#102a30] font-serif text-sm text-[#bda878] transition-colors duration-500 group-hover:border-[#b89660]/60">
          {number}
        </div>

        <h4 className="font-serif text-xl text-[#d8c99f]">
          {name}
        </h4>

      </div>

      {/* Description */}

      <p className="mt-5 min-h-[60px] text-xs leading-5 text-[#718488]">
        {description}
      </p>

      {/* Skill level */}

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.3em] text-[#617579]">
            Proficiency
          </span>

          <span className="font-mono text-[9px] text-[#bda878]">
            {level}%
          </span>

        </div>

        <div className="h-px w-full bg-[#263b3f]">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="h-full bg-[#b89660]"
          />

        </div>

      </div>

      {/* Hover line */}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d4c18f] transition-all duration-500 group-hover:w-full" />

    </motion.div>
  );
}

function TreasureCard({
  number,
  title,
  label,
  description,
  tags,
  type,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden border border-[#80653b]/60 bg-[#0b1011] transition-all duration-500 hover:border-[#b89660]"
    >

      {/* =====================================================
          ARTIFACT DISPLAY
      ===================================================== */}

      <div className="relative h-[200px] border-b border-[#80653b]/30 bg-[#080d0e]">

        {/* inner border */}
        <div className="pointer-events-none absolute inset-3 border border-[#80653b]/25" />


        {/* TREASURE NUMBER */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <div className="border-x border-b border-[#80653b] bg-[#0b1011] px-5 py-1.5">
            <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-[#b89660]">
              {number}
            </span>
          </div>
        </div>


        {/* =================================================
            KNOWLEDGE CORE
        ================================================= */}

        {type === "core" && (
          <div className="absolute inset-0 flex items-center justify-center">

            {/* outer circle */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#80653b]">

              {/* inner circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#80653b]/40">

                {/* core */}
                <div className="relative flex h-7 w-7 items-center justify-center border border-[#b89660]">

                  <div className="h-2 w-2 rounded-full bg-[#d8c99f] shadow-[0_0_12px_rgba(216,201,159,0.6)]" />

                </div>

              </div>

              {/* orbit marks */}
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 border border-[#80653b] bg-[#080d0e]" />
              <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 border border-[#80653b] bg-[#080d0e]" />

            </div>

          </div>
        )}


        {/* =================================================
            SHIP SCHEMATIC
        ================================================= */}

        {type === "ship" && (
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="relative h-24 w-32 border border-[#80653b]">

              {/* inner frame */}
              <div className="absolute inset-5 border border-[#80653b]/30" />

              {/* horizontal technical lines */}
              <div className="absolute left-8 right-8 top-8 h-px bg-[#80653b]/60" />
              <div className="absolute left-8 right-14 top-12 h-px bg-[#80653b]/50" />
              <div className="absolute left-8 right-8 top-16 h-px bg-[#80653b]/40" />

              {/* ship diamond */}
              <div className="absolute bottom-3 right-7 h-4 w-4 rotate-45 border border-[#b89660]" />

              {/* small technical marks */}
              <div className="absolute left-3 top-3 h-2 w-2 border border-[#80653b]" />
              <div className="absolute bottom-3 left-3 h-px w-5 bg-[#80653b]" />

            </div>

          </div>
        )}


        {/* =================================================
            LOGIC ENGINE
        ================================================= */}

        {type === "logic" && (
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="grid grid-cols-5 gap-2">

              {[...Array(25)].map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 border border-[#80653b]/60 ${
                    [7, 8, 9, 12, 14, 17, 19, 23].includes(index)
                      ? "bg-[#9b7a43]/70"
                      : "bg-transparent"
                  }`}
                />
              ))}

            </div>

          </div>
        )}


        {/* LABEL */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <span className="font-mono text-[6px] uppercase tracking-[0.45em] text-[#a8844d]">
            {label}
          </span>
        </div>

      </div>


      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <div className="relative min-h-[270px] p-5">

        {/* subtle hover light */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#b89660]/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">

          <h3 className="font-serif text-xl text-[#d8c99f]">
            {title}
          </h3>

          <p className="mt-4 text-[10px] leading-5 text-[#718488]">
            {description}
          </p>


          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#80653b]/50 px-2.5 py-1 font-mono text-[6px] uppercase tracking-[0.2em] text-[#8c7650]"
              >
                {tag}
              </span>
            ))}
          </div>


          {/* BUTTON */}
          <button
            className="mt-6 border border-[#80653b] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#b89660] transition-all duration-300 hover:bg-[#80653b]/10 hover:text-[#d8c99f]"
          >
            Examine Artifact →
          </button>

        </div>

      </div>


      {/* bottom corner details */}
      <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[#80653b]" />
      <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[#80653b]" />

    </motion.div>
  );
}
  
                              

function JourneyIsland({ className, type }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <svg
        width="230"
        height="150"
        viewBox="0 0 230 150"
        className="overflow-visible"
      >

        {/* Island body */}

        <path
          d="
            M25 86
            C15 68 28 49 50 47
            C58 29 82 27 97 40
            C113 22 142 28 149 45
            C174 35 204 48 199 69
            C219 82 208 105 184 105
            C168 125 136 123 116 111
            C91 128 57 119 55 101
            C38 104 27 98 25 86Z
          "
          fill="#8e896f"
          stroke="#39433e"
          strokeWidth="2"
        />

        {/* Terrain contour */}

        <path
          d="M48 75 C69 57 89 59 105 74 C120 88 140 88 164 74"
          fill="none"
          stroke="#5d6259"
          strokeWidth="2"
        />

        <path
          d="M62 89 C79 75 94 76 109 88 C124 100 140 99 156 88"
          fill="none"
          stroke="#5d6259"
          strokeWidth="1.5"
        />

        {/* Mountain */}

        {type === "mountain" && (
          <>
            <path
              d="M79 72 L101 36 L124 72Z"
              fill="#5d6259"
              stroke="#3c4540"
              strokeWidth="2"
            />

            <path
              d="M94 48 L101 36 L108 48"
              fill="none"
              stroke="#c5bb99"
              strokeWidth="2"
            />

            <path
              d="M60 78 L67 53 L74 78"
              fill="#465149"
            />

            <path
              d="M139 80 L146 57 L153 80"
              fill="#465149"
            />
          </>
        )}

        {/* Palm trees */}

        {type === "palms" && (
          <>
            <path
              d="M84 83 C82 67 84 53 87 43"
              fill="none"
              stroke="#465149"
              strokeWidth="3"
            />

            <path
              d="M87 45 C77 39 73 32 73 28"
              fill="none"
              stroke="#465149"
              strokeWidth="2"
            />

            <path
              d="M87 45 C95 38 101 36 107 37"
              fill="none"
              stroke="#465149"
              strokeWidth="2"
            />

            <path
              d="M87 44 C87 34 90 28 95 24"
              fill="none"
              stroke="#465149"
              strokeWidth="2"
            />

            <path
              d="M130 87 C129 71 131 58 134 48"
              fill="none"
              stroke="#465149"
              strokeWidth="3"
            />

            <path
              d="M134 49 C125 43 121 38 120 34"
              fill="none"
              stroke="#465149"
              strokeWidth="2"
            />

            <path
              d="M134 49 C143 43 149 42 155 43"
              fill="none"
              stroke="#465149"
              strokeWidth="2"
            />

          </>
        )}

        {/* Lighthouse */}

        {type === "lighthouse" && (
          <>
            <path
              d="M111 88 L116 45 H132 L137 88Z"
              fill="#686657"
              stroke="#39433e"
              strokeWidth="2"
            />

            <rect
              x="113"
              y="39"
              width="22"
              height="9"
              fill="#55574e"
              stroke="#39433e"
              strokeWidth="2"
            />

            <path
              d="M112 39 L124 28 L136 39Z"
              fill="#5d5141"
              stroke="#39433e"
              strokeWidth="2"
            />

            <path
              d="M124 28 V18"
              stroke="#39433e"
              strokeWidth="2"
            />

            <path
              d="M124 19 H139 L133 23 L139 27 H124"
              fill="#70443a"
            />

            <rect
              x="121"
              y="54"
              width="8"
              height="9"
              fill="#b8a978"
            />
          </>
        )}

        {/* Treasure-style marker */}

        <path
          d="M150 83 L167 100 M167 83 L150 100"
          stroke="#75463d"
          strokeWidth="3"
        />

      </svg>
    </div>
  );
}

function JourneyMarker({
  number,
  year,
  title,
  text,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >

      {/* marker */}
      <div className="group relative">

        {/* glowing point */}
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89660] bg-[#0a1113] shadow-[0_0_15px_rgba(184,150,96,0.25)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(184,150,96,0.45)]" />

        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8c99f]" />


        {/* info card */}
        <div className="absolute left-1/2 top-7 w-48 -translate-x-1/2 border border-[#80653b]/50 bg-[#080d0e]/95 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100">

          <div className="flex items-center justify-between">

            <span className="font-mono text-[7px] text-[#80653b]">
              {number}
            </span>

            <span className="font-mono text-[7px] text-[#687b7f]">
              {year}
            </span>

          </div>

          <h4 className="mt-3 font-serif text-lg text-[#d0c196]">
            {title}
          </h4>

          <p className="mt-2 text-[8px] leading-4 text-[#718488]">
            {text}
          </p>

        </div>

      </div>

    </motion.div>
  );
}

function ArsenalItem({ name, level, description }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group border border-[#80653b]/25 bg-[#0b1011] p-4 transition-colors duration-300 hover:border-[#80653b]/70"
    >

      <div className="flex items-center justify-between">

        <div>
          <h4 className="font-serif text-base text-[#c9bb91] transition-colors duration-300 group-hover:text-[#e0cfa2]">
            {name}
          </h4>

          <p className="mt-1 text-[8px] text-[#586b6f]">
            {description}
          </p>
        </div>

        <span className="font-mono text-[8px] text-[#80653b]">
          {level}%
        </span>

      </div>


      {/* proficiency line */}
      <div className="mt-4 h-[2px] w-full bg-[#1d292b]">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="h-full bg-[#a8844d]"
        />

      </div>

    </motion.div>
  );
}

function App() {
  const projects = [
    {
      number: "01",
      title: "BIS RAG Assistant",
      description:
        "An AI-powered assistant that helps users explore BIS standards using retrieval augmented generation.",
      tags: ["Python", "LangChain", "RAG"],
      position: "left-[12%] top-[22%]",
    },
    {
      number: "02",
      title: "Portfolio Website",
      description:
        "An interactive portfolio designed as a cinematic journey through a pirate world.",
      tags: ["React", "Tailwind", "Motion"],
      position: "left-[46%] top-[48%]",
    },
    {
      number: "03",
      title: "DSA Problems",
      description:
        "A collection of algorithms and problem-solving challenges explored throughout the journey.",
      tags: ["Java", "DSA", "Algorithms"],
      position: "right-[8%] top-[18%]",
    },
  ];

  const skills = [
    ["Java", "85%"],
    ["Python", "80%"],
    ["JavaScript", "82%"],
    ["React", "78%"],
    ["SQL", "75%"],
    ["DSA & Algorithms", "80%"],
    ["Git & GitHub", "85%"],
    ["Tailwind CSS", "75%"],
    ["Motion", "65%"],
  ];

  const journey = [
    [
      "2021",
      "The Call",
      "Started my journey with curiosity and a love for code.",
    ],
    [
      "2022",
      "Learning Seas",
      "Explored data structures, algorithms and web development.",
    ],
    [
      "2023",
      "Building Ship",
      "Built projects, solved real problems and kept learning.",
    ],
    [
      "2024",
      "New Horizons",
      "Ventured into AI, RAG and real-world applications.",
    ],
    [
      "2025+",
      "Beyond Maps",
      "Continuing the journey to build meaningful solutions.",
    ],
  ];

  return (
    <>
    <Cursor/>
      <TreasureMapNav />
      <KrakenEasterEgg />
      <ParallaxOcean />
       <DayNightCycle />

      <main className="min-h-screen overflow-hidden bg-[#02070b] text-[#e8d3a5]">

       
{/* =========================================================
    PORT — THE HERO / OPENING VOYAGE
========================================================= */}

{/* =========================================================
    HERO — THE PORT
========================================================= */}
<section
  id="port"
  className="relative min-h-screen overflow-hidden bg-[#02080a] text-[#e8d3a5]"
>
  {/* =====================================================
      BACKGROUND GRID
  ===================================================== */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.16]"
    style={{
      backgroundImage: `
        linear-gradient(
          rgba(184,150,96,0.12) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(184,150,96,0.12) 1px,
          transparent 1px
        )
      `,
      backgroundSize: "54px 54px",
    }}
  />

  {/* =====================================================
      SOFT ATMOSPHERIC GLOW
  ===================================================== */}
  <div className="pointer-events-none absolute left-1/2 top-[42%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#315047]/10 blur-[120px]" />

  {/* =====================================================
      CORNER BRACKETS
  ===================================================== */}
  <div className="pointer-events-none absolute left-8 top-50 h-12 w-12 border-l border-t border-[#a8844d]/80" />
  <div className="pointer-events-none absolute right-8 top-50 h-12 w-12 border-r border-t border-[#a8844d]/80" />
  <div className="pointer-events-none absolute bottom-50 left-8 h-12 w-12 border-b border-l border-[#a8844d]/80" />
  <div className="pointer-events-none absolute bottom-50 right-8 h-12 w-12 border-b border-r border-[#a8844d]/80" />
  

  {/* =====================================================
      TOP COMPASS
  ===================================================== */}
  

  {/* =====================================================
      HERO CONTENT
  ===================================================== */}
  <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-6 pt-28 md:px-10">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-12 bg-[#80653b]" />

        <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#a8844d]">
          THE PORT · 001
        </span>

        <div className="h-px w-12 bg-[#80653b]" />
      </div>

      <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.42em] text-[#899698]">
        A NEW VOYAGE BEGINS
      </p>
    </motion.div>

    {/* ===================================================
        NAME
    =================================================== */}
    {/* =========================================================
    CINEMATIC GOLDEN COMPASS / CIRCLE BEHIND NAME
========================================================= */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    opacity: {
      delay: 0.8,
      duration: 1,
    },
    y: {
      delay: 0.8,
      duration: 1,
    },
  }}
  className="relative mt-5 text-center"
>
  {/* OUTER GOLDEN GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-0
      h-[300px]
      w-[300px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#c99a3d]/[0.07]
      blur-3xl
    "
  />

  {/* OUTER RING */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-0
      h-[233px]
      w-[233px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#b89660]/35
    "
  >
    {/* small highlight */}
    <div
      className="
        absolute
        left-1/2
        top-[-3px]
        h-[7px]
        w-[7px]
        -translate-x-1/2
        rounded-full
        bg-[#e6c56e]
        shadow-[0_0_14px_4px_rgba(230,197,110,0.55)]
      "
    />
  </motion.div>

  {/* SECOND RING */}
  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-0
      h-[230px]
      w-[230px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#80653b]/50
    "
  >
    <div
      className="
        absolute
        right-[18%]
        top-[-2px]
        h-[4px]
        w-[4px]
        rounded-full
        bg-[#d8b45f]
        shadow-[0_0_10px_3px_rgba(216,180,95,0.5)]
      "
    />
  </motion.div>

  {/* INNER RING */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-0
      h-[195px]
      w-[195px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-[#b89660]/25
      shadow-[0_0_30px_rgba(184,150,96,0.12)]
    "
  />

  {/* COMPASS CROSSHAIR */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-[1]
      h-[230px]
      w-[1px]
      -translate-y-1/2
      bg-gradient-to-b
      from-transparent
      via-[#b89660]/25
      to-transparent
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[42%]
      z-[1]
      h-[1px]
      w-[230px]
      -translate-x-1/2
      bg-gradient-to-r
      from-transparent
      via-[#b89660]/25
      to-transparent
    "
  />

  {/* NAME */}
  <h1
    className="
      relative
      z-10
      font-serif
      text-[clamp(3rem,5.5vw,5.7rem)]
      leading-[0.88]
      tracking-[0.04em]
      text-[#ead9ae]
      drop-shadow-[0_0_18px_rgba(216,180,95,0.12)]
    "
  >
    ARCHISHA
  </h1>

  <h1
    className="
      relative
      z-10
      mt-2
      font-serif
      text-[clamp(3rem,5.5vw,5.7rem)]
      leading-[0.88]
      tracking-[0.04em]
      text-[#c99b4d]
      drop-shadow-[0_0_20px_rgba(201,155,77,0.15)]
    "
  >
    GUPTA
  </h1>

  {/* SMALL GOLDEN SPARKS */}
  <div className="pointer-events-none absolute left-[18%] top-[35%] z-[2] h-1 w-1 rounded-full bg-[#e2bd67] shadow-[0_0_10px_3px_rgba(226,189,103,0.5)]" />

  <div className="pointer-events-none absolute right-[18%] top-[55%] z-[2] h-1 w-1 rounded-full bg-[#e2bd67] shadow-[0_0_10px_3px_rgba(226,189,103,0.5)]" />

  <div className="pointer-events-none absolute left-[30%] top-[8%] z-[2] h-[3px] w-[3px] rounded-full bg-[#e2bd67] shadow-[0_0_8px_2px_rgba(226,189,103,0.45)]" />

  <div className="pointer-events-none absolute right-[30%] bottom-[8%] z-[2] h-[3px] w-[3px] rounded-full bg-[#e2bd67] shadow-[0_0_8px_2px_rgba(226,189,103,0.45)]" />
</motion.div>
    {/* ===================================================
        DIVIDER
    =================================================== */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{
        delay: 0.75,
        duration: 0.8,
      }}
      className="mx-auto mt-8 flex items-center gap-4"
    >
      <div className="h-px w-16 bg-[#a8844d]" />

      <div className="flex h-5 w-5 rotate-45 items-center justify-center border border-[#b89660]">
        <div className="h-1.5 w-1.5 bg-[#b89660]" />
      </div>

      <div className="h-px w-16 bg-[#a8844d]" />
    </motion.div>

    {/* ===================================================
        ROLE
    =================================================== */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.95,
        duration: 0.8,
      }}
      className="mt-7 text-center font-mono text-[14px] uppercase tracking-[0.4em] text-[#c0c6c4]"
    >
      DEVELOPER · BUILDER · PROBLEM SOLVER
    </motion.p>

    
    {/* ===================================================
    LOG ENTRY / TYPING
=================================================== */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1.1,
    duration: 0.8,
  }}
  className="mt-8 text-center"
>
  <HeroTypingLog />
</motion.div>

    {/* ===================================================
        CTA
        ALWAYS ABOVE THE OCEAN
    =================================================== */}
    <motion.a
      href="#treasures"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.35,
        duration: 0.8,
      }}
      whileHover={{
        y: -3,
        borderColor: "#d8c99f",
      }}
      className="
        relative
        z-30
        mx-auto
        mt-7
        inline-flex
        w-fit
        items-center
        justify-center
        gap-3
        border
        border-[#a8844d]
        bg-[#03090a]/90
        px-8
        py-4
        font-mono
        text-[12px]
        uppercase
        tracking-[0.25em]
        text-[#d2bd86]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:bg-[#0b1518]
        hover:text-[#f0dbab]
      "
    >
      <span>BEGIN THE VOYAGE</span>
      <span>→</span>
    </motion.a>

    {/* ===================================================
        OCEAN / SHIP AREA

        IMPORTANT:
        The ship and waves live in the SAME container.
        This prevents the ship from floating.
    =================================================== */}
    <div className="relative mt-auto h-[250px] w-full">

      {/* =================================================
          SHIP GLOW
      ================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[68px]
          left-1/2
          h-20
          w-[min(500px,70vw)]
          -translate-x-1/2
          rounded-full
          bg-[#b89660]/10
          blur-3xl
        "
      />

      {/* =================================================
          SHIP

          Bottom of hull sits directly on the waves.
      ================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
          y: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -4, 0, 3, 0],
        }}
        transition={{
          opacity: {
            delay: 1.1,
            duration: 1,
          },
          x: {
            delay: 1.1,
            duration: 1,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-[67px]
          left-1/2
          z-20
          w-[min(330px,34vw)]
          -translate-x-1/2
        "
      >
        <svg
          viewBox="0 0 420 190"
          className="h-auto w-full"
          fill="none"
        >

          {/* HULL */}
          <path
            d="
              M55 120
              L370 120
              L330 153
              L95 153
              L55 120
              Z
            "
            fill="#071013"
            stroke="#b89660"
            strokeWidth="2"
          />

          {/* UPPER HULL */}
          <path
            d="
              M72 111
              L340 111
              L370 120
              L55 120
              Z
            "
            fill="#091519"
            stroke="#80653b"
            strokeWidth="1.5"
          />

          {/* DECK */}
          <path
            d="M90 104 L315 104"
            stroke="#b89660"
            strokeWidth="2"
          />

          {/* MAIN MAST */}
          <path
            d="M190 104 L190 22"
            stroke="#b89660"
            strokeWidth="2"
          />

          <circle
            cx="190"
            cy="22"
            r="3"
            fill="#d8c99f"
          />

          {/* MAIN SAIL */}
          <path
            d="
              M194 28
              L194 96
              L285 96
              L194 28
              Z
            "
            fill="#071013"
            stroke="#a8844d"
            strokeWidth="1.5"
          />

          {/* REAR SAIL */}
          <path
            d="
              M185 42
              L185 96
              L125 96
              L185 42
              Z
            "
            fill="#071013"
            stroke="#80653b"
            strokeWidth="1.5"
          />

          {/* CABIN */}
          <path
            d="
              M270 76
              L320 76
              L320 104
              L270 104
              Z
            "
            fill="#081215"
            stroke="#a8844d"
            strokeWidth="1.5"
          />

          {/* WINDOWS */}
          <rect
            x="280"
            y="83"
            width="10"
            height="9"
            stroke="#c5a46d"
            strokeWidth="1"
          />

          <rect
            x="298"
            y="83"
            width="10"
            height="9"
            stroke="#c5a46d"
            strokeWidth="1"
          />

          {/* BOW */}
          <path
            d="
              M370 120
              L392 110
              L370 120
              L350 130
            "
            stroke="#b89660"
            strokeWidth="2"
          />

          {/* STERN */}
          <path
            d="
              M55 120
              L42 113
              L55 127
            "
            stroke="#b89660"
            strokeWidth="2"
          />

          {/* HULL DETAILS */}
          <path
            d="M90 136 L330 136"
            stroke="#80653b"
            strokeWidth="1"
            opacity="0.7"
          />

          <path
            d="M110 145 L310 145"
            stroke="#80653b"
            strokeWidth="1"
            opacity="0.45"
          />

          {/* FLAG */}
          <path
            d="
              M190 22
              C205 17 220 18 232 23
              C218 27 205 28 190 26
            "
            fill="#0a1113"
            stroke="#b89660"
            strokeWidth="1"
          />

        </svg>
      </motion.div>

      {/* =================================================
          OCEAN WAVES

          These are BELOW the ship visually.
      ================================================= */}
      <div className="pointer-events-none absolute inset-x-[-5%] bottom-0 z-10 h-[125px]">

        {/* BACK WAVE */}
        <motion.svg
          viewBox="0 0 1600 180"
          preserveAspectRatio="none"
          className="absolute bottom-12 left-0 h-[100px] w-[110%]"
          animate={{
            x: ["-2%", "2%", "-2%"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="
              M0 85
              C140 35 260 125 410 78
              C560 30 690 125 840 80
              C990 35 1110 120 1260 75
              C1400 35 1500 100 1600 65
              L1600 180
              L0 180
              Z
            "
            fill="#123139"
            opacity="0.30"
          />

          <path
            d="
              M0 85
              C140 35 260 125 410 78
              C560 30 690 125 840 80
              C990 35 1110 120 1260 75
              C1400 35 1500 100 1600 65
            "
            stroke="#80653b"
            strokeWidth="1"
            fill="none"
            opacity="0.45"
          />
        </motion.svg>

        {/* MIDDLE WAVE */}
        <motion.svg
          viewBox="0 0 1600 180"
          preserveAspectRatio="none"
          className="absolute bottom-4 left-0 h-[105px] w-[110%]"
          animate={{
            x: ["1%", "-2%", "1%"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="
              M0 105
              C130 45 270 145 420 92
              C570 42 700 140 850 92
              C1000 45 1140 140 1280 88
              C1410 42 1510 120 1600 82
              L1600 180
              L0 180
              Z
            "
            fill="#0c252b"
            opacity="0.55"
          />

          <path
            d="
              M0 105
              C130 45 270 145 420 92
              C570 42 700 140 850 92
              C1000 45 1140 140 1280 88
              C1410 42 1510 120 1600 82
            "
            stroke="#a8844d"
            strokeWidth="1.3"
            fill="none"
            opacity="0.75"
          />
        </motion.svg>

        {/* FRONT WAVE */}
        <motion.svg
          viewBox="0 0 1600 180"
          preserveAspectRatio="none"
          className="absolute bottom-[-2px] left-0 h-[100px] w-[110%]"
          animate={{
            x: ["-1%", "2%", "-1%"],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="
              M0 100
              C130 55 260 150 420 105
              C580 58 700 145 850 98
              C1000 52 1130 145 1280 100
              C1410 60 1510 130 1600 95
              L1600 180
              L0 180
              Z
            "
            fill="#07171c"
            opacity="0.88"
          />

          <path
            d="
              M0 100
              C130 55 260 150 420 105
              C580 58 700 145 850 98
              C1000 52 1130 145 1280 100
              C1410 60 1510 130 1600 95
            "
            stroke="#b89660"
            strokeWidth="1.5"
            fill="none"
          />
        </motion.svg>

      </div>
    </div>

    {/* ===================================================
        BOTTOM INFORMATION
    =================================================== */}
    <div className="pointer-events-none absolute bottom-22 left-6 right-6 z-30 flex items-end justify-between md:left-8 md:right-8">

      {/* COORDINATES */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#596b6e]">
          COORDINATES
        </p>

        <p className="mt-1 font-mono text-[12px] text-[#a8844d]">
          28° 35' N · 78° 57' E
        </p>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-px w-8 bg-[#b89660]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#b89660]">
            MORNING TIDE
          </span>
        </div>
      </div>

      {/* STATUS */}
      <div className="text-right">
        <p className="font-mono text-[10px] uppercase tracking-[1.0em] text-[#596b6e]">
          CHART STATUS
        </p>

        <p className="mt-1 font-mono text-[12px] text-[#a8844d]">
          VOYAGE ACTIVE
        </p>
      </div>

    </div>

  </div>
</section>



{/*======================TREASURES
========================================================= */}

<section
  id="treasures"
  className="relative z-10 bg-[#070b0c]/90 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <h2 className="font-serif text-4xl tracking-wide text-[#d8c99f] md:text-6xl">
        MY TREASURES
      </h2>

      {/* divider */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#80653b]" />

        <div className="h-2 w-2 rotate-45 border border-[#b89660]" />

        <div className="h-px w-16 bg-[#80653b]" />
      </div>

      <p className="mx-auto mt-7 max-w-md text-s leading-6 text-[#6e858a]">
        A collection of projects, ideas and creations.
        <br />
        Each one a step closer to a brighter tomorrow.
      </p>
    </motion.div>


    {/* PROJECT GRID */}
  <div className="grid gap-10 md:grid-cols-3">

  <SpyglassProjectCard
    number="01"
    label="KNOWLEDGE CORE"
    title="BIS RAG ASSISTANT"
    description="An AI-powered assistant that helps users explore BIS standards using retrieval augmented generation."
    tags={["Python", "LangChain", "RAG"]}
    image="/images/bis-rag.jpg"
  />

  <SpyglassProjectCard
    number="02"
    label="THE SHIP"
    title="PORTFOLIO WEBSITE"
    description="An interactive portfolio designed as a cinematic journey through a pirate world."
    tags={["React", "Tailwind", "Motion"]}
    image="/images/portfolio.jpg"
  />

  <SpyglassProjectCard
    number="03"
    label="LOGIC ENGINE"
    title="DSA SOLUTIONS"
    description="A collection of algorithms and problem-solving challenges explored throughout the journey."
    tags={["Java", "DSA", "Algorithms"]}
    image="/images/dsa.jpg"
  />

</div>

  </div>
</section>

     

{/* =========================================================
    SKILLS — MY ARSENAL
========================================================= */}

{/* =========================================================
    MY ARSENAL
========================================================= */}

<section
  id="skills"
  className="relative z-10 overflow-hidden bg-[#070b0c]/90 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <p className="font-mono text-[12px] uppercase tracking-[1.0em] text-[#80653b]">
        EQUIPMENT · KNOWLEDGE · CRAFT
      </p>

      <h2 className="mt-4 font-serif text-4xl tracking-wide text-[#d8c99f] md:text-6xl">
        MY ARSENAL
      </h2>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-20 bg-[#80653b]" />

        <div className="h-2 w-2 rotate-45 border border-[#b89660]" />

        <div className="h-px w-20 bg-[#80653b]" />
      </div>

      <p className="mx-auto mt-7 max-w-lg text-s leading-6 text-[#687b7f]">
        The tools, technologies and skills I carry on every expedition.
      </p>
    </motion.div>


    {/* =====================================================
        ARSENAL FRAME
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative border border-[#80653b]/60 bg-[#0b1011] p-3"
    >

      {/* corner brackets */}
     
<div className="absolute left-2 top-2 h-7 w-7 border-l border-t border-[#b89660]" />
<div className="absolute right-2 top-2 h-7 w-7 border-r border-t border-[#b89660]" />
<div className="absolute bottom-2 left-2 h-7 w-7 border-b border-l border-[#b89660]" />
<div className="absolute bottom-2 right-2 h-7 w-7 border-b border-r border-[#b89660]" />


      <div className="border border-[#80653b]/25 bg-[#080d0e]">

        {/* =================================================
            TOP BAR
        ================================================= */}

        <div className="flex flex-col justify-between gap-4 border-b border-[#80653b]/30 px-7 py-5 sm:flex-row sm:items-center">

          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              SHIP INVENTORY
            </p>

            <p className="mt-2 font-serif text-3xl text-[#c9bb91]">
              Developer's Arsenal
            </p>
          </div>


          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#a8844d] shadow-[0_0_10px_rgba(168,132,77,0.5)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#65777b]">
              Systems Ready
            </span>

          </div>

        </div>


        {/* =================================================
            SKILL GROUPS
        ================================================= */}

        <div className="grid lg:grid-cols-3">


          {/* =================================================
              DEVELOPMENT
          ================================================= */}

          <div className="border-b border-[#80653b]/25 p-7 lg:border-b-0 lg:border-r">

            <div className="mb-7 flex items-center justify-between">

              <div>
                <p className="font-mono text-[12px] tracking-[1.0em] text-[#80653b]">
                  01
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#d0c196]">
                  Development
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center border border-[#80653b]/50 font-serif text-[#b89660]">
                {"</>"}
              </div>

            </div>


            <div className="space-y-3">

              <ArsenalItem
                name="Java"
                level={85}
                description="Core programming"
              />

              <ArsenalItem
                name="JavaScript"
                level={80}
                description="Web development"
              />

              <ArsenalItem
                name="React"
                level={78}
                description="Interface building"
              />

              <ArsenalItem
                name="HTML / CSS"
                level={88}
                description="Frontend foundations"
              />

            </div>

          </div>


          {/* =================================================
              AI & DATA
          ================================================= */}

          <div className="border-b border-[#80653b]/25 p-7 lg:border-b-0 lg:border-r">

            <div className="mb-7 flex items-center justify-between">

              <div>
                <p className="font-mono text-[12px] tracking-[1.0em] text-[#80653b]">
                  02
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#d0c196]">
                  AI & Data
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center border border-[#80653b]/50 font-serif text-[#b89660]">
                AI
              </div>

            </div>


            <div className="space-y-3">

              <ArsenalItem
                name="Python"
                level={82}
                description="Data & AI"
              />

              <ArsenalItem
                name="RAG"
                level={72}
                description="Retrieval systems"
              />

              <ArsenalItem
                name="OpenAI"
                level={75}
                description="AI applications"
              />

              <ArsenalItem
                name="Machine Learning"
                level={65}
                description="Learning systems"
              />

            </div>

          </div>


          {/* =================================================
              PROBLEM SOLVING
          ================================================= */}

          <div className="p-7">

            <div className="mb-7 flex items-center justify-between">

              <div>
                <p className="font-mono text-[12px] tracking-[1.0em] text-[#80653b]">
                  03
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#d0c196]">
                  Problem Solving
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center border border-[#80653b]/50 font-serif text-[#b89660]">
                DS
              </div>

            </div>


            <div className="space-y-3">

              <ArsenalItem
                name="Data Structures"
                level={80}
                description="Algorithms & design"
              />

              <ArsenalItem
                name="Algorithms"
                level={76}
                description="Efficient solutions"
              />

              <ArsenalItem
                name="Problem Solving"
                level={84}
                description="Logical thinking"
              />

              <ArsenalItem
                name="Git & GitHub"
                level={78}
                description="Version control"
              />

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM STATUS BAR
        ================================================= */}

        <div className="flex flex-col justify-between gap-3 border-t border-[#80653b]/30 px-7 py-4 sm:flex-row">

          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#4f6266]">
            12 SYSTEMS · 3 CATEGORIES
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#80653b]">
            CONSTANTLY UPGRADING
          </span>

        </div>

      </div>

    </motion.div>

  </div>
</section>

{/* =========================================================
    JOURNEY — THE DEVELOPER'S VOYAGE
========================================================= */}

{/* =========================================================
    THE JOURNEY
========================================================= */}

<section
  id="journey"
  className="relative z-10 overflow-hidden bg-[#070b0c]/90 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >

      <p className="font-mono text-[15px] uppercase tracking-[0.8em] text-[#80653b]">
        NAVIGATOR'S CHART · 001
      </p>

      <h2 className="mt-4 font-serif text-4xl tracking-wide text-[#d8c99f] md:text-6xl">
        THE JOURNEY
      </h2>

      <div className="mt-6 flex items-center justify-center gap-4">

        <div className="h-px w-20 bg-[#80653b]" />

        <div className="h-2 w-2 rotate-45 border border-[#b89660]" />

        <div className="h-px w-20 bg-[#80653b]" />

      </div>

      <p className="mx-auto mt-7 max-w-lg text-s leading-6 text-[#687b7f]">
        Every destination marks something learned, built,
        discovered or still waiting beyond the horizon.
      </p>

    </motion.div>


    {/* =====================================================
        MAP
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="relative overflow-hidden border border-[#80653b]/60 bg-[#101716]"
    >

      {/* map texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 20% 30%,
              rgba(184,150,96,0.08) 0,
              transparent 35%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(184,150,96,0.06) 0,
              transparent 35%
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 38px,
              rgba(184,150,96,0.025) 39px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 38px,
              rgba(184,150,96,0.025) 39px
            )
          `,
        }}
      />


      {/* inner frame */}
      <div className="absolute inset-3 border border-[#80653b]/30" />

      {/* corner brackets */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-[#b89660]" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-[#b89660]" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#b89660]" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#b89660]" />


      {/* ===================================================
          MAP HEADER
      =================================================== */}

      <div className="relative z-10 flex items-center justify-between border-b border-[#80653b]/30 px-8 py-5">

        <div>

          <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
            LOGBOOK
          </p>

          <p className="mt-1 font-serif text-lg text-[#c9bb91]">
            Course of the Voyage
          </p>

        </div>


        <div className="hidden text-right sm:block">

          <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
            CURRENT POSITION
          </p>

          <p className="mt-1 font-mono text-[12px] text-[#8a999a]">
            20° 35' N · 78° 57' E
          </p>

        </div>

      </div>


      {/* ===================================================
          ACTUAL MAP
      =================================================== */}

      <div className="relative h-[570px] overflow-hidden">


        {/* =================================================
            COMPASS
        ================================================= */}

        <div className="absolute right-10 top-8 z-20 hidden h-28 w-28 items-center justify-center rounded-full border border-[#80653b]/50 md:flex">

          <div className="absolute inset-3 rounded-full border border-[#80653b]/30" />

          <span className="absolute top-1 font-serif text-[12px] text-[#b89660]">
            N
          </span>

          <span className="absolute bottom-1 font-serif text-[12px] text-[#80653b]">
            S
          </span>

          <span className="absolute left-2 font-serif text-[12px] text-[#80653b]">
            W
          </span>

          <span className="absolute right-2 font-serif text-[12px] text-[#80653b]">
            E
          </span>

          <div className="absolute h-16 w-px rotate-[25deg] bg-[#b89660]" />

          <div className="absolute h-16 w-px -rotate-[65deg] bg-[#80653b]" />

          <div className="relative z-10 h-3 w-3 rounded-full border border-[#d8c99f] bg-[#0a1113]" />

        </div>


        {/* =================================================
            MAP GRID
        ================================================= */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(184,150,96,0.15) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(184,150,96,0.15) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />


        {/* =================================================
            ROUTE
        ================================================= */}

        <svg
          viewBox="0 0 1400 600"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >

          {/* route shadow */}
          <path
            d="
              M120 420
              C220 500 300 330 430 350
              C550 370 570 470 690 480
              C800 490 850 340 940 300
              C1040 255 1060 160 1140 190
              C1230 225 1210 390 1320 410
            "
            fill="none"
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="5"
          />

          {/* golden route */}
          <path
            id="journey-route"
            d="
              M120 420
              C220 500 300 330 430 350
              C550 370 570 470 690 480
              C800 490 850 340 940 300
              C1040 255 1060 160 1140 190
              C1230 225 1210 390 1320 410
            "
            fill="none"
            stroke="#a8844d"
            strokeWidth="2"
            strokeDasharray="7 10"
            opacity="0.8"
          />


          {/* =================================================
              MOVING SHIP
          ================================================= */}

          <g>

            <animateMotion
              dur="14s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#journey-route" />
            </animateMotion>


            {/* ship hull */}
            <path
              d="M-18 2 L18 2 L12 9 L-12 9 Z"
              fill="#6d4c28"
              stroke="#c5a46d"
              strokeWidth="1"
            />

            {/* mast */}
            <line
              x1="0"
              y1="2"
              x2="0"
              y2="-22"
              stroke="#c5a46d"
              strokeWidth="1"
            />

            {/* sail */}
            <path
              d="M1 -20 L1 -5 L13 -7 Z"
              fill="#bca77c"
              opacity="0.75"
            />

          </g>

        </svg>


        {/* =================================================
            JOURNEY MARKERS
        ================================================= */}

        <JourneyMarker
          number="01"
          year="2021"
          title="THE CALL"
          text="The beginning. First steps into programming and technology."
          className="left-[7%] top-[62%]"
        />

        <JourneyMarker
          number="02"
          year="2022"
          title="LEARNING SEAS"
          text="Exploring programming fundamentals and discovering the joy of solving problems."
          className="left-[27%] top-[48%]"
        />

        <JourneyMarker
          number="03"
          year="2023"
          title="BUILDING THE SHIP"
          text="Turning knowledge into projects and learning by building."
          className="left-[48%] top-[67%]"
        />

        <JourneyMarker
          number="04"
          year="2024"
          title="NEW HORIZONS"
          text="Moving deeper into AI, web development and bigger ideas."
          className="left-[67%] top-[36%]"
        />

        <JourneyMarker
          number="05"
          year="2025+"
          title="BEYOND MAPS"
          text="Continuing to learn, experiment and build what comes next."
          className="left-[88%] top-[56%]"
        />


        {/* =================================================
            MAP LABELS
        ================================================= */}

        <span className="absolute left-[12%] top-[25%] rotate-[-8deg] font-serif text-s tracking-[0.2em] text-[#80653b]/60">
          ORIGIN WATERS
        </span>

        <span className="absolute left-[43%] top-[20%] rotate-[5deg] font-serif text-s tracking-[0.2em] text-[#80653b]/50">
          THE OPEN SEA
        </span>

        <span className="absolute right-[12%] bottom-[18%] rotate-[-4deg] font-serif text-s tracking-[0.2em] text-[#80653b]/50">
          UNKNOWN HORIZON
        </span>


        {/* map coordinates */}
        <div className="absolute bottom-7 left-8 font-mono text-[10px] uppercase tracking-[0.5em] text-[#596b6e]">
          CHART NO. 001 / ROUTE ACTIVE
        </div>

        <div className="absolute bottom-7 right-8 font-mono text-[10px] uppercase tracking-[0.5em] text-[#80653b]">
          KEEP SAILING
        </div>

      </div>

    </motion.div>

  </div>
</section>

{/*ABOUT — CAPTAIN'S JOURNAL
        ========================================================= */}

      

<section
  id="about"
  className="relative overflow-hidden bg-[#070b0c] px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <h2 className="font-serif text-4xl tracking-wide text-[#d8c99f] md:text-6xl">
        ABOUT ME
      </h2>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#80653b]" />

        <div className="h-2 w-2 rotate-45 border border-[#b89660]" />

        <div className="h-px w-16 bg-[#80653b]" />
      </div>

      <p className="mt-7 text-[12px] uppercase tracking-[0.5em] text-[#687b7f]">
        The person behind the work
      </p>
    </motion.div>


    {/* =====================================================
        MAIN ABOUT GRID
    ===================================================== */}

    <div className="grid items-stretch gap-10 lg:grid-cols-2">


      {/* ===================================================
          LEFT — PROFILE
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col"
      >

        {/* Profile frame */}
        <div className="relative flex-1 border border-[#80653b]/60 bg-[#0b1011] p-3">

          {/* Corner brackets */}
          <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#b89660]" />
          <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#b89660]" />
          <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#b89660]" />
          <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#b89660]" />


          {/* Inner profile */}
          <div className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden bg-[#080d0e]">

            {/* subtle glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b89660]/5 blur-[100px]" />


            {/* Profile emblem */}
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#80653b]">

              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#80653b]/40">

                <span className="font-serif text-6xl text-[#b89660]">
                  AG
                </span>

              </div>

            </div>


            {/* Name */}
            <div className="relative mt-10 text-center">

              <p className="font-mono text-[8px] uppercase tracking-[0.45em] text-[#a8844d]">
                ARCHISHA GUPTA
              </p>

              <p className="mt-3 text-[8px] uppercase tracking-[0.28em] text-[#617579]">
                Developer · Builder · Problem Solver
              </p>

            </div>

          </div>

        </div>


        {/* Profile information */}
        <div className="mt-4 grid grid-cols-3 border border-[#80653b]/40 bg-[#0b1011]">

          <div className="p-5 text-center">
            <p className="font-mono text-[14px] tracking-widest text-[#80653b]">
              STATUS
            </p>

            <p className="mt-2 text-[12px] uppercase tracking-wider text-[#89989a]">
              BUILDING
            </p>
          </div>


          <div className="border-x border-[#80653b]/30 p-5 text-center">
            <p className="font-mono text-[14px] tracking-widest text-[#80653b]">
              FOCUS
            </p>

            <p className="mt-2 text-[12px] uppercase tracking-wider text-[#89989a]">
              SOFTWARE
            </p>
          </div>


          <div className="p-5 text-center">
            <p className="font-mono text-[14px] tracking-widest text-[#80653b]">
              MODE
            </p>

            <p className="mt-2 text-[12px] uppercase tracking-wider text-[#89989a]">
              LEARNING
            </p>
          </div>

        </div>

      </motion.div>



      {/* ===================================================
          RIGHT — CAPTAIN'S LOG
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col"
      >

        <div className="flex h-full flex-col justify-center">

          {/* Log heading */}
          <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
            CAPTAIN'S LOG / 001
          </p>


          <h3 className="mt-5 font-serif text-4xl leading-[1.15] text-[#d8c99f] md:text-4xl">
            Curious mind.
            <br />
            Constantly building.
          </h3>


          {/* divider */}
          <div className="mt-7 h-px w-20 bg-[#80653b]" />


          {/* Bio */}
          <div className="mt-7 max-w-2xl">

            <p className="text-m leading-7 text-[#718488]">
              I'm Archisha Gupta, a developer who enjoys turning ideas
              into useful and engaging digital experiences. I like
              understanding how things work, solving problems and
              building projects that challenge me to learn something new.
            </p>

            <p className="mt-5 text-m leading-7 text-[#718488]">
              My journey has taken me through programming, data
              structures, AI and web development. Every project is
              another opportunity to experiment, improve and become
              a better developer.
            </p>

          </div>


          {/* =================================================
              VALUES
          ================================================= */}

          <div className="mt-10 grid grid-cols-3 gap-3">

            {/* Card 1 */}
            <div className="min-h-[125px] border border-[#80653b]/40 bg-[#0b1011] p-4 transition-all duration-300 hover:border-[#b89660]">

              <span className="font-mono text-[15px] text-[#80653b]">
                01
              </span>

              <h4 className="mt-4 font-serif text-base text-[#c9bb91]">
                Curiosity
              </h4>

              <p className="mt-2 text-[12px] leading-4 text-[#65777b]">
                Always exploring how things work.
              </p>

            </div>


            {/* Card 2 */}
            <div className="min-h-[125px] border border-[#80653b]/40 bg-[#0b1011] p-4 transition-all duration-300 hover:border-[#b89660]">

              <span className="font-mono text-[15px] text-[#80653b]">
                02
              </span>

              <h4 className="mt-4 font-serif text-base text-[#c9bb91]">
                Problem Solving
              </h4>

              <p className="mt-2 text-[12px] leading-4 text-[#65777b]">
                Breaking difficult problems into simpler ones.
              </p>

            </div>


            {/* Card 3 */}
            <div className="min-h-[125px] border border-[#80653b]/40 bg-[#0b1011] p-4 transition-all duration-300 hover:border-[#b89660]">

              <span className="font-mono text-[15px] text-[#80653b]">
                03
              </span>

              <h4 className="mt-4 font-serif text-base text-[#c9bb91]">
                Building
              </h4>

              <p className="mt-2 text-[12px] leading-4 text-[#65777b]">
                Learning by creating real things.
              </p>

            </div>

          </div>


          {/* Signature */}
          <div className="mt-9 flex items-center gap-5">

            <div className="h-px flex-1 bg-[#80653b]/30" />

            <span className="font-serif text-lg italic text-[#a98b58]">
              — Archisha
            </span>

            <div className="h-px flex-1 bg-[#80653b]/30" />

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>

        {/* =========================================================
            CONTACT — MESSAGE IN A BOTTLE
        ========================================================= */}

        {/* =========================================================
    LET'S CONNECT
========================================================= */}

<section
  id="contact"
  className="relative overflow-hidden bg-[#070b0c] px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <h2 className="font-serif text-5xl tracking-wide text-[#d8c99f] md:text-6xl">
        LET'S CONNECT
      </h2>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-[#80653b]" />

        <div className="h-2 w-2 rotate-45 border border-[#b89660]" />

        <div className="h-px w-16 bg-[#80653b]" />
      </div>

      <p className="mx-auto mt-7 max-w-md text-s leading-6 text-[#687b7f]">
        Every great journey begins with a conversation.
        <br />
        Let's chart the next one together.
      </p>
    </motion.div>


    {/* =====================================================
        CONTACT GRID
    ===================================================== */}

    <div className="grid gap-8 lg:grid-cols-2">


      {/* ===================================================
          LEFT — CONTACT INFORMATION
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative border border-[#80653b]/60 bg-[#0b1011] p-8 md:p-10"
      >

        {/* corner brackets */}
        <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#b89660]" />
        <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#b89660]" />
        <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#b89660]" />
        <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#b89660]" />


        <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
          COMMUNICATIONS / 001
        </p>


        <h3 className="mt-6 font-serif text-4xl leading-tight text-[#d8c99f]">
          Have an idea?
          <br />
          Let's talk.
        </h3>


        <div className="mt-7 h-px w-20 bg-[#80653b]" />


        <p className="mt-7 max-w-md text-m leading-7 text-[#718488]">
          Whether you have a project in mind, want to collaborate,
          or simply want to say hello, I'd be happy to hear from you.
        </p>


        {/* =================================================
            CONTACT DETAILS
        ================================================= */}

        <div className="mt-10 space-y-5">

          {/* EMAIL */}
          <div className="border-t border-[#80653b]/30 pt-5">

            <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              EMAIL
            </p>

            <a
              href="mailto:your.email@example.com"
              className="mt-2 block text-m text-[#bca879] transition-colors hover:text-[#e0cea0]"
            >
              your.email@example.com
            </a>

          </div>


          {/* GITHUB */}
          <div className="border-t border-[#80653b]/30 pt-5">

            <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              GITHUB
            </p>

            <a
              href="#"
              className="mt-2 block text-m text-[#bca879] transition-colors hover:text-[#e0cea0]"
            >
              github.com/yourusername
            </a>

          </div>


          {/* LINKEDIN */}
          <div className="border-t border-[#80653b]/30 pt-5">

            <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              LINKEDIN
            </p>

            <a
              href="#"
              className="mt-2 block text-m text-[#bca879] transition-colors hover:text-[#e0cea0]"
            >
              linkedin.com/in/yourusername
            </a>

          </div>

        </div>


        {/* availability */}
        <div className="mt-10 flex items-center gap-3">

          <span className="h-2 w-2 rounded-full bg-[#9a7c48] shadow-[0_0_10px_rgba(154,124,72,0.6)]" />

          <span className="font-mono text-[12px] uppercase tracking-[0.40em] text-[#687b7f]">
            Open to opportunities & collaborations
          </span>

        </div>

      </motion.div>



      {/* ===================================================
          RIGHT — CONTACT FORM
      =================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative border border-[#80653b]/60 bg-[#0b1011] p-8 md:p-10"
      >

        {/* corner brackets */}
        <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#b89660]" />
        <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#b89660]" />
        <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#b89660]" />
        <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#b89660]" />


        <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
          SEND A MESSAGE / 002
        </p>


        <h3 className="mt-6 font-serif text-3xl text-[#d8c99f]">
          Start a conversation
        </h3>


        {/* FORM */}

        <form className="mt-8 space-y-6">

          {/* NAME */}
          <div>

            <label className="mb-2 block font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              YOUR NAME
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-[#80653b]/40 bg-transparent px-0 py-3 text-sm text-[#c9bb91] outline-none placeholder:text-[#3f5054] focus:border-[#b89660]"
            />

          </div>


          {/* EMAIL */}
          <div>

            <label className="mb-2 block font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              YOUR EMAIL
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-[#80653b]/40 bg-transparent px-0 py-3 text-sm text-[#c9bb91] outline-none placeholder:text-[#3f5054] focus:border-[#b89660]"
            />

          </div>


          {/* SUBJECT */}
          <div>

            <label className="mb-2 block font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              SUBJECT
            </label>

            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full border-b border-[#80653b]/40 bg-transparent px-0 py-3 text-m text-[#c9bb91] outline-none placeholder:text-[#3f5054] focus:border-[#b89660]"
            />

          </div>


          {/* MESSAGE */}
          <div>

            <label className="mb-2 block font-mono text-[12px] uppercase tracking-[0.5em] text-[#80653b]">
              MESSAGE
            </label>

            <textarea
              rows="4"
              placeholder="Tell me about your idea..."
              className="w-full resize-none border-b border-[#80653b]/40 bg-transparent px-0 py-3 text-sm text-[#c9bb91] outline-none placeholder:text-[#3f5054] focus:border-[#b89660]"
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            className="group mt-2 flex items-center gap-4 border border-[#80653b] px-7 py-3 font-mono text-[12px] uppercase tracking-[0.5em] text-[#b89660] transition-all duration-300 hover:bg-[#80653b]/10 hover:text-[#dfc995]"
          >
            Send Message

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

      </motion.div>

    </div>


    {/* =====================================================
        BOTTOM
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#80653b]/30 pt-7 text-center md:flex-row md:text-left"
    >

      <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#4e6064]">
        ARCHISHA GUPTA · 2026
      </p>

      <p className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#4e6064]">
        END OF THE MAP · BEGINNING OF THE JOURNEY
      </p>

    </motion.div>

  </div>
</section>
</main>
</>

);
}
export default App;