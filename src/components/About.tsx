import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="uber-mich" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-bold">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.about.title1} <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/img-2.jpg"
              alt="Engine"
              className="rounded-lg shadow-medium w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-border">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">{t.about.stat1}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">{t.about.stat2}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">{t.about.stat3}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-accent/20" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
