import { NavLink, useLocation } from "react-router-dom";
import { Settings, Sparkles, Calendar, Zap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/instaflow-logo.png";

const navItems = [
  { label: "Configuração", href: "/app", icon: Settings, end: true },
  { label: "Criar com IA", href: "/app/criar", icon: Sparkles },
  { label: "Agendar", href: "/app/agendar", icon: Calendar, badge: 0 },
  { label: "Automações", href: "/app/automacoes", icon: Zap },
];

const AppNavbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-border/50">
      <div className="flex items-center justify-between h-14 px-4 md:px-6">
        {/* Logo */}
        <a href="/app" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="InstaFlow" className="w-8 h-8 rounded-lg" />
          <span className="font-display font-bold text-foreground">InstaFlow</span>
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
            Grátis
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.end
              ? location.pathname === item.href
              : location.pathname.startsWith(item.href);

            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon size={16} />
                {item.label}
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="ml-1 text-[10px] font-bold bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <Settings size={14} className="mr-1.5" />
            Configure a API
          </Button>
          <Button size="sm" className="gradient-primary text-primary-foreground font-semibold">
            <Plus size={14} className="mr-1.5" />
            Novo Post
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden overflow-x-auto border-t border-border/30 px-2 py-1 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.end
            ? location.pathname === item.href
            : location.pathname.startsWith(item.href);

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Icon size={14} />
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default AppNavbar;
