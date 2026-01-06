import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter out broken images (img-5, img-10, img-11, img-16, img-17) and create gallery
  const images = [
    { src: "/images/img-1.jpg", alt: "Rotes Performance Auto" },
    { src: "/images/img-2.jpg", alt: "Motor Überholung" },
    { src: "/images/img-3.jpg", alt: "Motorblöcke Restauration" },
    { src: "/images/img-4.jpg", alt: "Schwarzes Tuning Auto" },
    { src: "/images/img-6.jpg", alt: "Engine mit rotem Detail" },
    { src: "/images/img-7.jpg", alt: "Blaues Cabriolet" },
    { src: "/images/img-8.jpg", alt: "Weißes Golf Tuning" },
    { src: "/images/img-9.jpg", alt: "Motorrad und Auto" },
    { src: "/images/img-12.jpg", alt: "Schwarzes E30 Drift Auto" },
    { src: "/images/img-13.jpg", alt: "Felgen und Bremsen" },
    { src: "/images/img-14.jpg", alt: "Hintergrund Detail" },
    { src: "/images/img-15.jpg", alt: "Auto Heck Detail" },
    { src: "/images/img-18.jpg", alt: "Werkstatt Auto" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <section id="galerie" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-bold">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <div className="mb-8">
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="wait">
                {visibleImages.map((image, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
