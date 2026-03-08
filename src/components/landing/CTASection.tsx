import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="relative rounded-3xl gradient-cta p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Mesh overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -25, 0], x: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i * 0.8, repeat: Infinity, delay: i * 0.6 }}
              className="absolute text-primary-foreground/15"
              style={{ top: `${15 + i * 16}%`, left: `${8 + i * 22}%` }}
            >
              <Sparkles size={20 + i * 6} />
            </motion.div>
          ))}

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 grid-pattern" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground"
            >
              Pronto para transformar
              <br />
              seu atendimento?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
            >
              Junte-se a mais de 2.000 empresas que já usam a InstaFlow para escalar seus resultados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
            >
              <a href="https://pay.kiwify.com.br/SEU_LINK" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-cta-btn text-cta-foreground font-semibold px-10 text-lg transition-all duration-300 h-14 hover:shadow-[0_0_40px_-8px_hsl(var(--cta)/0.5)]">
                  Começar Agora <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
