import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

const Pricing = () => {
  return (
    <section id="precos" className="py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planos que{" "}
            <span className="gradient-text">cabem no seu bolso</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha o plano ideal para o seu negócio. Cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary shadow-card-hover scale-105"
                  : "border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                  Mais Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <Button
                className={`w-full font-semibold mb-6 ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
