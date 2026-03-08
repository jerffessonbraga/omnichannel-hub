import { motion } from "framer-motion";

const channels = [
  { name: "WhatsApp", icon: "💬" },
  { name: "Instagram", icon: "📸" },
  { name: "Messenger", icon: "💭" },
  { name: "Email", icon: "📧" },
  { name: "Telegram", icon: "✈️" },
];

const Channels = () => {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Integrado com os principais canais
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-2xl">{ch.icon}</span>
              <span className="font-medium text-sm">{ch.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Channels;
