import { motion } from "framer-motion";
import { useCursorGlow } from "@/hooks/use-cursor-glow";

const CursorGlow = () => {
  const { x, y } = useCursorGlow();

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 35%, transparent 70%)",
          x: x - 250,
          y: y - 250,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
      />
    </motion.div>
  );
};

export default CursorGlow;
