import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl gradient-cta p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 2.000 empresas que já usam a Plataforma OmniChannel para escalar seus resultados.
            </p>
            <a href="#precos">
              <Button size="lg" className="bg-card text-foreground font-semibold px-8 text-base hover:bg-card/90 transition-colors">
                Começar Agora <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
