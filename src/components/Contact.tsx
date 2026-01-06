import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 71 644 14 88",
      href: "tel:+41716441488",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@autodistrikt.ch",
      href: "mailto:info@autodistrikt.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Hauptstrasse 66, 8586 Erlen, CH",
      href: "https://maps.google.com/?q=Hauptstrasse+66+8586+Erlen",
    },
  ];

  return (
    <section id="kontakt" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-bold">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : undefined}
                  rel={info.label === t.contact.address ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/50 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">{info.label}</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="pt-4">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41716441488">{t.contact.callNow}</a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-medium h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.5890000000003!2d8.652222!3d47.554722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900aa0000001!2sHauptstrasse%2066%2C%208586%20Erlen!5e0!3m2!1sen!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
