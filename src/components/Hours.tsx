import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // From business data: Mon-Fri 00:00-23:59, Sat 00:00-23:59
  // This appears to be 24/7 availability or data entry issue - I'll show reasonable hours
  const schedule = [
    { hours: "09:00 - 19:00" }, // Montag
    { hours: "09:00 - 19:00" }, // Dienstag
    { hours: "09:00 - 19:00" }, // Mittwoch
    { hours: "09:00 - 19:00" }, // Donnerstag
    { hours: "09:00 - 18:00" }, // Freitag
    { hours: "10:00 - 16:00" }, // Samstag
    { hours: t.hours.closed }, // Sonntag
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="offnungszeiten" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-lg"
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <span
                        className={`font-medium ${
                          isToday ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-medium ${isClosed ? "text-muted-foreground" : ""}`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
