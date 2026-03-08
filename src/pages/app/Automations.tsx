import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Film, Calendar, Hash, MessageSquare, BarChart3, RefreshCcw } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const automations = [
  {
    id: "reels",
    icon: Film,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    title: "Geração Semanal de Reels",
    description: "IA cria roteiro, legenda e hashtags toda semana com Gemini automaticamente.",
    active: true,
  },
  {
    id: "scheduling",
    icon: Calendar,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/20",
    title: "Agendamento Inteligente",
    description: "Publica nos melhores horários baseado no engajamento do seu perfil.",
    active: true,
  },
  {
    id: "hashtags",
    icon: Hash,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
    title: "Hashtags Automáticas",
    description: "Hashtags segmentadas e otimizadas para cada tipo de conteúdo.",
    active: true,
  },
  {
    id: "replies",
    icon: MessageSquare,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    title: "Respostas Automáticas",
    description: "Responde comentários frequentes com mensagens personalizadas pela IA.",
    active: false,
  },
  {
    id: "report",
    icon: BarChart3,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/20",
    title: "Relatório Semanal",
    description: "Resumo de desempenho toda segunda via WhatsApp ou Email.",
    active: false,
  },
  {
    id: "repost",
    icon: RefreshCcw,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
    title: "Repost de Menções",
    description: "Reposta automaticamente quando marcam você em conteúdos relevantes.",
    active: false,
  },
];

const Automations = () => {
  const [states, setStates] = useState<Record<string, boolean>>(
    Object.fromEntries(automations.map((a) => [a.id, a.active]))
  );

  const activeCount = Object.values(states).filter(Boolean).length;

  const toggle = (id: string) => {
    setStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap size={20} className="text-primary" />
            <h1 className="text-xl font-display font-bold">Automações</h1>
          </div>
          <p className="text-sm text-muted-foreground">Piloto automático para o seu Instagram</p>
        </div>
        <span className="text-sm text-green-400 font-medium">
          • {activeCount} de {automations.length} ativas
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {automations.map((auto, i) => {
          const Icon = auto.icon;
          const isActive = states[auto.id];

          return (
            <motion.div
              key={auto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`glass rounded-2xl border p-6 transition-all duration-300 ${
                isActive
                  ? "border-primary/30 shadow-[0_0_20px_-8px_hsl(var(--primary)/0.2)]"
                  : "border-border/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${auto.iconBg} flex items-center justify-center mb-4`}>
                <Icon size={22} className={auto.iconColor} />
              </div>

              <h3 className="font-display font-bold mb-1">{auto.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{auto.description}</p>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${isActive ? "text-green-400" : "text-muted-foreground"}`}>
                  {isActive ? "• Ativa" : "○ Inativa"}
                </span>
                <Switch checked={isActive} onCheckedChange={() => toggle(auto.id)} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Automations;
