import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Costa",
    role: "CEO, TechVendas",
    text: "A plataforma transformou nosso atendimento. Reduzimos o tempo de resposta em 80% com os agentes de IA.",
    avatar: "AC",
  },
  {
    name: "Carlos Mendes",
    role: "Diretor, MegaShop",
    text: "Ter todos os canais em um só lugar mudou completamente nossa operação. Recomendo para qualquer empresa.",
    avatar: "CM",
  },
  {
    name: "Mariana Silva",
    role: "Head de Marketing, GrowUp",
    text: "O CRM integrado e as automações nos ajudaram a triplicar a conversão de leads em 3 meses.",
    avatar: "MS",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O que nossos{" "}
            <span className="gradient-text">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
