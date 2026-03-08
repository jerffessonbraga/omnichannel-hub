import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    desc: "Ideal para pequenas empresas começarem.",
    features: ["2 canais integrados", "1.000 conversas/mês", "1 agente de IA", "CRM básico", "Suporte por email"],
    popular: false,
  },
  {
    name: "Pro",
    price: "R$ 497",
    period: "/mês",
    desc: "Para empresas em crescimento acelerado.",
    features: ["Todos os canais", "10.000 conversas/mês", "5 agentes de IA", "CRM completo", "Automações avançadas", "Email marketing", "Suporte prioritário"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    desc: "Para grandes operações com necessidades específicas.",
    features: ["Canais ilimitados", "Conversas ilimitadas", "Agentes de IA ilimitados", "API completa", "White label", "Gerente dedicado", "SLA garantido"],
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

const Pricing = () => {
  return (
    <section id="precos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary mb-4 px-4 py-1.5 rounded-full glass"
          >
            Preços
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Planos que{" "}
            <span className="gradient-text text-glow">cabem no seu bolso</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Escolha o plano ideal para o seu negócio. Cancele quando quiser.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`relative glass rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-glow md:scale-105 shadow-glow"
                  : "hover:border-glow"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-glow"
                >
                  <Sparkles size={12} /> Mais Popular
                </motion.div>
              )}
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <a href={plan.name === "Enterprise" ? "#contato" : "https://pay.kiwify.com.br/SEU_LINK"} className="block" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full font-semibold mb-6 h-12 ${
                    plan.popular
                      ? "gradient-cta-btn text-cta-foreground hover:shadow-[0_0_40px_-8px_hsl(var(--cta)/0.5)] transition-shadow duration-300"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border/50"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                </Button>
              </a>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + j * 0.05 }}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
