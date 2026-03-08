import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";
import HeroStats from "./HeroStats";
import HeroDashboard from "./HeroDashboard";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated mesh background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </motion.div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            top: `${15 + i * 18}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div style={{ opacity }} className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-8"
            >
              <Zap size={14} className="animate-pulse" />
              <span>InstaFlow — Plataforma Omnicanal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Todos os seus
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block"
              >
                canais.{" "}
                <span className="gradient-text text-glow">Uma só</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="gradient-text text-glow block"
              >
                plataforma.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Gerencie WhatsApp, Instagram, Messenger, CRM, automações e agentes de IA em um único lugar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="https://pay.kiwify.com.br/SEU_LINK" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-cta-btn text-cta-foreground font-semibold px-8 text-base hover:shadow-[0_0_40px_-8px_hsl(var(--cta)/0.5)] transition-all duration-300 h-14 text-lg">
                  Começar Gratuitamente <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="#recursos">
                <Button size="lg" variant="outline" className="font-semibold px-8 text-base border-border/50 text-foreground hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 h-14 text-lg glass">
                  Ver Recursos
                </Button>
              </a>
            </motion.div>

            <HeroStats />
          </motion.div>

          <HeroDashboard />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
