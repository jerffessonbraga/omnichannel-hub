import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X, Rocket, Key, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [showWarning, setShowWarning] = useState(true);
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Warning Banner */}
      {showWarning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl border border-yellow-500/30 p-6"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={22} />
            <div className="flex-1">
              <h3 className="font-display font-bold text-yellow-400 mb-2">
                Para a IA funcionar: baixe e abra localmente
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                O Claude.ai bloqueia chamadas a APIs externas. Siga estes passos:
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>
                  Clique em <strong className="text-foreground">⬇ Download / Baixar</strong> no topo direito do preview
                </li>
                <li>
                  Salve o arquivo <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">instaflow.html</code>
                </li>
                <li>
                  Abra no <strong className="text-foreground">Chrome ou Edge</strong> do seu PC
                </li>
                <li>
                  Cole a chave Gemini → Testar → funciona! 🚀
                </li>
              </ol>
            </div>
            <button onClick={() => setShowWarning(false)} className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl border border-border/50 p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30 mb-4">
            🚀 VERSÃO GRATUITA
          </span>
          <h1 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-3">
            Bem-vindo ao InstaFlow
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Automação inteligente para o seu Instagram, usando Gemini AI do Google — 100% gratuito.
            Configure em 2 minutos e comece a criar conteúdo profissional.
          </p>
        </div>
      </motion.div>

      {/* API Key Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl border border-border/50 p-8"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
            1
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Key size={18} className="text-primary" />
              <h2 className="font-display font-bold text-lg">API Gemini (Google)</h2>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                Grátis
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              O Gemini 1.5 Flash tem <strong className="text-foreground">15 req/minuto</strong> e{" "}
              <strong className="text-foreground">1 milhão de tokens/dia</strong> sem pagar nada.
              Mais do que suficiente para dezenas de posts por dia.
            </p>
          </div>
        </div>

        <div className="space-y-3 ml-14">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="text-primary">▸</span>
              Acesse{" "}
              <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                aistudio.google.com/apikey <ExternalLink size={12} />
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary">▸</span> Faça login com sua conta Google
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary">▸</span> Clique em{" "}
              <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">"Create API Key"</code>{" "}
              e copie
            </p>
            <p className="flex items-center gap-2">
              <span className="text-primary">▸</span> Cole abaixo e clique em Testar
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <Input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="bg-muted/50 border-border/50 font-mono text-sm"
            />
            <Button className="gradient-primary text-primary-foreground font-semibold shrink-0">
              <Play size={14} className="mr-1.5" />
              Testar
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
