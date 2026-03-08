import { motion } from "framer-motion";
import logo from "@/assets/instaflow-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.04),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-display font-bold text-sm">IF</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">InstaFlow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">A plataforma omnicanal completa para escalar seu negócio.</p>
          </motion.div>
          
          {[
            {
              title: "Produto",
              links: [
                { label: "Recursos", href: "#recursos" },
                { label: "Preços", href: "#precos" },
                { label: "Integrações", href: "#" },
              ],
            },
            {
              title: "Empresa",
              links: [
                { label: "Sobre", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Carreiras", href: "#" },
              ],
            },
            {
              title: "Redes Sociais",
              links: [
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "YouTube", href: "#" },
              ],
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <h4 className="font-display font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-foreground transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} InstaFlow. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
