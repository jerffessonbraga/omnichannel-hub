import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const DAYS = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

// Sample scheduled posts
const scheduledPosts: Record<number, { title: string; color: string }[]> = {
  3: [{ title: "Reel fitness", color: "bg-blue-500/30 text-blue-300" }],
  7: [
    { title: "Dica nutrição", color: "bg-orange-500/30 text-orange-300" },
    { title: "Enquete", color: "bg-green-500/30 text-green-300" },
  ],
  10: [{ title: "Top 5", color: "bg-blue-500/30 text-blue-300" }],
  14: [{ title: "Receita fit", color: "bg-green-500/30 text-green-300" }],
  17: [{ title: "Motivação", color: "bg-purple-500/30 text-purple-300" }],
  21: [
    { title: "Bastidores", color: "bg-green-500/30 text-green-300" },
    { title: "Tutorial", color: "bg-yellow-500/30 text-yellow-300" },
  ],
  24: [{ title: "Guia", color: "bg-blue-500/30 text-blue-300" }],
  28: [{ title: "Reflexão", color: "bg-pink-500/30 text-pink-300" }],
};

const Schedule = () => {
  const [currentMonth] = useState(new Date(2026, 2)); // March 2026
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = 15; // Simulating "today" as 15th

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  const monthName = currentMonth.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-muted-foreground" />
            <h1 className="text-xl font-display font-bold">Fila</h1>
            <span className="text-sm text-muted-foreground">0 posts</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl border border-border/50 p-4 h-fit"
        >
          <p className="text-sm text-muted-foreground text-center py-8">
            Nenhum post na fila ainda.
            <br />
            <span className="text-foreground">Crie conteúdo com IA primeiro.</span>
          </p>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Month Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                <ChevronRight size={16} />
              </button>
              <h2 className="font-display font-bold text-lg capitalize">{monthName}</h2>
            </div>
            <Button size="sm" className="gradient-primary text-primary-foreground font-semibold">
              <Sparkles size={14} className="mr-1.5" />
              Auto-preencher IA
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="glass rounded-2xl border border-border/50 overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-border/30">
              {DAYS.map((day) => (
                <div key={day} className="text-center py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {weeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7 border-b border-border/20 last:border-b-0">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`min-h-[90px] p-2 border-r border-border/20 last:border-r-0 transition-colors ${
                      day === today
                        ? "bg-primary/5 border border-primary/30"
                        : day
                        ? "hover:bg-muted/30"
                        : ""
                    }`}
                  >
                    {day && (
                      <>
                        <span
                          className={`text-xs font-medium ${
                            day === today ? "text-primary font-bold" : "text-muted-foreground"
                          }`}
                        >
                          {day}
                        </span>
                        <div className="mt-1 space-y-1">
                          {scheduledPosts[day]?.map((post, pi) => (
                            <div
                              key={pi}
                              className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${post.color} truncate`}
                            >
                              {post.title}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
