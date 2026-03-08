import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              Plataforma Omnicanal White Label
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Todos os seus canais.{" "}
              <span className="gradient-text">Uma só plataforma.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Gerencie WhatsApp, Instagram, Messenger, CRM, automações e agentes de IA em um único lugar. Escale seu atendimento sem complicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#precos">
                <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 text-base hover:opacity-90 transition-opacity">
                  Começar Gratuitamente <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#recursos">
                <Button size="lg" variant="outline" className="font-semibold px-8 text-base border-border text-foreground hover:bg-muted">
                  Ver Recursos
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MessageCircle size={14} className="text-primary" /> +50k mensagens/mês</span>
              <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> +2.000 empresas</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover bg-card border border-border p-4">
              {/* Mock dashboard */}
              <div className="rounded-xl bg-muted p-4 space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="flex-1 h-6 rounded-md bg-card/60 ml-4" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Conversas", value: "1.284", color: "bg-primary/20 text-primary" },
                    { label: "Leads", value: "342", color: "bg-secondary/20 text-secondary" },
                    { label: "Automações", value: "28", color: "bg-accent/20 text-accent" },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                      <div className="text-xs font-medium opacity-80">{stat.label}</div>
                      <div className="text-xl font-display font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mt-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-card/60 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 rounded bg-muted w-2/3" />
                        <div className="h-2 rounded bg-muted w-1/3" />
                      </div>
                      <div className="text-xs text-muted-foreground">agora</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card-hover border border-border p-3 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                <Zap size={16} />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">IA Ativa</div>
                <div className="text-[10px] text-muted-foreground">Respondendo...</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
