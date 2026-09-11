import { useState } from "react";
import { motion } from "motion/react";

function SpyglassProjectCard({
  number,
  title,
  description,
  tags,
  image,
  label,
}) {
  const [hovered, setHovered] = useState(false);
  const [lensPosition, setLensPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setLensPosition({
      x,
      y,
    });
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden border border-[#80653b]/50 bg-[#090e0f]"
    >
      {/* =====================================================
          PROJECT IMAGE
      ====================================================== */}

      <div className="relative h-[270px] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          animate={{
            scale: hovered ? 1.04 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Dark cinematic overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#05090a] via-transparent to-[#05090a]/20" />

        {/* =================================================
            TOP LABEL
        ================================================== */}

        <div className="absolute left-5 top-5 border border-[#80653b]/60 bg-[#05090a]/80 px-3 py-2 backdrop-blur-sm">
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#b89660]">
            {label}
          </span>
        </div>

        {/* Project number */}

        <div className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.2em] text-[#b89660]/70">
          {number}
        </div>

        {/* =================================================
            SPYGLASS LENS
        ================================================== */}

        <motion.div
          className="pointer-events-none absolute z-30 h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            left: `${lensPosition.x}%`,
            top: `${lensPosition.y}%`,
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.65,
          }}
          transition={{
            left: {
              duration: 0.08,
              ease: "linear",
            },
            top: {
              duration: 0.08,
              ease: "linear",
            },
            opacity: {
              duration: 0.2,
            },
            scale: {
              duration: 0.25,
            },
          }}
        >
          {/* =================================================
              OUTER BRASS RING
          ================================================== */}

          <div className="absolute inset-0 rounded-full border-2 border-[#b89660] bg-[#071011]/10 shadow-[0_0_25px_rgba(0,0,0,0.75),0_0_12px_rgba(184,150,96,0.18)]" />

          {/* =================================================
              SECOND BRASS RING
          ================================================== */}

          <div className="absolute inset-[7px] rounded-full border border-[#80653b] shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]" />

          {/* =================================================
              MAGNIFIED IMAGE
          ================================================== */}

          <div
            className="absolute inset-[11px] overflow-hidden rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "220% 220%",
              backgroundPosition: `${lensPosition.x}% ${lensPosition.y}%`,
            }}
          >
            {/* Lens glass tint */}

            <div className="absolute inset-0 bg-[#8fa5a0]/5" />

            {/* Inner vignette */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, transparent 35%, rgba(0,0,0,0.72) 100%)",
              }}
            />

            {/* Glass reflection */}

            <div
              className="absolute left-[18%] top-[14%] h-[30%] w-[25%] rotate-[-35deg] rounded-full bg-white/10 blur-md"
            />
          </div>

          {/* =================================================
              CROSSHAIR
          ================================================== */}

          <div className="absolute inset-0">
            {/* Vertical */}

            <div className="absolute left-1/2 top-[13px] h-[22px] w-px -translate-x-1/2 bg-[#d2bd86]/60" />

            <div className="absolute bottom-[13px] left-1/2 h-[22px] w-px -translate-x-1/2 bg-[#d2bd86]/60" />

            {/* Horizontal */}

            <div className="absolute left-[13px] top-1/2 h-px w-[22px] -translate-y-1/2 bg-[#d2bd86]/60" />

            <div className="absolute right-[13px] top-1/2 h-px w-[22px] -translate-y-1/2 bg-[#d2bd86]/60" />

            {/* Center point */}

            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e0cda5] bg-[#080d0e]/50" />
          </div>

          {/* =================================================
              BRASS CORNER MARKS
          ================================================== */}

          <div className="absolute left-[25px] top-[18px] h-3 w-3 border-l border-t border-[#d2bd86]" />

          <div className="absolute right-[25px] top-[18px] h-3 w-3 border-r border-t border-[#d2bd86]" />

          <div className="absolute bottom-[18px] left-[25px] h-3 w-3 border-b border-l border-[#d2bd86]" />

          <div className="absolute bottom-[18px] right-[25px] h-3 w-3 border-b border-r border-[#d2bd86]" />
        </motion.div>

        {/* =================================================
            SPYGLASS HINT
        ================================================== */}

        <motion.div
          className="absolute bottom-5 right-5 z-20 border border-[#80653b]/50 bg-[#05090a]/75 px-3 py-2 backdrop-blur-sm"
          animate={{
            opacity: hovered ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9a8c70]">
            MOVE TO INSPECT
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          PROJECT INFORMATION
      ====================================================== */}

      <div className="relative p-6">
        {/* Small decorative line */}

        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 bg-[#80653b]" />

          <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#80653b]">
            {number} · DISCOVERY
          </span>
        </div>

        <h3 className="font-serif text-2xl tracking-wide text-[#d8c99f]">
          {title}
        </h3>

        <p className="mt-4 min-h-[60px] text-[11px] leading-5 text-[#718488]">
          {description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#80653b]/30 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.15em] text-[#9a8c70]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom line */}

        <div className="mt-6 flex items-center justify-between border-t border-[#80653b]/20 pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#536568]">
            PROJECT ARCHIVE
          </span>

          <span className="text-sm text-[#80653b] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

        {/* Hover gold line */}

        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c5a46d] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.article>
  );
}

export default SpyglassProjectCard;