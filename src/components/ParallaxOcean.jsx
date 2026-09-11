import { useEffect, useState } from "react";
import { motion } from "motion/react";

function ParallaxOcean() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* =====================================================
          BACK FOG / WATER
          Slowest layer — feels farthest away
      ====================================================== */}

      <motion.div
        className="absolute left-[-12%] top-[-8%] h-[120%] w-[124%]"
        animate={{
          x: ["-2%", "3%", "-2%"],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      >
        <svg
          viewBox="0 0 1600 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0 330
              C180 250 320 420 520 335
              C720 250 850 300 1030 350
              C1230 405 1390 260 1600 330
              L1600 1000
              L0 1000
              Z
            "
            fill="#536c6b"
            opacity="0.08"
          />

          <path
            d="
              M0 480
              C210 400 350 535 560 455
              C780 370 920 465 1110 485
              C1310 510 1430 405 1600 460
              L1600 1000
              L0 1000
              Z
            "
            fill="#314b4d"
            opacity="0.06"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          MID WATER
          Medium speed — middle depth
      ====================================================== */}

      <motion.div
        className="absolute left-[-15%] top-[5%] h-[115%] w-[130%]"
        animate={{
          x: ["2%", "-4%", "2%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateY(${scrollY * -0.12}px)`,
        }}
      >
        <svg
          viewBox="0 0 1600 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0 430
              C160 330 310 520 500 425
              C690 330 820 390 1000 445
              C1190 505 1390 355 1600 425
              L1600 1000
              L0 1000
              Z
            "
            fill="#405b5b"
            opacity="0.12"
          />

          <path
            d="
              M0 590
              C180 500 330 650 520 560
              C710 470 850 555 1030 585
              C1240 620 1400 500 1600 560
              L1600 1000
              L0 1000
              Z
            "
            fill="#263e40"
            opacity="0.10"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          FRONT WATER
          Fastest layer — feels closest
      ====================================================== */}

      <motion.div
        className="absolute left-[-18%] top-[15%] h-[110%] w-[136%]"
        animate={{
          x: ["-4%", "5%", "-4%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateY(${scrollY * -0.22}px)`,
        }}
      >
        <svg
          viewBox="0 0 1600 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0 520
              C170 405 330 620 515 510
              C700 400 830 515 1010 535
              C1210 555 1380 420 1600 500
              L1600 1000
              L0 1000
              Z
            "
            fill="#263c3d"
            opacity="0.18"
          />

          <path
            d="
              M0 675
              C190 570 340 730 540 640
              C730 550 870 660 1050 670
              C1250 685 1410 570 1600 630
              L1600 1000
              L0 1000
              Z
            "
            fill="#172b2d"
            opacity="0.15"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          FINE ATMOSPHERIC MIST
      ====================================================== */}

      <motion.div
        className="absolute left-[-10%] top-[30%] h-[20%] w-[120%] rounded-full bg-[#8da3a0]/5 blur-3xl"
        animate={{
          x: ["-5%", "8%", "-5%"],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />
    </div>
  );
}

export default ParallaxOcean;