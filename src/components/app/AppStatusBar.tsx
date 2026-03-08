import { Bot, Instagram, Layers } from "lucide-react";

const AppStatusBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-border/50 h-8 flex items-center px-4 text-xs text-muted-foreground gap-6">
      <div className="flex items-center gap-1.5">
        <Bot size={12} />
        <span>Gemini: não configurado</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Instagram size={12} />
        <span>Instagram: não conectado</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Layers size={12} />
        <span>Fila: 0 posts</span>
      </div>
      <div className="ml-auto text-[10px] text-muted-foreground/60">
        InstaFlow ✦ Powered by Gemini Free
      </div>
    </div>
  );
};

export default AppStatusBar;
