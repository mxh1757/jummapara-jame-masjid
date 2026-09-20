import React, { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";

// Static prayer schedule for Nilphamari, Bangladesh (approximate, Dhaka timezone)
const PRAYER_TIMES = [
  { name: "Fajr", time: "04:48", hue: "from-indigo-900/40 to-sky-700/30" },
  { name: "Sunrise", time: "06:06", hue: "from-amber-300/40 to-orange-400/30" },
  { name: "Dhuhr", time: "12:00", hue: "from-sky-200/40 to-sky-100/20" },
  { name: "Asr", time: "15:48", hue: "from-amber-400/40 to-yellow-300/30" },
  { name: "Maghrib", time: "17:54", hue: "from-orange-500/50 to-rose-700/40" },
  { name: "Isha", time: "19:18", hue: "from-indigo-800/50 to-slate-900/40" },
];

function getCurrentPrayer(now) {
  const mins = now.getHours() * 60 + now.getMinutes();
  const times = PRAYER_TIMES.map((p) => {
    const [h, m] = p.time.split(":").map(Number);
    return { ...p, mins: h * 60 + m };
  });
  let current = times[0];
  for (const t of times) {
    if (mins >= t.mins) current = t;
  }
  return current;
}

export default function PrayerBar() {
  const [now, setNow] = useState(new Date());
  const [active, setActive] = useState(PRAYER_TIMES[0]);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(d);
      setActive(getCurrentPrayer(d));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  });

  return (
    <div className={`relative z-40 bg-gradient-to-r ${active.hue} backdrop-blur-sm border-b border-foreground/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline font-medium">Gopaljhar, Jaldhaka, Nilphamari, Bangladesh</span>
            <span className="sm:hidden font-medium">Nilphamari, BD</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar">
            {PRAYER_TIMES.map((p) => {
              const isActive = p.name === active.name;
              return (
                <div
                  key={p.name}
                  className={`flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                    isActive ? "text-foreground font-semibold" : "text-foreground/55"
                  }`}
                >
                  {isActive && <Clock className="w-3 h-3" />}
                  <span>{p.name}</span>
                  <span className="tabular-nums">{p.time}</span>
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-foreground/70 tabular-nums">
            <Clock className="w-3.5 h-3.5" />
            {timeStr}
          </div>
        </div>
      </div>
    </div>
  );
}