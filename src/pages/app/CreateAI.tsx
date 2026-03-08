import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Film, Image, Circle, LayoutGrid, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const postTypes = [
  { id: "reel", label: "REEL", icon: Film },
  { id: "feed", label: "FEED", icon: LayoutGrid },
  { id: "story", label: "STORY", icon: Circle },
  { id: "carrossel", label: "CARROSSEL", icon: LayoutGrid },
];

const tones = [
  { id: "descontraido", label: "Descontraído", emoji: "😊" },
  { id: "profissional", label: "Profissional", emoji: "💼" },
  { id: "empolgante", label: "Empolgante", emoji: "🔥" },
  { id: "educativo", label: "Educativo", emoji: "🎓" },
  { id: "humoristico", label: "Humorístico", emoji: "🎭" },
  { id: "premium", label: "Premium", emoji: "💎" },
];

const CreateAI = () => {
  const [postType, setPostType] = useState("reel");
  const [tone, setTone] = useState("descontraido");
  const [niche, setNiche] = useState("");
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-primary" />
          <h1 className="text-xl font-display font-bold">Criar com IA</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary font-medium">
            ✦ Gemini Free
          </span>
          <span className="text-xs text-muted-foreground">
            Como aparece no Instagram
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Post Type */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
              Tipo de Postagem
            </label>
            <div className="grid grid-cols-4 gap-2">
              {postTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setPostType(type.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                      postType === type.id
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border/50 bg-card/50 text-muted-foreground hover:border-border"
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-xs font-bold">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Niche */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
              Nicho
            </label>
            <Input
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="🏷 Gastronomia / Restaurante"
              className="bg-card/50 border-border/50"
            />
          </div>

          {/* Topic */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
              Tema / Assunto
            </label>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: receita fit para café da manhã..."
              className="bg-card/50 border-border/50"
            />
          </div>

          {/* Tone */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
              Tom de Voz
            </label>
            <div className="flex flex-wrap gap-2">
              {tones.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTone(t.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    tone === t.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  {t.emoji} {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Details */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
              Detalhes Extras
            </label>
            <Textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Promoção, produto, CTA específico..."
              className="bg-card/50 border-border/50 min-h-[100px]"
            />
          </div>

          {/* Schedule */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
              Agendar Para
            </label>
            <Input
              type="datetime-local"
              defaultValue="2026-03-08T02:00"
              className="bg-card/50 border-border/50"
            />
          </div>

          {/* Generate Button */}
          <Button className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
            <Sparkles size={18} className="mr-2" />
            Gerar com Gemini
          </Button>
        </motion.div>

        {/* Right - Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Eye size={16} className="text-muted-foreground" />
            <span className="font-display font-bold">Preview</span>
          </div>

          {/* Phone Mockup */}
          <div className="w-[300px] glass rounded-3xl border border-border/50 overflow-hidden">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 py-2 text-[10px] text-muted-foreground">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>•••</span>
              </div>
            </div>

            {/* Instagram Header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30">
              <div className="w-8 h-8 rounded-full gradient-primary" />
              <div>
                <p className="text-xs font-bold">@seuperfil</p>
                <p className="text-[10px] text-muted-foreground">Agora</p>
              </div>
              <span className="ml-auto text-muted-foreground">•••</span>
            </div>

            {/* Content Area */}
            <div className="aspect-square bg-muted/20 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <LayoutGrid size={32} className="mx-auto mb-2 opacity-40" />
                <p className="text-xs opacity-60">Preview aqui</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="text-lg">❤️</span>
              <span className="text-lg">💬</span>
              <span className="text-lg">📤</span>
              <span className="ml-auto text-lg">✏️</span>
            </div>
            <p className="px-4 pb-4 text-xs text-muted-foreground">
              Gere um conteúdo para ver o preview...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateAI;
