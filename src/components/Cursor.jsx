import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Cursor() {
  const PARTICLES = 18;

  const mouse = useRef({ x: -100, y: -100 });

  const trail = useRef(
    Array.from({ length: PARTICLES }, () => ({
      x: -100,
      y: -100,
    }))
  );

  const [points, setPoints] = useState(trail.current);

  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const target = event.target;

      setHovering(
        Boolean(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea")
        )
      );
    };

    const handleClick = (event) => {
      const id = Date.now();

      setClicks((current) => [
        ...current,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setClicks((current) =>
          current.filter((click) => click.id !== id)
        );
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  /*
   * =========================================================
   * SMOOTH TAIL ANIMATION
   * =========================================================
   */

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      const current = trail.current;

      // First point follows the actual mouse
      current[0].x +=
        (mouse.current.x - current[0].x) * 0.32;

      current[0].y +=
        (mouse.current.y - current[0].y) * 0.32;

      // Every following point follows the point before it
      for (let i = 1; i < PARTICLES; i++) {
        const previous = current[i - 1];
        const point = current[i];

        const speed = 0.22 - i * 0.006;

        point.x +=
          (previous.x - point.x) * speed;

        point.y +=
          (previous.y - point.y) * speed;
      }

      setPoints([...current]);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);


  return (
    <>
      {/* =====================================================
          GOLDEN TRAIL
      ===================================================== */}

      {points.map((point, index) => {
        const progress = index / (PARTICLES - 1);

        const size = 5 - progress * 3.5;

        const opacity =
          0.75 - progress * 0.68;

        return (
          <div
            key={index}
            className="pointer-events-none fixed left-0 top-0 z-[10997] rounded-full bg-[#d4b36a]"
            style={{
              width: `${size}px`,
              height: `${size}px`,

              transform: `
                translate3d(
                  ${point.x - size / 2}px,
                  ${point.y - size / 2}px,
                  0
                )
              `,

              opacity,

              boxShadow:
                index < 7
                  ? "0 0 9px rgba(212,179,106,0.55)"
                  : "0 0 4px rgba(212,179,106,0.25)",

              willChange: "transform",
            }}
          />
        );
      })}


      {/* =====================================================
          MAIN COMPASS
      ===================================================== */}

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[11000]"
        animate={{
          x: position.x,
          y: position.y,
          scale: hovering ? 1.35 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      >

        <div className="relative flex h-8 w-8 items-center justify-center">

          {/* glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: hovering
                ? "0 0 30px rgba(212,179,106,0.5)"
                : "0 0 10px rgba(212,179,106,0.18)",
            }}
          />

          {/* outer ring */}
          <div className="absolute inset-1 rounded-full border border-[#d4b36a]" />

          {/* inner ring */}
          <div className="absolute inset-2 rounded-full border border-[#80653b]" />

          {/* cross */}
          <div className="absolute h-8 w-px bg-[#80653b]" />

          <div className="absolute h-px w-8 bg-[#80653b]" />

          {/* needle */}
          <motion.div
            className="absolute h-8 w-[2px] bg-[#e0c98e]"
            animate={{
              rotate: [0, 7, -5, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* center */}
          <div className="relative z-10 h-2 w-2 rounded-full border border-[#e0c98e] bg-[#071218] shadow-[0_0_10px_rgba(224,201,142,0.6)]" />

          {/* directions */}
          <span className="absolute -top-3 font-serif text-[6px] text-[#d4b36a]">
            N
          </span>

          <span className="absolute -bottom-3 font-serif text-[6px] text-[#d4b36a]">
            S
          </span>

          <span className="absolute -left-3 font-serif text-[6px] text-[#80653b]">
            W
          </span>

          <span className="absolute -right-3 font-serif text-[6px] text-[#80653b]">
            E
          </span>

        </div>

      </motion.div>


      {/* =====================================================
          CLICK RIPPLE
      ===================================================== */}

      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="pointer-events-none fixed z-[10996] rounded-full border border-[#d4b36a]"
            initial={{
              x: click.x - 8,
              y: click.y - 8,
              width: 16,
              height: 16,
              opacity: 0.8,
            }}
            animate={{
              x: click.x - 40,
              y: click.y - 40,
              width: 80,
              height: 80,
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}

export default Cursor;