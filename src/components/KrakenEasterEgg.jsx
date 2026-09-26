import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function KrakenEasterEgg() {
  const [active, setActive] = useState(false);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (active) return;

      const key =
        event.key.length === 1
          ? event.key.toLowerCase()
          : event.key;

      if (key === KONAMI_CODE[keyIndex]) {
        const nextIndex = keyIndex + 1;

        if (nextIndex === KONAMI_CODE.length) {
          setActive(true);
          setKeyIndex(0);

          setTimeout(() => {
            setActive(false);
          }, 7200);
        } else {
          setKeyIndex(nextIndex);
        }
      } else {
        setKeyIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyIndex, active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* =====================================================
              DARK OCEAN
          ====================================================== */}

          <motion.div
            className="absolute inset-0 bg-[#020608]"
            animate={{
              opacity: [0, 0.35, 0.72, 0.58, 0],
            }}
            transition={{
              duration: 7.2,
              times: [0, 0.12, 0.35, 0.72, 1],
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(35,59,60,0.5), transparent 60%)",
            }}
          />

          {/* =====================================================
              SCREEN SHAKE
          ====================================================== */}

          <motion.div
            className="absolute inset-0"
            animate={{
              x: [0, -5, 7, -6, 4, -2, 0],
              y: [0, 4, -5, 4, -3, 2, 0],
            }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
            }}
          />

          {/* =====================================================
              KRAKEN TENTACLES
          ====================================================== */}

          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              {/* Dark wet skin */}
              <linearGradient
                id="tentacleSkin"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#46514c" />
                <stop offset="22%" stopColor="#2c3734" />
                <stop offset="55%" stopColor="#17211f" />
                <stop offset="100%" stopColor="#050a0a" />
              </linearGradient>

              {/* Side highlight */}
              <linearGradient
                id="tentacleLight"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#a99062" stopOpacity="0" />
                <stop offset="50%" stopColor="#bca275" stopOpacity=".45" />
                <stop offset="100%" stopColor="#8d754e" stopOpacity="0" />
              </linearGradient>

              {/* Suction cup */}
              <radialGradient id="suction">
                <stop offset="0%" stopColor="#d39a70" />
                <stop offset="35%" stopColor="#9b6349" />
                <stop offset="70%" stopColor="#593a31" />
                <stop offset="100%" stopColor="#171313" />
              </radialGradient>

              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="18"
                  stdDeviation="16"
                  floodColor="#000000"
                  floodOpacity=".95"
                />
              </filter>

              <filter id="blur">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* ===================================================
                TENTACLE 1
                COMES FROM BOTTOM LEFT
                CURLS UPWARD
            ==================================================== */}

            <motion.g
              initial={{
                x: -500,
                y: 500,
                rotate: -12,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                x: [-500, -180, 40, 120, 80],
                y: [500, 250, 20, -30, -100],
                rotate: [-12, -7, 2, 8, 12],
                scale: [0.7, 0.85, 1, 1.05, 1.1],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5.2,
                ease: "easeOut",
              }}
              filter="url(#shadow)"
            >
              <TentacleOne />
            </motion.g>

            {/* ===================================================
                TENTACLE 2
                STRIKES FROM RIGHT
            ==================================================== */}

            <motion.g
              initial={{
                x: 650,
                y: 450,
                rotate: 18,
                opacity: 0,
                scale: 0.65,
              }}
              animate={{
                x: [650, 420, 170, -100, -700],
                y: [450, 300, 160, 40, -100],
                rotate: [18, 12, 3, -5, -14],
                scale: [0.65, 0.8, 1, 1.05, 1.1],
                opacity: [0, 1, 1, 0.9, 0],
              }}
              transition={{
                duration: 5.5,
                delay: 0.25,
                ease: "easeInOut",
              }}
              filter="url(#shadow)"
            >
              <TentacleTwo />
            </motion.g>

            {/* ===================================================
                TENTACLE 3
                CURLS AROUND THE CENTER
            ==================================================== */}

            <motion.g
              initial={{
                x: 800,
                y: 650,
                rotate: 20,
                opacity: 0,
                scale: 0.55,
              }}
              animate={{
                x: [800, 690, 570, 500, 450],
                y: [650, 480, 300, 140, 40],
                rotate: [20, 10, 0, -8, -18],
                scale: [0.55, 0.72, 0.9, 1, 1.08],
                opacity: [0, 0.8, 1, 1, 0],
              }}
              transition={{
                duration: 5.8,
                delay: 0.55,
                ease: "easeOut",
              }}
              filter="url(#shadow)"
            >
              <TentacleThree />
            </motion.g>

            {/* ===================================================
                TENTACLE 4
                FOREGROUND SWEEP
            ==================================================== */}

            <motion.g
              initial={{
                x: 1100,
                y: 500,
                rotate: -20,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: [1100, 900, 730, 570, 300],
                y: [500, 390, 260, 130, 20],
                rotate: [-20, -10, 0, 8, 16],
                scale: [0.5, 0.7, 0.9, 1, 1.12],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: 0.8,
                ease: "easeInOut",
              }}
              filter="url(#shadow)"
            >
              <TentacleFour />
            </motion.g>

            {/* ===================================================
                WATER PARTICLES
            ==================================================== */}

            {Array.from({ length: 55 }).map((_, index) => {
              const x = (index * 137) % 1600;
              const y = 350 + ((index * 83) % 500);

              return (
                <motion.circle
                  key={index}
                  cx={x}
                  cy={y}
                  r={1 + (index % 3)}
                  fill="#b8c7c2"
                  initial={{
                    opacity: 0,
                    cy: y,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    cy: [y, y - 120, y - 210],
                  }}
                  transition={{
                    duration: 2.2 + (index % 3) * 0.4,
                    delay: 0.8 + (index % 15) * 0.07,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </svg>

          {/* =====================================================
              CENTER MESSAGE
          ====================================================== */}

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.75, 1, 1.02, 1.12],
            }}
            transition={{
              duration: 4.5,
              delay: 1.15,
              times: [0, 0.2, 0.7, 1],
            }}
          >
            <div className="text-center">
              <p className="font-mono text-[15px] uppercase tracking-[0.5em] text-[#80653b]">
                SOMETHING HAS AWAKENED
              </p>

              <h2 className="mt-5 font-serif text-3xl tracking-[0.16em] text-[#d8c99f] drop-shadow-[0_0_30px_rgba(216,201,159,0.3)] md:text-7xl">
                THE KRAKEN
              </h2>

              <div className="mx-auto mt-6 h-px w-28 bg-[#a8844d]" />

              <p className="mt-5 font-mono text-[15px] uppercase tracking-[0.5em] text-[#718488]">
                YOU SHOULD HAVE STAYED OFF THE MAP
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              VIGNETTE
          ====================================================== */}

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 0],
            }}
            transition={{
              duration: 7.2,
              times: [0, 0.55, 0.78, 1],
            }}
            style={{
              boxShadow:
                "inset 0 0 220px 90px rgba(0,0,0,0.95)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ===============================================================
   TENTACLE 1
   Curled tip + organic body
================================================================ */

function TentacleOne() {
  return (
    <g>
      <path
        d="
          M 40 900

          C 60 770 100 680 150 590
          C 205 490 300 410 365 330

          C 420 262 455 190 425 135

          C 405 98 355 92 330 122
          C 305 152 325 190 358 184

          C 328 220 275 195 262 152
          C 240 92 292 25 365 18

          C 455 10 510 88 500 175

          C 490 275 405 340 340 430

          C 260 540 205 690 190 900

          Z
        "
        fill="url(#tentacleSkin)"
      />

      {/* Wet highlight */}
      <path
        d="
          M 92 880
          C 125 700 200 530 325 390
          C 410 295 465 220 458 150
        "
        fill="none"
        stroke="url(#tentacleLight)"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Suction cups */}
      <Cup x="188" y="680" size="22" />
      <Cup x="207" y="630" size="20" />
      <Cup x="230" y="575" size="18" />
      <Cup x="258" y="520" size="17" />
      <Cup x="290" y="470" size="15" />
      <Cup x="320" y="425" size="14" />
      <Cup x="350" y="380" size="12" />
      <Cup x="380" y="335" size="11" />
      <Cup x="405" y="290" size="10" />
      <Cup x="425" y="240" size="9" />
    </g>
  );
}

/* ===============================================================
   TENTACLE 2
================================================================ */

function TentacleTwo() {
  return (
    <g>
      <path
        d="
          M 1540 900

          C 1515 760 1470 650 1410 560
          C 1350 465 1260 405 1205 330

          C 1155 260 1120 185 1155 130

          C 1180 92 1230 92 1255 122

          C 1280 152 1260 190 1227 184

          C 1257 220 1310 195 1323 152

          C 1345 92 1293 25 1220 18

          C 1130 10 1075 88 1085 175

          C 1095 275 1180 340 1245 430

          C 1325 540 1380 690 1390 900

          Z
        "
        fill="url(#tentacleSkin)"
      />

      <path
        d="
          M 1488 880
          C 1455 700 1380 530 1255 390
          C 1170 295 1115 220 1122 150
        "
        fill="none"
        stroke="url(#tentacleLight)"
        strokeWidth="17"
        strokeLinecap="round"
      />

      <Cup x="1390" y="680" size="22" />
      <Cup x="1370" y="630" size="20" />
      <Cup x="1345" y="575" size="18" />
      <Cup x="1318" y="520" size="17" />
      <Cup x="1285" y="470" size="15" />
      <Cup x="1255" y="425" size="14" />
      <Cup x="1225" y="380" size="12" />
      <Cup x="1195" y="335" size="11" />
      <Cup x="1170" y="290" size="10" />
      <Cup x="1150" y="240" size="9" />
    </g>
  );
}

/* ===============================================================
   TENTACLE 3
   Narrower, more serpentine
================================================================ */

function TentacleThree() {
  return (
    <g>
      <path
        d="
          M 650 900

          C 650 760 690 650 755 565
          C 820 480 900 435 920 350

          C 938 275 900 215 845 220

          C 800 225 785 270 815 295

          C 840 315 870 295 875 270

          C 870 335 805 365 755 330

          C 690 285 700 180 770 140

          C 850 95 950 150 970 240

          C 995 350 910 445 845 520

          C 760 620 735 760 755 900

          Z
        "
        fill="url(#tentacleSkin)"
      />

      <path
        d="
          M 695 875
          C 710 700 760 590 840 500
          C 920 410 955 320 930 245
        "
        fill="none"
        stroke="url(#tentacleLight)"
        strokeWidth="13"
        strokeLinecap="round"
      />

      <Cup x="750" y="650" size="17" />
      <Cup x="775" y="600" size="15" />
      <Cup x="805" y="550" size="14" />
      <Cup x="835" y="505" size="12" />
      <Cup x="865" y="460" size="11" />
      <Cup x="890" y="410" size="10" />
      <Cup x="910" y="360" size="9" />
    </g>
  );
}

/* ===============================================================
   TENTACLE 4
   Foreground curling tentacle
================================================================ */

function TentacleFour() {
  return (
    <g>
      <path
        d="
          M 1250 900

          C 1210 770 1140 680 1040 610
          C 935 535 850 500 825 415

          C 800 335 850 275 910 290

          C 960 302 975 355 940 385

          C 912 408 875 385 870 355

          C 875 425 950 455 1005 415

          C 1070 365 1045 255 970 215

          C 880 168 770 225 755 325

          C 738 435 825 525 900 590

          C 1000 680 1060 790 1075 900

          Z
        "
        fill="url(#tentacleSkin)"
      />

      <path
        d="
          M 1195 880
          C 1150 730 1060 630 950 550
          C 850 480 785 405 805 330
        "
        fill="none"
        stroke="url(#tentacleLight)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <Cup x="1080" y="680" size="23" />
      <Cup x="1040" y="635" size="21" />
      <Cup x="1000" y="590" size="19" />
      <Cup x="960" y="550" size="17" />
      <Cup x="920" y="510" size="15" />
      <Cup x="885" y="465" size="13" />
      <Cup x="855" y="420" size="11" />
      <Cup x="835" y="375" size="10" />
    </g>
  );
}

/* ===============================================================
   SUCTION CUP
================================================================ */

function Cup({ x, y, size }) {
  return (
    <g>
      {/* Outer shadow */}
      <circle
        cx={x}
        cy={y}
        r={size}
        fill="#050909"
        opacity=".85"
      />

      {/* Flesh */}
      <circle
        cx={x}
        cy={y}
        r={size * 0.76}
        fill="url(#suction)"
        stroke="#795642"
        strokeWidth="1.5"
      />

      {/* Inner cavity */}
      <circle
        cx={x}
        cy={y}
        r={size * 0.36}
        fill="#251918"
      />

      {/* Wet reflection */}
      <circle
        cx={x - size * 0.2}
        cy={y - size * 0.2}
        r={size * 0.12}
        fill="#e1c29b"
        opacity=".55"
      />
    </g>
  );
}

export default KrakenEasterEgg;