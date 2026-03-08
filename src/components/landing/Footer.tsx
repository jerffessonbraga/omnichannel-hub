const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">O</span>
              </div>
              <span className="font-display font-bold text-foreground">OmniChannel</span>
            </div>
            <p className="text-sm text-muted-foreground">A plataforma omnicanal completa para escalar seu negócio.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#recursos" className="hover:text-foreground transition-colors">Recursos</a></li>
              <li><a href="#precos" className="hover:text-foreground transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Integrações</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carreiras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-foreground">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Plataforma OmniChannel. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
