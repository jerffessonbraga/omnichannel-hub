import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Conecte seus canais", desc: "Integre WhatsApp, Instagram, Messenger e outros canais em minutos." },
  { num: "02", title: "Configure automações", desc: "Crie fluxos e agentes de IA para automatizar o atendimento." },
  { num: "03", title: "Escale seu negócio", desc: "Acompanhe métricas, otimize processos e cresça sem limites." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Como funciona em{" "}
            <span className="gradient-text">3 passos simples</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-xl mb-6">
                {s.num}
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-16 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
